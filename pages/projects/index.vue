<template>
  <div class="container-fluid">
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="page-title-content">
              <h2>解决方案</h2>
              <ul>
                <li>
                  <a href="index.html">首页</a>
                </li>
                <li>产品</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="project-section pt-100">
      <div class="container">
        <div class="section-title">
          <span>行业方案</span>
          <h3>充分发挥各行业的生产管理特色</h3>
        </div>

        <ul class="filter-menu">
          <li class="filter active" data-filter="all">All</li>
          <li class="filter" data-filter=".branding">Branding</li>
          <li class="filter" data-filter=".marketting">Marketing</li>
          <li class="filter" data-filter=".seo">SEO</li>
          <li class="filter" data-filter=".web">Web</li>
        </ul>

        <div id="Container" class="row">
          <div class="col-lg-4 col-md-6 mix branding">
            <div class="single-project-box">
              <img src="~assets/img/project/1.jpg" alt="image" />

              <div class="project-hover-content">
                <h3>
                  <a href="#"> Search Enginee Optimization</a>
                </h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mix marketting">
            <div class="single-project-box">
              <img src="~assets/img/project/2.jpg" alt="image" />

              <div class="project-hover-content">
                <h3>
                  <a href="#"> Search Enginee Optimization</a>
                </h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mix seo">
            <div class="single-project-box">
              <img src="~assets/img/project/3.jpg" alt="image" />

              <div class="project-hover-content">
                <h3>
                  <a href="#"> Search Enginee Optimization</a>
                </h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mix web">
            <div class="single-project-box">
              <img src="~assets/img/project/4.jpg" alt="image" />

              <div class="project-hover-content">
                <h3>
                  <a href="#"> Search Enginee Optimization</a>
                </h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mix branding">
            <div class="single-project-box">
              <img src="~assets/img/project/5.jpg" alt="image" />

              <div class="project-hover-content">
                <h3>
                  <a href="#"> Search Enginee Optimization</a>
                </h3>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mix marketting">
            <div class="single-project-box">
              <img src="~assets/img/project/6.jpg" alt="image" />

              <div class="project-hover-content">
                <h3>
                  <a href="#"> Search Enginee Optimization</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <partner2></partner2>

    <section class="subscribe-section">
      <div class="container-fluid">
        <div class="subscribe-area-content">
          <div class="subscribe-content">
            <span class="sub-title">及时了解最新行业动态</span>
            <h2>及时发送最新行业发展动态及前沿技术</h2>

            <form class="newsletter-form">
              <input
                type="email"
                class="input-newsletter"
                placeholder="邮箱"
                name="EMAIL"
                required
                autocomplete="off"
              />

              <button type="submit">订阅</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Partner2 from '~/components/partials/Partner2'

export default {
  components: { Partner2 }
}
</script>

<style></style>
