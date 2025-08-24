FROM eclipse-temurin:17-jdk-alpine

# 作業ディレクトリ
WORKDIR /app

# javaアプリの配置
COPY build/libs/my-spring-app-0.0.1-SNAPSHOT.jar app.jar

# nginxのインストール
RUN apk update && apk add --no-cache nginx
# nginx設定ファイルの配置
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# 起動スクリプトの配置
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# ポート公開（nginxが80番、Jabaアプリが8080番）
EXPOSE 80 8080

ENTRYPOINT [ "/entrypoint.sh" ]