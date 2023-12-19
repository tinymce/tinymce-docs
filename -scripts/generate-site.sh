#!/bin/bash

PLAYBOOK="$1"


BUILD_DIR="build"
SITE_DIR="$BUILD_DIR/site/tinymce"

SOURCE_VERSION="latest"
SOURCE_DIR="$SITE_DIR/$SOURCE_VERSION/"
DEST_VERSION=6
DEST_DIR="$SITE_DIR/$DEST_VERSION/"

echo -e "\nRemoving existing $SITE_DIR directory."
rm -rf "$SITE_DIR"

echo -e "\nGenerating antora documentation."
antora "$PLAYBOOK"

echo -e "\nCopying all $SOURCE_VERSION content to $DEST_VERSION directory."
mkdir "$DEST_DIR"
cp -a "$SOURCE_DIR." "$DEST_DIR"

echo "$DEST_VERSION site now in sync with $SOURCE_VERSION."
