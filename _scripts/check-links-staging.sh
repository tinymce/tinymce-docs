#!/bin/bash

# read more here
# https://www.notion.so/tinycloud/Check-for-broken-links-4876019acee44cc88c5082e447c85519

mkdir -p ./_report/report
linkchecker -r 2 -t 10 https://staging.tiny.cloud/docs/ --check-extern --output=html --ignore-url="https://community.tiny.cloud/.*" > _report/report/index.html || true
