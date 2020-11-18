#!/bin/sh
echo `pwd`
nohup npx ng serve --host 0.0.0.0 2>&1 >> /var/log/ng.log &
