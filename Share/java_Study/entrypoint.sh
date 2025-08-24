#!/bin/sh

# nginx をフォアグラウンドで起動
nginx -g 'daemon off;' &

# Java アプリを起動（execでPID 1にする）
exec java -jar /app/app.jar