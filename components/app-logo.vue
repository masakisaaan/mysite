<template>
  <div id="logo" class="root">
    <div class="inner">  
      <div class="title"><a href="/">MySite</a></div>
    </div>
  </div>
</template>

<style scoped>
  .root {
    position: absolute;
    top: 20px;
    width: 100%;
    z-index: 10;
  }
  .inner {
    max-width: 980px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .title {
    cursor: pointer;
    color: #000000;
    font-family: 'Lato';
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .inner a {
    text-decoration: none;
    color: #000000;
  }
  @media screen and (max-width: 768px) {
    .inner {
      display: inline-block;
      text-align: center;   
    }
  }
</style>


