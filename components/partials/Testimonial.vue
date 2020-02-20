<template>
  <!-- Start Testimonial Section -->
  <section class="testimonial-section ptb-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4">
          <div class="testimonial-content-area">
            <span>客户评价</span>
            <h3>实践并深入应用收获最真实的体会</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus.Lorem is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
        </div>

        <div class="col-lg-8">
          <div v-swiper:mainBanner="swiperOption">
            <div
              class="swiper-wrapper testimonial-slides owl-carousel owl-theme"
            >
              <div class="swiper-slide testimonial-single-item">
                <div class="testimonial-image">
                  <img src="~assets/img/client-image/1.jpg" alt="image" />
                </div>

                <div class="testimonial-content-text">
                  <h3>R.Mortein</h3>
                  <span>Product Manager</span>
                  <div class="icon">
                    <i class="flaticon-quote"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse gravida.
                  </p>
                </div>
              </div>
              <div class="swiper-slide testimonial-single-item">
                <div class="testimonial-image">
                  <img src="~assets/img/client-image/2.jpg" alt="image" />
                </div>

                <div class="testimonial-content-text">
                  <h3>Edward Bold</h3>
                  <span>CEO & Founder</span>
                  <div class="icon">
                    <i class="flaticon-quote"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse gravida.
                  </p>
                </div>
              </div>
              <div class="swiper-slide testimonial-single-item">
                <div class="testimonial-image">
                  <img src="~assets/img/client-image/3.jpg" alt="image" />
                </div>

                <div class="testimonial-content-text">
                  <h3>Mahindra jhon</h3>
                  <span>Ceo & Sustainable designer</span>
                  <div class="icon">
                    <i class="flaticon-quote"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse gravida.
                  </p>
                </div>
              </div>

              <div class="swiper-slide testimonial-single-item">
                <div class="testimonial-image">
                  <img src="~assets/img/client-image/1.jpg" alt="image" />
                </div>

                <div class="testimonial-content-text">
                  <h3>Lee Munroe</h3>
                  <span>Underwriter</span>
                  <div class="icon">
                    <i class="flaticon-quote"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse gravida.
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
            <div class="swiper-button-next swiper-button-white"></div>
            <div class="swiper-button-prev swiper-button-white"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Testimonial Section -->
</template>

<script>
export default {
  data() {
    return {
      banners: [
        'assets/img/client-image/1.jpg',
        'assets/img/client-image/2.jpg',
        'assets/img/client-image/3.jpg'
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 25,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          dynamicMainBullets: 3,
          clickable: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false, // 取消鼠标操作后的轮播暂停【无操作轮播继续】【参考链接1】
          stopOnLastSlide: false // 在最后一页停止
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.swiper-pagination {
  > .swiper-pagination-bullet {
    background-color: red;
  }
}
</style>
