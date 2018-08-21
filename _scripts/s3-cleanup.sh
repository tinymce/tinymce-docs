#!/bin/bash

set -e

export AWS_ACCESS_KEY_ID="$S3_KEY"
export AWS_SECRET_ACCESS_KEY="$S3_SECRET"
export AWS_DEFAULT_REGION="${S3_REGION:=us-east-1}"

branches=($(git ls-remote --heads https://github.com/tinymce/tinymce-docs.git | awk -F/ '{ print $3 }'))
exclude="--exclude docs/* "
list=""

for branch in "${branches[@]}"; do
  exclude="$exclude--exclude $branch/* "
  list="$list\n   - $branch"
done

echo -e "\n > deleting old branches from bucket"
echo  -e " > active branches: $list\n"
echo "aws s3 rm "$S3_BUCKET" --recursive $exclude"

aws s3 rm "$S3_BUCKET/" --recursive $exclude
