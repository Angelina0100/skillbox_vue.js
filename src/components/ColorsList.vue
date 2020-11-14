<template>
  <ul class="colors colors--black">
    <li
      class="colors__item"
    >
      <label class="colors__label">
        <input
          v-model="colorCurrent"
          class="colors__radio sr-only"
          type="radio"
          :value="colorsArray.code"
        >
        <span
          class="colors__value"
          :style=" { backgroundColor: colorsArray.code }"
        />
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    colorsArray: {
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
      colors: [],
      colorCurrent: '',
    };
  },
};
</script>
