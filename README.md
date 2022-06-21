# DDD Design Sample

## DDD Design with Clean Architecture を用いた開発の際に気をつけること

- 依存を許容する方向性に注意する

- ドメインロジックをドメイン層に記述する

## 残りやった方がよさそうなこと

- [ ] E2Eテスト

## セットアップ

### Mongo と Node のダウンロード、インストール

```
npm -v
node -v
mongod --version
```

上記スクリプト実行でエラーが出なければ問題ないと思う

node_modulesのインストール

```
npm install
```

MongoDBサーバーの起動

```
npm run mongo:start
```

サーバーの起動

```
npm run start
```

SignUpリクエスト
```
sh scripts/post-test.sh
// => {"ok":true}
// 実行後DBにデータが保存されているはずです
// Mongo Compass というGUIツールもあるので、何かしらで確認
```



## ディレクトリ構成に関して

基本的にオニオンアーキテクチャに準拠

![オニオンアーキテクチャ](/public/2022-06-22-07-58-53.png)

上記画像のカテゴリを `src` 配下に展開している
- src/
  - presentaion : プレゼンテーション層
    - controllers : コントローラー
    - routes : ルーティング
    - middlewares : ミドルウェア
  - infrastracture : インフラ層
    - repositories : リポジトリの実態
    - models : データモデル
  - application : アプリケーション層
    - services : アプリケーションサービス
    - repositories : リポジトリのインターフェース
  - domain
    - services : ドメインサービス
    - entities : エンティティオブジェクト <- これがドメインモデルに該当します
      - values : バリューオブジェクト
    - shared : 仕様等

- src/assets : 財産として、流用できるようなものを配置
- src/utils : アプリ固有の便利機能を配置
- src/modules : リポジトリやサービスのインスタンス生成をまとめて行なったりする。名前の通りモジュールを配置

- src/mian 初期読み込みファイル
- src/app express のルーティングや全体に反映するミドルウェアなどの実装