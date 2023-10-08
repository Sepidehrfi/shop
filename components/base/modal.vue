<template>
  <Transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <div
      v-if="modelValue"
      :class="['remodal-wrapper', { 'remodal-is-opened': modelValue }]"
      :style="{ display: modelValue ? 'block' : null }"
      @click.self="emit('update:modelValue', false)"
    >
      <div
        :class="[
          'remodal remodal-lg remodal-is-initialized',
          { 'remodal-is-opened': modelValue },
        ]"
        data-remodal-id="quick-view-modal"
        data-remodal-options="hashTracking: false"
        tabindex="-1"
      >
        <div class="remodal-header">
          <button
            class="remodal-close"
            @click="emit('update:modelValue', false)"
          ></button>
        </div>
        <div class="remodal-content">
          <slot></slot>
        </div>
        <div class="remodal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"])
</script>

<style scoped>
.remodal-wrapper {
  background-color: #00000085;
}
</style>
