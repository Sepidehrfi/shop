<template>
  <div class="page-wrapper">
    <the-main-header />
    <the-mobile-header />
    <main class="page-content">
      <div class="container">
        <slot></slot>
      </div>
    </main>
    <the-footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    { rel: "stylesheet", href: "/css/dependencies.css" },
    { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" },
  ],
  script: [
    { src: "/public/js/dependencies.bootstrap.bundle.min.js", body: true },
    { src: "/public/js/dependencies.fancybox.umd.js", body: true },
    { src: "/public/js/dependencies.iziToast.min.js", body: true },
    { src: "/public/js/dependencies.jquery-3.6.0.min.js", body: true },
    { src: "/public/js/dependencies.jquery.countdown.min.js", body: true },
    { src: "/public/js/dependencies.jquery.simple.timer.min.js", body: true },
    { src: "/public/js/dependencies.nouislider.min.js", body: true },
    { src: "/public/js/dependencies.remodal.min.js", body: true },
    { src: "/public/js/dependencies.select2.min.js", body: true },
    { src: "/public/js/dependencies.simplebar.min.js", body: true },
    { src: "/public/js/dependencies.swiper-bundle.min.js", body: true },
    { src: "/public/js/dependencies.wNumb.js", body: true },
    { src: "/public/js/custom.js", body: true },
    { src: "/public/js/theme.js", body: true },
  ],
});
</script>
