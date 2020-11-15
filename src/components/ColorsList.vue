<template>
  <ul class="colors colors--black">
    <li
      v-for="color in colors"
      :key="color.id"
      class="colors__item"
    >
      <label class="colors__label">
        <input
          v-model="currentColor"
          class="colors__radio sr-only"
          type="radio"
          :value="color.code"
          @click="sendColor"
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

  methods: {
    sendColor() {
      this.$emit('update:currentColor', this.currentColor);
    },
  },
};
</script>
