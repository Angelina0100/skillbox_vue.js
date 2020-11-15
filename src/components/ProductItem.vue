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
    <ColorsList
      :colors="product.colors"
      :current-color.sync="product.colors.code"
      @updateColor="newColor"
      class="colors--black"
    />
    <!--<ul class="colors colors--black">
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
    </ul>-->
  </li>
</template>

<script>
import ColorsList from './ColorsList.vue';

export default {
  components: { ColorsList },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentColor: '',
    };
  },

  methods: {
    newColor(variable) {
      this.currentColor = variable;
    },
  },
};
</script>
