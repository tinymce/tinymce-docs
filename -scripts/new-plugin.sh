#!/bin/bash
# Create a new plugin

if [[ "$(basename "$(pwd)")" == "-scripts" ]]; then
  cd ..
fi

echo "Working directory: $(pwd)"

# Plugin code
read -p "Enter the plugin code: " plugin_code

plugin_template="./-new-material-templates/plugin-documentation-templates/ROOT/pages/pluginpage.adoc"
plugin_file="./modules/ROOT/pages/$plugin_code.adoc"

while [[ -e "$plugin_file" || -z "$(echo "$plugin_code" | tr -d '[:space:]')" ]]; do
  if [[ -e "$plugin_file" ]]; then
    echo "Error: File already exists: $plugin_file"
  else
    echo "Error: Plugin code cannot be empty or whitespace"
  fi
  read -p "Please enter a different plugin code: " plugin_code
  plugin_file="./modules/ROOT/pages/$plugin_code.adoc"
done

# Plugin name
read -p "Enter the plugin name: " plugin_name

while [[ -z "$(echo "$plugin_name" | tr -d '[:space:]')" ]]; do
  echo "Error: Plugin name cannot be empty or whitespace"
  read -p "Please enter a different plugin name: " plugin_name
done

# Configuration options
config_options=()
while true; do
  read -p "Enter a configuration option (leave empty to finish): " option
  if [[ -z $option ]]; then
    break
  fi
  config_options+=("$option")
done

# List all files to be created
echo "Files to be created:"
echo "Plugin File: $plugin_file"
for option in "${config_options[@]}"; do
  configuration_option_file="./modules/ROOT/partials/configuration/$option.adoc"
  echo "Configuration Option File: $configuration_option_file"
done

# Prompt the user to confirm before creating files
read -p "Do you want to create the above files? (y/n): " confirm
if [[ $confirm != "y" ]]; then
  echo "Files creation cancelled."
  exit 0
fi

# Create plugin file
cp "$plugin_template" "$plugin_file"
sed -i "" "s/<plugincode>/$plugin_code/g" "$plugin_file"
sed -i "" "s/<Plugin name>/$plugin_name/g" "$plugin_file"

# Create configuration option files
for option in "${config_options[@]}"; do
  configuration_option_template="./-new-material-templates/plugin-documentation-templates/ROOT/partials/configuration/<configuration_option>.adoc"
  configuration_option_file="./modules/ROOT/partials/configuration/$option.adoc"

  cp "$configuration_option_template" "$configuration_option_file"
  sed -i "" "s/<configuration_option>/$option/g" "$configuration_option_file"
done

# Add configuration options to plugin file
# target_line_number=$(grep -n "include::partial\$configuration/<setting_name>.adoc[leveloffset=+1]" "$plugin_file" | cut -d ":" -f 1)

# for option in "${config_options[@]}"; do
#   new_line="include::partial\$configuration/$option.adoc[leveloffset=+1]"
#   sed -i "" "$target_line_number a\\
# $new_line" "$plugin_file"
#   ((target_line_number++))
# done

# sed -i "" "/include::partial\$configuration\/<setting_name>.adoc[leveloffset=+1]/d" "$plugin_file"