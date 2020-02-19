<template>
  <div class="container-fluid">
    <!-- Start Navbar Area -->
    <header class="container bg-warning fixed-top">
      <!--     <div class="row justify-content-between align-items-center"></div> -->

      <b-navbar
        toggleable="lg"
        type="dark"
        class="row  justify-content-between"
      >
        <b-navbar-brand href="/" class="col-sm-2 pl-sm-0 w-100 "
          ><b-img src="~assets/img/logo.png" fluid alt="logo"></b-img
        ></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <!-- <b-nav-item
            v-for="(item, index) in navLinks"
            :key="index"
            :href="item.path"
            class="h5"
            >{{ item.name }}</b-nav-item
          > -->

            <b-nav-item href="/products/" class="h5">在线产品</b-nav-item>
            <b-nav-item href="/lines/" class="h5">解决方案</b-nav-item
            ><b-nav-item href="/blogs/" class="h5">业内新闻</b-nav-item
            ><b-nav-item href="/partners/" class="h5">生态联盟</b-nav-item
            ><b-nav-item
              href="https://bighm126.github.io/szrlzzdocs/"
              class="h5"
              >帮助支持</b-nav-item
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="mx-auto">
            <b-button pill variant="primary">
              <b-icon icon="laptop"></b-icon> 预约演示
            </b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <!-- End Navbar Area -->

    <!-- Sidebar Modal -->
    <div class="sidebar-modal">
      <div class="sidebar-modal-inner">
        <div class="sidebar-about-area">
          <div class="title">
            <h2>About Us</h2>
            <p>
              We believe brand interaction is key in communication. Real
              innovations and a positive customer experience are the heart of
              successful communication. No fake products and services. The
              customer is king, their lives and needs are the inspiration.
            </p>
          </div>
        </div>

        <div class="sidebar-instagram-feed">
          <h2>Instagram</h2>
          <ul>
            <li>
              <a href="#"
                ><img src="~assets/img/instagram-image/1.jpg" alt="image"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="~assets/img/instagram-image/2.jpg" alt="image"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="~assets/img/instagram-image/3.jpg" alt="image"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="~assets/img/instagram-image/4.jpg" alt="image"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="~assets/img/instagram-image/5.jpg" alt="image"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="~assets/img/instagram-image/6.jpg" alt="image"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="~assets/img/instagram-image/7.jpg" alt="image"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="~assets/img/instagram-image/8.jpg" alt="image"
              /></a>
            </li>
          </ul>
        </div>

        <div class="sidebar-contact-area">
          <div class="contact-info">
            <div class="contact-info-content">
              <h2>
                <a href="tel:+0881306298615">+088 130 629 8615</a>
                <span>OR</span>
                <a href="mailto:crimso@gmail.com">crimso@gmail.com</a>
              </h2>

              <ul class="social">
                <li>
                  <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
                </li>
                <li>
                  <a href="#" target="_blank"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a href="#" target="_blank"
                    ><i class="fab fa-linkedin-in"></i
                  ></a>
                </li>
                <li>
                  <a href="#" target="_blank"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <span class="close-btn sidebar-modal-close-btn"
          ><i class="fa fa-times"></i
        ></span>
      </div>
    </div>
    <!-- End Sidebar Modal -->
  </div>
</template>

<script>
export default {}
</script>

<style></style>
