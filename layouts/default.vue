<template>
  <div contain-fluid>
    <app-header></app-header>
    <nuxt />
    <app-footer></app-footer>

    <div
      class="position-fixed shadow .d-none .d-lg-block .d-xl-block bg-light"
      style=" font-size: 2rem;  top: 300px;    right: 8px;    z-index: 999;"
    >
      <ul class="list-group list-group-flush">
        <li id="weixin" class="list-group-item">
          <i font-scale="3" class="fa fa-weixin" aria-hidden="true"></i>
          <b-popover target="weixin" triggers="hover" placement="lefttop">
            <template v-slot:title>微信公众号</template>
            <img src="~assets/img/weixin.png" alt="" srcset="" />
          </b-popover>
        </li>
        <li id="hotline" class="list-group-item">
          <i font-scale="3" class="fa fa-tty" aria-hidden="true"></i>
          <b-popover target="hotline" triggers="hover" placement="lefttop">
            <template v-slot:title>全国统一热线服务</template>
            <span class="h3">400-876-1158</span>
            <p class="font-smaller">免费通话</p>
          </b-popover>
        </li>
        <li id="wulai" class="list-group-item">
          <b-icon font-scale="1.2" icon="person-fill"></b-icon>
          <b-popover target="wulai" triggers="hover" placement="lefttop">
            <template v-slot:title>智能机器人</template>

            <img
              src="~assets/img/wulai.png"
              alt=""
              srcset=""
              style="weight:138px;height:138px;"
            />
            <hr />
            或
            <a
              href="https://im.wulaibot.com?app=6d29d0b58b3151094a302762d31079d800349be081abfd0976"
              target="_blank"
              rel="noopener noreferrer"
              >立即在线互动</a
            >
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
