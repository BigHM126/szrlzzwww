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
          <div v-swiper:mainbanner="swiperOption">
            <div class="swiper-wrapper">
              <div
                v-for="(slide, index) in slides"
                :key="index"
                class="swiper-slide "
              >
                <img :src="slide" />
              </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
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
      slides: [
        '@/assets/img/client-image/1.jpg',
        '~assets/img/client-image/2.jpg',
        '~assets/img/client-image/3.jpg'
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        on: {
          slideChange() {
            // console.log('onSlideChangeEnd', this)
          },
          tap() {
            // console.log('onTap', this)
          }
        }
      }
    }
  },
  mounted() {
    // console.log('app init', this)
    setTimeout(() => {
      this.slides.push('/4.jpg')
      // console.log('banners update')
    }, 3000)
    /* console.log(
      'This is current swiper instance object',
      this.mySwiper,
      'I will slideTo banners 3'
    ) */
    this.mainbanner.slideTo(3)
  }
}
</script>

<style lang="scss" scoped></style>
