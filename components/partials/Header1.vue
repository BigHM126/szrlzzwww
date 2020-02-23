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
            <b-nav-item href="/products/" class="h5 navlink">
              在线产品
            </b-nav-item>
            <b-nav-item href="/projects/" class="h5 navlink"
              >解决方案</b-nav-item
            >
            <b-nav-item href="/blogs/" class="h5 navlink">行业要闻</b-nav-item>
            <b-nav-item href="/partners/" class="h5 navlink"
              >生态联盟</b-nav-item
            >
            <b-nav-item href="/services/" class="h5 navlink"
              >服务支持</b-nav-item
            >
          </b-navbar-nav>
          <b-navbar-nav class="mx-auto">
            <b-button v-b-modal.modal-1 pill variant="primary"
              ><b-icon icon="laptop"></b-icon>预约演示</b-button
            >
            <nuxt-link to="/login" class="btn btn-link">登录/退出</nuxt-link>
            <a id="login" name="login" href="/" role="button"></a>
          </b-navbar-nav>
          <div>
            <b-modal id="modal-1" centered title="预约演示">
              <div>
                <p>请务必填写准确，以便能及时与您取得联系，谢谢！</p>
                <form id="contactForm">
                  <div class="row">
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="姓名"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="邮箱"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="类别"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <textarea
                          name="message"
                          class="form-control"
                          placeholder="内容"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </b-modal>
          </div>
        </b-collapse>
      </b-navbar>
    </header>
  </div>
</template>
<script>
export default {}
</script>
<style></style>
