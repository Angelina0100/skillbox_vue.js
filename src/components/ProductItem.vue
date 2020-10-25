<template>
  <li
    class="catalog__item"
  >
    <a
      class="catalog__pic"
      href="#"
    >
      <img
        :src="product.image"
        :alt="product.title"
      >
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">
      {{ product.price }}
    </span>

    <ul class="colors colors--black">
      <li class="colors__item">
        <label class="colors__label">
          <input
            v-model="color"
            class="colors__radio sr-only"
            type="radio"
            value="#73B6EA"
          >
          <span
            class="colors__value"
            style="background-color: #73B6EA;"
          />
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input
            v-model="color"
            class="colors__radio sr-only"
            type="radio"
            value="#8BE000"
          >
          <span
            class="colors__value"
            style="background-color: #8BE000;"
          />
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input
            v-model="color"
            class="colors__radio sr-only"
            type="radio"
            value="#222"
          >
          <span
            class="colors__value"
            style="background-color: #222;"
          />
        </label>
      </li>
    </ul>
  </li>
</template>

<script>

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      color: '#73B6EA',
    };
  },
};
</script>
