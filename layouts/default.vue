<template>
  <div contain-fluid>
    <app-header></app-header>
    <nuxt />
    <app-footer></app-footer>
  </div>
</template>
<script>
import appHeader from '@/components/partials/Header1'
import appFooter from '@/components/partials/Footer1'

export default {
  components: {
    appHeader,
    appFooter
  }
}
</script>

<style></style>
