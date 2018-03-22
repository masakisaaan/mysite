<template>
  <div id="contact" class="root">
    <div class="inner">
      <div class="contents">
        <div class="title">
          <div class="main-title">Contact</div>
          <div class="sub-title">- お問い合わせ</div>
        </div>
        <div class="contacts">
          <div class="contact">
            <p class="row"><img src="/mail.svg" alt=""></p>
            <p class="row text"><a href= mailto:m.hamada@pixelgram.jp>
              m.hamada@pixelgram.jp<br>24時間以内に返信致します。
            </a></p>
          </div>
          <div class="contact">
            <p class="row"><img src="/twitter.svg" alt=""></p>
            <p class="row text"><a href="http://twitter.com/masakisaaan" target="_blank" rel="noopener">
             twitter.com/masakisaaan<br>DMにてご対応します。
            </a></p>
          </div>
        </div> 
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
    margin-top: 80px;
    margin-bottom: 80px;
  }
  .main-title {
    display: inline-block;
    font-family: 'Lato';
    font-weight: bold;
    font-size: 26px;
    letter-spacing: 3px;
  }
  .sub-title {
    display: inline-block;
    font-family: "YuGothic";
    font-weight: bold;
    font-size: 18px;
    margin-left: 8px;
    letter-spacing: 1.2px;
  }
  .contacts {
    width: 100%;
    margin-top: 40px;
  }
  .contact {
    display: inline-block;
  }
  .row {
    display: inline-block;
    vertical-align: middle;
    font-family: "YuGothic";
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1.2px;
  }
  .row a {
    color: black;
    text-decoration: none;
  }
  .text {
    margin-left: 18px;
  }
  img {
    width: 80px;
    height: 63px;
  }
  .description { 
    display: inline-block;
    font-family: "YuGothic";
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1.2px;
  }
  @media screen and (max-width: 768px) {
    .title {
      text-align: center;
    }
    .contact {
      margin-top: 40px;
    }
  }
</style>


