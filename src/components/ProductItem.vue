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
      {{ product.price | numberFormat }}
    </span>
    <ColorsList
      :colors="product.colors"
      :current-color.sync="currentColor"
      class="colors--black"
    />
  </li>
</template>

<script>
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';
import ColorsList from './ColorsList.vue';

export default {
  components: { ColorsList },
  filters: {
    numberFormat,
  },
  props: ['product'],
  data() {
    return {
      currentColor: this.product.colors[0].code,
    };
  },

  methods: {
    gotoPage,
  },
};
</script>
