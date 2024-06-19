# ベースイメージとして公式のNode.jsイメージを使用
FROM node:18-alpine

# 作業ディレクトリを作成
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# Next.js のビルドを実行
COPY . .
RUN npm run build

# アプリケーションを起動する
CMD ["npm", "start"]

# コンテナが使用するポートを指定
EXPOSE 3000
