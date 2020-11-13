<template>
  <li
    class="catalog__item"
  >
    <a
      class="catalog__pic"
      href="#"
      @click.prevent="gotoPage('product', {id: product.id})"
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
      {{ product.price | numberFormat }} ₽
    </span>

    <ul class="colors colors--black">
      <li
        v-for="color in product.colors"
        :key="color.id"
        class="colors__item"
      >
        <label class="colors__label">
          <input
            v-model="colorCurrent"
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
      <!--<li class="colors__item">
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
      </li>-->
    </ul>
  </li>
</template>

<script>
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  filters: {
    numberFormat,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      colorCurrent: 'none',
    };
  },
  methods: {
    gotoPage,
  },
};
</script>
