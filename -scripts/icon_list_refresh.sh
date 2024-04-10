#!/bin/bash

if [ -z $1 ]
then
  echo "Provide the path to the TinyMCE source root directory"
  exit 1
else
  tinymce_root=$1
fi
# Output AsciiDoc file
list_file='modules/ROOT/partials/configuration/icon_list.adoc'
# Input directory containing the icon SVGs
icon_svg_dir='modules/ROOT/images/icons/'
rm -rf $icon_svg_dir*
cp $tinymce_root/modules/oxide-icons-default/src/svg/* $icon_svg_dir

<< COMMENT
IF statement to verify that the markdown file already exists
  (A lazy check to ensure the script is run from the root directory).
If file not found, informative message should be printed in the console
  and the script will exit.
COMMENT

if [ -e $list_file ]
  then
    echo ""
  else
    echo "please execute from the TinyMCE documentation root directory (such as './-scripts/icon_list_refresh.sh') and ensure '$list_file' exists"
    exit 1
fi

# create a list of input SVG files
icon_list=$(ls $icon_svg_dir)

<< COMMENT
* Clear the existing contents of the output markdown file.
* Create the output table header in the output markdown file.
COMMENT

echo -e "[cols=\"^,^,^\",options=\"header\"]\n|===\n|Identifier |Preview |Filename" > $list_file

# Loop to populate the table using the input information
for svgName in $icon_list
do
  iconID=${svgName%%.*} # strip the file extension
  echo -e "| \`+$iconID+\` | image:icons/$svgName[$svgName] | \`+$svgName+\`" >> $list_file
done

echo -e "|===" >> $list_file

echo "completed"
exit 0
