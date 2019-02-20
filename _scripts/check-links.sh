#!/bin/bash

# read more here
# https://www.notion.so/tinycloud/Check-for-broken-links-4876019acee44cc88c5082e447c85519

mkdir -p ./_report/report
linkchecker -r 2 -t 10 http://staging.tiny.cloud/docs/ --user-agent=linkchecker --output=html > _report/report/index.html || true
