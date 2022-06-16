module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2017
  },
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["*.ts"],
      parser: require.resolve("@typescript-eslint/parser"),
      parserOptions: { sourceType: "module" },
      plugins: ["@typescript-eslint", "import"],
      rules: {
        //  エイリアス設定を許可
        "import/no-unresolved": "off",

        //  指定したNode.jsのバージョンでサポートされていない構文を使おうとすると警告します
        "node/no-unsupported-features/es-syntax": "off",

        //  クラスの名重複を拒否
        "no-dupe-class-members": "error",

        //  宣言はしているが利用していない不要な変数を拒否 引数はOK
        "no-unused-vars": ["error", { args: "none" }],

        //  配列はリテラル文法で作成を強制
        "no-array-constructor": "error",
        "@typescript-eslint/no-array-constructor": "error",

        //  同じプロパティのgetとsetは連続しての記述を強制
        "@typescript-eslint/adjacent-overload-signatures": "error",

        //  requireの拒否
        "@typescript-eslint/no-var-requires": "error",

        //  console.log()等を許可
        "no-console": "off",

        //  if 文の条件を満たすために絶対に真にならない if 文
        "no-dupe-else-if": "error",

        //  import 文で作成した変数への代入
        "no-import-assign": "error",

        //  setter内でのリターン
        "no-setter-return": "error",

        /** 厳密な比較演算子の使用を強制 */
        eqeqeq: "error",

        /** !!falseや+'2'などの暗黙の型変換メソッドを禁止 */
        "no-implicit-coercion": "error",

        /** varの代わりにletまたはconstを要求 */
        "no-var": "error",

        /** 命令文のreturn、throw、continue、breakのあとに、到達不可能なコードがあるか確認 */
        "no-unreachable": "error",

        /** アサーションチェック */
        "@typescript-eslint/no-non-null-assertion": "error",

        /** any型のチェック */
        "@typescript-eslint/no-explicit-any": "error"
      },
      settings: {
        "import/resolver": {
          node: { extensions: [".ts", ".js", ".json"] },
          webpack: {
            config: "./webpack/webpack.config.base.js",
            extensions: [".js", ".ts", ".mjs"]
          }
        },
        node: {
          tryExtensions: [".ts", ".js", ".json", ".node"]
        }
      }
    }
  ],
  ignorePatterns: []
};
