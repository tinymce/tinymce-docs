#!/bin/bash

PLAYBOOK="$1"

BUILD_DIR="build/site/tinymce"

SOURCE_VERSION="latest"
SOURCE_DIR="$BUILD_DIR/$SOURCE_VERSION/"

DEST_VERSION=6
DEST_DIR="$BUILD_DIR/$DEST_VERSION/"

rm -rf "$BUILD_DIR"
antora "$PLAYBOOK"

echo -e "\nCopying $SOURCE_VERSION build to $DEST_VERSION directory."

mkdir "$DEST_DIR"

cp -a "$SOURCE_DIR." "$DEST_DIR"

echo "$DEST_VERSION site now in sync with $SOURCE_VERSION."
