<template>
  <div class="swiper main-swiper-slider">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <div class="swiper-slide main-swiper-slide">
        <a href="#" style="background-image: url(/images/slider/main/01.jpg)">
          <img src="/images/slider/main/01.jpg" alt="" />
        </a>
      </div>
      <div class="swiper-slide main-swiper-slide">
        <a href="#" style="background-image: url(/images/slider/main/02.jpg)">
          <img src="/images/slider/main/02.jpg" alt="" />
        </a>
      </div>
      <div class="swiper-slide main-swiper-slide">
        <a href="#" style="background-image: url(/images/slider/main/03.jpg)">
          <img src="/images/slider/main/03.jpg" alt="" />
        </a>
      </div>
      <div class="swiper-slide main-swiper-slide">
        <a href="#" style="background-image: url(/images/slider/main/04.jpg)">
          <img src="/images/slider/main/04.jpg" alt="" />
        </a>
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  <Carousel dir="rtl" v-model="currentSlide">
    <Slide class="swiper-slide main-swiper-slide">
      <a
        class="carousel__item"
        href="#"
        style="background-image: url(/images/slider/main/01.jpg)"
      >
        <img src="/images/slider/main/01.jpg" alt="" />
      </a>
    </Slide>
    <Slide class="swiper-slide main-swiper-slide">
      <a
        class="carousel__item"
        href="#"
        style="background-image: url(/images/slider/main/02.jpg)"
      >
        <img src="/images/slider/main/02.jpg" alt="" />
      </a>
    </Slide>
    <Slide class="swiper-slide main-swiper-slide">
      <a
        class="carousel__item"
        href="#"
        style="background-image: url(/images/slider/main/03.jpg)"
      >
        <img src="/images/slider/main/03.jpg" alt="" />
      </a>
    </Slide>
    <Slide class="swiper-slide main-swiper-slide">
      <a
        class="carousel__item"
        href="#"
        style="background-image: url(/images/slider/main/04.jpg)"
      >
        <img src="/images/slider/main/04.jpg" alt="" />
      </a>
    </Slide>
    <template #addons="{ slidesCount }">
      <div class="slide__navigation">
        <div
          class="swiper-button-prev"
          v-if="slidesCount > currentSlide + 1"
          @click="currentSlide += 1"
        ></div>
        <div
          class="swiper-button-next"
          v-if="currentSlide > 0"
          @click="currentSlide -= 1"
        ></div>
      </div>
      <div class="slider__pagination">
        <label v-for="item in slidesCount" :key="item"></label>
      </div>
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const currentSlide = ref(0);
</script>

<style scoped>
.carousel__item {
  border-radius: 15px;
  width: 100%;
}
.carousel__item img {
  height: 455px;
  border-radius: 15px;
  width: 100%;
}
.carousel__slide {
  padding: 0px;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 24px;
  color: white;
  font-weight: bold;
}
.swiper-button-prev,
.swiper-button-next {
  width: 55px;
  height: 55px;
  background: transparent;
}

.slider__pagination {
  display: flex;
  gap: 0.5rem;
  position: absolute;
  bottom: 1rem;
  width: 100%;
  right: 0;
  justify-content: center;
}

.slider__pagination label {
  width: 6px;
  height: 6px;
  background: rgba(0, 0, 0, 0.712);
  border-radius: 50%;
  cursor: pointer;
}

.main__slider .swiper-pagination-bullet-active-main {
  background: white !important;
}
</style>
