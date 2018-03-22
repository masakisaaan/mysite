<template>
  <div id="about" class="root">
    <div class="inner">
      <div class="contents">
        <div class="title">
          <div class="main-title">About</div>
          <div class="sub-title">- 概要</div>
        </div>
        <div class="description">
          ウェブに特化したフリーランスデザイナーです。自ら行うグラフィックデザインを軸にサイト設計からコーディングまで対応しています。お客様が持っている大切な価値を利用者にわかりやすく伝えることを第一とし、モバイル・スマートフォンに対応するためレスポンシブWebデザインにて設計します。デザインはHTMLとCSSにて忠実に、またSEOを踏まえた正しい文法でコーディングします。SNSとの連携やサイトのメンテナンス性も重視します。SNSとの連携やサイトのメンテナンス性も重視します。過去のクリエイティブはかわいいものからシャープなものまでいろいろな方向性に対応していますが、デザインの引き出しが多い訳ではなく、いずれもお客様の意図を理解し閲覧者に納得していただけるものを目指した結果です。
        </div>
        <img class="about-image" src="/about-image.svg">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .root {
    width: 100%;
    background: #ffffff;  
  }
  .inner {
    max-width: 980px;
    width: 100%;
    margin: 0 auto;    
    display:flex;
    align-items: center;
  }
  .contents {
    width: 100%;
    margin-top:80px;
    margin-bottom: 80px;
  }
  .main-title {
    display: inline-block;
    font-family: 'Lato';
    font-weight: bold;
    font-size: 26px;
    letter-spacing: 4px;
  }
  .sub-title {
    display: inline-block;
    font-family: "YuGothic";
    font-weight: bold;
    font-size: 18px;
    margin-left: 8px;
    letter-spacing: 1.2px;
  }
  .description {
    margin-top: 40px;
    font-family: "YuGothic";
    font-weight: Medium;
    font-size: 14px;
    letter-spacing: 2px;
  }
  .about-image {
    width: 980px;
    height: 200px;
    margin: 0 auto;
    margin-top: 60px;
    background: black;
  }
  @media screen and (max-width: 768px) {
    .contents {
      margin-right:20px;
      margin-left:20px; 
    }
    .about-image {
      display: none;
    }
    .title {
      text-align: center;
    }
  }
</style>