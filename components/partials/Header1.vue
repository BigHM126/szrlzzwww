/* eslint-disable prettier/prettier */
<template>
  <div class="container-fluid">
    <header class="container fixed-top">
      <b-navbar
        toggleable="lg"
        type="light"
        class="row navbar justify-content-between align-content-center"
      >
        <b-navbar-brand href="/" class="col-sm-2 pl-sm-0 w-100">
          <b-img src="~assets/img/logo.png" fluid alt="logo"></b-img>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/products/" class="h5 navlink"
              >在线产品</b-nav-item
            >
            <b-nav-item href="/lines/" class="h5 navlink">解决方案</b-nav-item>
            <b-nav-item href="/blogs/" class="h5 navlink">业内新闻</b-nav-item>
            <b-nav-item href="/partners/" class="h5 navlink"
              >生态联盟</b-nav-item
            >
            <b-nav-item
              href="https://bighm126.github.io/szrlzzdocs/"
              class="h5 navlink"
              >帮助支持</b-nav-item
            >
          </b-navbar-nav>
          <b-navbar-nav class="mx-auto">
            <b-button pill variant="primary">
              <b-icon icon="laptop"></b-icon>预约演示
            </b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
  </div>
</template>
<script>
export default {}
</script>
<style></style>
