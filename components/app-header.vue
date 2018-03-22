<template>
  <div id="header" class="root">
    <div class="inner">
      <div class="links">
        <div class="link" v-scroll-to="'#about'">About</div>
        <div class="link" v-scroll-to="'#study'">Study</div>
        <div class="link" v-scroll-to="'#works'">Works</div>
        <div class="link" v-scroll-to="'#contact'">Contact</div>
      </div>
      <a class="menu-trigger" href="#">
        <span></span>
        <span></span>
        <span></span>
      </a>
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
    height: 70px;
    margin: 0 auto;
    display: flex;
	align-items: center;
    justify-content: flex-end;
  }
  .link {
    display: inline-block;
    margin: 16px;
    cursor: pointer;
    color: #000000;
    font-family: 'Lato';
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
  }
  @media screen and (max-width: 768px) {
    .links {
      display: none;
    }
    .menu-trigger {
      position: relative;
      width: 28px;
      height: 22px;
      margin-right: 10px;
    }
    .menu-trigger span {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #000000;
      border-radius: 4px;
    }
    .menu-trigger span:nth-of-type(1) {
      top: 0;
    }
    .menu-trigger span:nth-of-type(2) {
      top: 10px;
    }
    .menu-trigger span:nth-of-type(3) {
      bottom: 0;
    }
  }
</style>