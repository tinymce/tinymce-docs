#!/bin/bash

mkdir -p ./_report
linkchecker -r 0 http://staging.tiny.cloud/docs/ --user-agent=linkchecker --output=html > _report/report.html