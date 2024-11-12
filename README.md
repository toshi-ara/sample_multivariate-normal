# 'multivariate_normal'パッケージの使用例

多変量正規分布に従う乱数を作成するために
`multivariate-normal`パッケージを使用したので、その使用方法を簡単に記す。

## インストール方法
npmリポジトリからのインストール
```bash
# npm init
npm install -D multivariate-normal
npm install -D @types/multivariate-normal  ## Typescriptで使用する場合の型ファイル
```

このリポジトリからのインストール
```bash
# (download of repository)
cd sample_multivariate_normal
npm install
```

## 使い方
n = 3 のときの例を示す

### 平均値ベクトルの設定
```javascript
let meanVector = [0, 0, 0];
```

### 共分散行列の設定
- 例
    - 1つ目と2つ目の変数の相関係数が0.8
    - 1つ目と3つ目の変数の相関係数が-0.5
    - 1つ目と2つ目の変数の相関係数が0.0
 
```javascript
let covarianceMatrix = [
    [  1.0, 0.8, -0.5 ],
    [  0.8, 1.0,  0.0 ],
    [ -0.5, 0.0,  1.0 ],
];
```

### 実行および結果
`multivariate-normal`パッケージをインポートした後に
`MultivariateNormal.default`関数の引数として平均値ベクトルと共分散行列を指定する。

```javascript
import MultivariateNormal from "multivariate-normal";
let distribution = MultivariateNormal.default(meanVector, covarianceMatrix);
```

`sample`メソッドを使用して乱数を得る。
```javascript
const result = distribution.sample();
console.log(result);
```

結果例
```javascript
[ 0.742718209004433, 0.6267704724538544, -0.47028379876217874 ]
```

## 相関係数の確認
乱数の組を1000個作成してjsonファイルで保存し、Rでそのファイルを読み込んで相関係数を算出した。値は毎回異なる。

```bash
npm run build

> sample_multivariate-normal@0.0.1 build
> node multivariate-normal.mjs && Rscript multivariate-normal.R

           X1          X2          X3
X1  1.0000000  0.82086900 -0.49099620
X2  0.8208690  1.00000000 -0.02834744
X3 -0.4909962 -0.02834744  1.00000000
```

指定した相関係数と近い値が得られた。

