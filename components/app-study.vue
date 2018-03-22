<template>
  <div id="study" class="root">
    <div class="inner">
      <div class="contents">
        <div class="title">
          <div class="main-title">Study</div>
          <div class="sub-title">- 学び</div>
        </div>

        <div class="lists">
          <div v-for="study in studys" :key="study.id" class="list">
            <div class="study-image"><img :src="study.image"></div>
            <div class="study-title">{{ study.title }}</div>
            <div class="descripttion">{{ study.description }}</div>
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
        studys: [
          {
            image: '/study-image.svg',
            title: 'デザイン',
            description: 'デザインツールを用いてUI設計からプロトタイン手法学んでいます。',
          },
          {
            image: '/study-image.svg',
            title: 'タイトル2',
            description: 'デザインツールを用いてUI設計からプロトタイピングを勉強しています。',
          },
          {
            image: '/study-image.svg',
            title: 'タイトル3',
            description: 'デザインツールを用いてUI設計から',
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
  .lists {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 40px;
  }
  .list {
    width: 33.3333%;
  }
  .study-image {
    width: 240px;
    height: 200px;
    margin: 0 auto;
    background-color: #2C3E50;
  }
  .study-title {
    display: inline-block;
    font-family: "YuGothic";
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 1.2px;
    margin: 0 auto;
    margin-top:20px;
  }
  .descripttion {
    margin-top: 30px;
    font-family: "YuGothic";
    font-weight: Medium;
    font-size: 14px;
    letter-spacing: 1.2px;
    word-wrap: break-word;
  }
  @media screen and (max-width: 768px) {
    .lists {
      flex-wrap: wrap;
      justify-content: center;
    }
    .contents {
      margin-left: 10px;
      margin-right: 10px;
    }
    .list {
      width: 100%;
      margin-right: 0px;
      margin-top: 100px;
    }
    .lists {
      display:flex;
      justify-content: center;
      text-align: center;
    }
    /* image fix */
    .study-image {
      width: 280px;
    }
    .title {
      text-align: center;
    }
    .descripttion {
      margin-right: 40px;
      margin-left: 40px;
    }
  }
</style>