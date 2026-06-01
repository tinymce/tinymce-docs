#!/usr/bin/env bash
#
# Re-renders all .mmd Mermaid sources to .svg in the on-premises images folder.
#
# Usage (from repo root):
#   ./-scripts/render-mermaid.sh
#
# Requirements:
#   Node.js (npx downloads @mermaid-js/mermaid-cli automatically)
#
set -euo pipefail

DIAGRAM_DIR="modules/ROOT/images/tinymceai-on-premises"
CONFIG_FILE=$(mktemp)

cat > "$CONFIG_FILE" << 'JSON'
{
  "htmlLabels": false,
  "flowchart": { "htmlLabels": false, "useMaxWidth": true },
  "sequence": { "useMaxWidth": true },
  "theme": "default"
}
JSON

trap 'rm -f "$CONFIG_FILE"' EXIT

count=0
for mmd in "$DIAGRAM_DIR"/*.mmd; do
  [ -f "$mmd" ] || continue
  svg="${mmd%.mmd}.svg"
  name=$(basename "$mmd")
  printf "  Rendering %s\n" "$name"
  npx -y @mermaid-js/mermaid-cli -i "$mmd" -o "$svg" \
    -c "$CONFIG_FILE" --backgroundColor white 2>/dev/null

  # Mermaid outputs width="100%" which has no intrinsic size in <img> tags.
  # Replace with the actual pixel width from the viewBox so browsers can
  # calculate the correct aspect ratio when the page scales the image.
  vb_width=$(grep -o 'viewBox="[^"]*"' "$svg" | head -1 | awk -F'[ "]' '{print $4}')
  if [ -n "$vb_width" ]; then
    vb_int=$(printf "%.0f" "$vb_width")
    perl -i -pe "s/width=\"100%\"/width=\"${vb_int}\"/" "$svg"
  fi

  count=$((count + 1))
done

printf "\nRendered %d diagrams in %s\n" "$count" "$DIAGRAM_DIR"
