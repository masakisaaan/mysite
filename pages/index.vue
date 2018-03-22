<template>
  <div class="root">
    <app-logo />
    <app-header />
    <app-main />
    <app-about />
    <app-study />
    <app-work />
    <app-contact />
    <app-footer />
  </div>
</template>

<script>
import appLogo from '~/components/app-logo.vue'
import appHeader from '~/components/app-header.vue'
import appMain from '~/components/app-main.vue'
import appAbout from '~/components/app-about.vue'
import appStudy from '~/components/app-study.vue'
import appWork from '~/components/app-work.vue'
import appContact from '~/components/app-contact.vue'
import appFooter from '~/components/app-footer.vue'

export default {
  components: {
    appLogo,
    appHeader,
    appMain,
    appAbout,
    appStudy,
    appWork,
    appContact,
    appFooter
  }
}
</script>

<style>
</style>
