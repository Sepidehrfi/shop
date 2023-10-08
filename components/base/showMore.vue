<template>
  <div
    :class="['expandable-text pt-1', { active: isShow }]"
    :style="{ height: `${height}px` }"
  >
    <div class="expandable-text_text fa-num">
      <slot />
    </div>
    <div class="expandable-text-expand-btn justify-content-start text-sm">
      <span
        :class="['show-more', { 'd-none': isShow }]"
        @click="isShow = !isShow"
      >
        {{ showText }} <i class="ri-arrow-down-s-line ms-2"></i>
      </span>
      <span
        :class="['show-less', { 'd-none': isShow === false }]"
        @click="isShow = !isShow"
      >
        {{ closeText }} <i class="ri-arrow-up-s-line ms-2"></i>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  closeText: {
    type: String,
    default: "مشاهده کمتر",
  },
  showText: {
    type: String,
    default: "مشاهده بیشتر",
  },
  height: {
    type: Number,
    default: 100,
  },
});

const isShow = ref(false);
</script>
