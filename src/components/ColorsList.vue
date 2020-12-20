<template>
  <ul class="colors">
    <li
      v-for="color in colors"
      :key="color.id"
      class="colors__item"
    >
      <label class="colors__label">
        <input
          v-model="localColor"
          class="colors__radio sr-only"
          type="radio"
          :value="color.code"
        >
        <span
          class="colors__value"
          :style=" { backgroundColor: color.code }"
        />
      </label>
    </li>
  </ul>
</template>

<script>

export default {
  props: {
    colors: {
      type: Array,
      required: true,
    },
    currentColor: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      localColor: this.currentColor,
    };
  },

  watch: {
    localColor(v) {
      this.$emit('update:currentColor', v);
    },
  },
};
</script>
