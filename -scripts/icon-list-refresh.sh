#!/bin/bash

if [ -z $1 ]
then
  echo "Provide the path to the TinyMCE source root directory."
  exit 1
else
  tinymceRoot=$1
fi
# Output AsciiDoc file
listFile='modules/ROOT/partials/configuration/icon_list.adoc'
# Input directory containing the icon SVGs
iconSVGdir='modules/ROOT/images/icons/'
rm -rf $iconSVGdir*
cp $tinymceRoot/modules/oxide-icons-default/src/svg/* $iconSVGdir


# IF statement to verify that the file already exists.
# (A lazy check to ensure the script is run from the root directory).
# If the file is not found, the error message is printed to STD OUT
# and the script exits.
if [ -e $listFile ]
  then
    echo ""
  else
    echo "Run from tinymce-docs root — ./-scripts/icon-list-refresh.sh — and ensure '$listFile' exists."
    exit 1
fi

# create a list of input SVG files
icon_list=$(ls $iconSVGdir)


# Clear the existing contents of the output file.
# Create the output table header in the output file.
echo -e "[cols=\"^,^,^\",options=\"header\"]\n|===\n|Identifier |Preview |Filename" > $listFile

# Loop to populate the table using the input information
for svgName in $icon_list
do
  iconID=${svgName%%.*} # strip the file extension
  echo -e "| \`+$iconID+\` | image:icons/$svgName[$svgName] | \`+$svgName+\`" >> $listFile
done

echo -e "|===" >> $listFile

echo "completed"
exit 0
