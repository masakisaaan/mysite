<template>
  <div id="footer" class="root">
    <div class="inner">
      <div class="links">
        <div class="link"><a href="http://github.com/masakisaaan">Github</a></div>
        <div class="link"><a href="http://twitter.com/masakisaaan">Twitter</a></div>
        <div class="link"><a href="http://medium.com/pixelgram">Medium</a></div>
      </div>
    </div>
    <div class="copyright">Copyright © 2018 pixelgram.jp</div>
  </div>
</template>

<style scoped>
  .root {
    width: 100%;
    height:120px;
    background: #ecf0f1;  
  }
  .inner {
    max-width: 980px;
    width: 100%;
    margin: 0 auto;    
    display:flex;
  }
  .links {
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .link {
    display: inline-block;
    font-family: 'Lato';
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 1.2px;
    cursor: pointer;
  }
  .link:first-child{
    margin-right: 20px;
  }
  .link:last-child{
    margin-left: 20px;
  }
  .link a {
    text-decoration: none;
    color: #000000;
  }
  .copyright {
    font-family: 'Lato';
    font-weight: regular;
    font-size: 12px; 
    text-align: center;
  }
</style>
