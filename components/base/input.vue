<template>
  <div class="form-element-row">
    <label class="label fs-7">{{ label }}</label>
    <input
      :name="name"
      :class="['form-control', { 'error-input': errorMessage }]"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handelInputChange"
    />
    <span
      class="text-danger"
      v-if="errorMessage && ignoreErrorMessage === false"
      >{{ errorMessage }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  ignoreErrorMessage: {
    type: Boolean,
    default: false,
  },
});

const {
  value: inputValue,
  errorMessage,
  handleChange,
  setValue,
} = useField(props.name, undefined, {
  initialValue: props.modelValue,
});

watch(
  () => props.modelValue,
  (val) => {
    setValue(val);
  }
);

const emit = defineEmits(["update:modelValue"]);

const handelInputChange = (e: any) => {
  emit("update:modelValue", e.target.value);
  handleChange(e);
};
</script>
