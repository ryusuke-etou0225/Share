# ベースイメージ
FROM ubuntu:22.04

# 必要なパッケージのインストール
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk nginx curl && \
    apt-get clean

# Spring Bootアプリのビルド成果物をコピー
COPY build/lib/demo-0.0.1-SNAPSHOT.jar /app/demo.jar

# Nginx設定ファイルをコピー
COPY nginx/default.conf /etc/nginx/sites-available/default
# ポート開放
EXPOSE 80 8080

# 起動スクリプト
CMD service nginx start && java -jar /app/demo.jar