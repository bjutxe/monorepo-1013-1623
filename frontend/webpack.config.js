const path = require('path');

module.exports = {
  entry: './src/app.ts', // エントリーポイントを明示的に指定
  output: {
    filename: 'bundle.js', // 出力ファイル名
    path: path.resolve(__dirname, 'dist'), // 出力先ディレクトリ
  },
  resolve: {
    extensions: ['.ts', '.js'], // 解決する拡張子
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // TypeScript ファイルに対する処理
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // 公開ディレクトリを `static.directory` に設定
    },
    port: 3000, // 開発サーバーのポート
    hot: true, // ホットモジュールリプレースメントを有効化
    open: true, // サーバー起動時にブラウザを自動で開く
  },
};
