<template>
  <div contain-fluid>
    <app-header></app-header>
    <nuxt />
    <app-footer></app-footer>
    <div id="contactus" class="d-md-none d-lg-block p-4 mb-auto">
      <ul class="list-inline p-3">
        <li>
          <i
            id="weixin"
            class="flaticon-call-answer"
            width="32"
            height="32"
          ></i>

          <b-popover target="weixin" triggers="hover" placement="lefttop">
            <template v-slot:title>微信公众号</template>
            <img src="~assets/img/weixin.png" alt="" srcset="" />
          </b-popover>
        </li>
        <li>
          <i id="call" class="flaticon-call-answer" width="32" height="32"></i>

          <b-popover target="call" triggers="hover" placement="lefttop">
            <template v-slot:title>服务热线</template>
            <img src="~assets/img/favicon.png" alt="" srcset="" />
          </b-popover>
        </li>

        <li>
          <i
            id="wulai"
            class="fa fa-phone-square"
            aria-hidden="true"
            width="32"
            height="32"
          ></i>

          <b-popover target="wulai" triggers="hover" placement="lefttop">
            <template v-slot:title>智能在线</template>
            吾来机器人
          </b-popover>
        </li>
      </ul>
    </div>
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
