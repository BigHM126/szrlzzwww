<template>
  <div class="partner-section">
    <div class="container partner-slider">
      <div class="section-title">
        <span>生态联盟</span>
        <h3>强强联合的生态圈</h3>
      </div>
      <div class="row justify-content-center p-5">核心成员</div>
      <div class="row">
        <div v-swiper:mainBanner="swiperOption">
          <div class="swiper-wrapper testimonial-slides owl-carousel owl-theme">
            <div class="partner-item">
              <a href="#">
                <img src="~assets/img/partnar/1.png" alt="partner" />
              </a>
            </div>
            <div class="partner-item">
              <a href="#">
                <img src="~assets/img/partnar/2.png" alt="partner" />
              </a>
            </div>
            <div class="partner-item">
              <a href="#">
                <img src="~assets/img/partnar/3.png" alt="partner" />
              </a>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center p-5">合作伙伴</div>
      <div class="row">
        <div class="partner-item">
          <a href="#">
            <img src="~assets/img/partnar/4.png" alt="partner" />
          </a>
        </div>
        <div class="partner-item">
          <a href="#">
            <img src="~assets/img/partnar/5.png" alt="partner" />
          </a>
        </div>
        <div class="partner-item">
          <a href="#">
            <img src="~assets/img/partnar/1.png" alt="partner" />
          </a>
        </div>
        <div class="partner-item">
          <a href="#">
            <img src="~assets/img/partnar/2.png" alt="partner" />
          </a>
        </div>
        <div class="partner-item">
          <a href="#">
            <img src="~assets/img/partnar/3.png" alt="partner" />
          </a>
        </div>
      </div>
    </div>
  </div>
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
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide: false
        }
      }
    }
  }
}
</script>
