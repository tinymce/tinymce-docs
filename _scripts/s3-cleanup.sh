#!/bin/bash

set -e

export AWS_ACCESS_KEY_ID=$S3_KEY
export AWS_SECRET_ACCESS_KEY=$S3_SECRET

branches=$(git ls-remote --heads git@github.com:tinymce/tinymce-docs.git | awk -F/ '{ print $3 }')
exclude=""

for branch in ${branches[@]}; do
  exclude="$exclude --exclude \"$branch/*\""
done

aws s3 rm "$S3_BUCKET/test" --region ${S3_REGION:=us-east-1} --recursive $exclude
