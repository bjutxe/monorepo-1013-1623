# ベースイメージ
FROM node:16-alpine

# 作業ディレクトリの設定
WORKDIR /usr/src/app

# パッケージのインストール
COPY package*.json ./
RUN npm install

# アプリケーションのコピー
COPY . .

# 開発サーバーの起動
CMD ["npm", "run", "dev"]
