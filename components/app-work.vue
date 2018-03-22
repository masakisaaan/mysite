<template>
  <div id="works" class="root">
    <div class="inner">
      <div class="contents">
        <div class="title">
        <div class="main-title">Works</div>
        <div class="sub-title">- 作品</div>
        </div>
        <div class="lists">
          <div v-for="work in works" :key="work.id" class="list">
            <div class="work-image">{{ work.image }}</div>
            <div class="work-url">{{ work.url }}</div>
            <div class="work-name">{{ work.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        works: [
          {
            image: '',
            url: 'pixelgram.jp',
            name: '合同会社ピクセルグラム 公式サイト'
          },
          {
            image: '',
            url: 'pixelgram.jp',
            name: '合同会社ピクセルグラム 公式サイト'
          },
          {
            image: '',
            url: 'pixelgram.jp',
            name: '合同会社ピクセルグラム 公式サイト'
          },
          {
            image: '',
            url: 'pixelgram.jp',
            name: '合同会社ピクセルグラム 公式サイト'
          }
        ]
      }
    }
  }
</script>

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
    margin: 0 auto;
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
  .lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;
  }
  .list {
    margin-bottom: 40px;
  }
  .work-image {
    width: 360px;
    height: 200px;
    background-color: #2C3E50;
  }
  .work-url {
    display: inline-block;
    font-family: 'YuGothic';
    font-weight: bold;
    font-size: 16px;
  }
  .work-name {
    display: inline-block;
    font-family: 'YuGothic';
    font-weight: bold;
    font-size: 12px;
    margin-left: 10px;
  }
  @media screen and (max-width: 768px) {
    .lists {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
    .list {
      margin: auto;
      margin-top: 60px;
      text-align: center;
    }
    .work-url,.work-name {
      margin-top: 10px;
    }
    .contents {
      margin-left: 10px;
      margin-right: 10px;
    }
    .title {
      text-align: center;
    }
  }  
</style>

