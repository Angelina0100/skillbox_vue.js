<template>
  <aside class="filter">
    <h2 class="filter__title">
      Фильтры
    </h2>

    <form
      class="filter__form form"
      action="#"
      method="get"
      @submit.prevent="submit"
    >
      <fieldset class="form__block">
        <legend class="form__legend">
          Цена
        </legend>
        <label class="form__label form__label--price">
          <input
            v-model.number="currentPriceFrom"
            class="form__input"
            type="text"
            name="min-price"
          >
          <span class="form__value">От</span>
        </label>
        <label class="form__label form__label--price">
          <input
            v-model.number="currentPriceTo"
            class="form__input"
            type="text"
            name="max-price"
          >
          <span class="form__value">До</span>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">
          Категория
        </legend>
        <label class="form__label form__label--select">
          <select
            v-model.number="currentCategoryId"
            class="form__select"
            type="text"
            name="category"
          >
            <option value="0">Все категории</option>
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >{{ category.title }}</option>
          </select>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">
          Цвет
        </legend>

        <ColorsList
          :colors="colors"
          :current-color.sync="currentColor"
        />
        <!--<ul class="colors">
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
                name="color"
                :value="color.code"
                checked=""
              >
              <span
                class="colors__value"
                :style="{ backgroundColor: color.code }"
              />
            </label>
          </li>
        </ul>-->
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">
          Объемб в ГБ
        </legend>
        <ul class="check-list">
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="volume"
                value="8"
                checked=""
              >
              <span class="check-list__desc">
                8
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="volume"
                value="16"
              >
              <span class="check-list__desc">
                16
                <span>(461)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="volume"
                value="32"
              >
              <span class="check-list__desc">
                32
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="volume"
                value="64"
              >
              <span class="check-list__desc">
                64
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="volume"
                value="128"
              >
              <span class="check-list__desc">
                128
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="volume"
                value="264"
              >
              <span class="check-list__desc">
                264
                <span>(313)</span>
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <button
        class="filter__submit button button--primery"
        type="submit"
        @click.prevent="submit"
      >
        Применить
      </button>
      <button
        class="filter__reset button button--second"
        type="button"
        @click.prevent="reset"
      >
        Сбросить
      </button>
    </form>
  </aside>
</template>

<script>
import categories from '../data/categories';
import colors from '../data/colors';
import ColorsList from './ColorsList.vue';

export default {
  components: { ColorsList },
  props: {
    priceFrom: {
      type: Number,
      required: true,
    },
    priceTo: {
      type: Number,
      required: true,
    },
    categoryId: {
      type: Number,
      required: true,
    },
    colorProduct: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      currentPriceFrom: 0,
      currentPriceTo: 0,
      currentCategoryId: 0,
      colorsArray: [
        {
          id: 1,
          title: 'Голубой',
          code: '#73B6EA',
        },
        {
          id: 2,
          title: 'Желтый',
          code: '#FFBE15',
        },
        {
          id: 3,
          title: 'Серый',
          code: '#939393',
        },
        {
          id: 4,
          title: 'Зеленый',
          code: '#8BE000',
        },
        {
          id: 5,
          title: 'Оранжевый',
          code: '#FF6B00',
        },
        {
          id: 6,
          title: 'Белый',
          code: '#FFF',
        },
        {
          id: 7,
          title: 'Черный',
          code: '#000',
        },
      ],
      currentColor: '',
    };
  },
  computed: {
    categories() {
      return categories;
    },
    colors() {
      return colors;
    },
  },
  watch: {
    priceFrom(value) {
      this.currentPriceFrom = value;
    },
    priceTo(value) {
      this.currentPriceTo = value;
    },
    categoryId(value) {
      this.currentCategoryId = value;
    },
    colorProduct(value) {
      this.currentColor = value;
    },
  },
  methods: {
    submit() {
      this.$emit('update:priceFrom', this.currentPriceFrom);
      this.$emit('update:priceTo', this.currentPriceTo);
      this.$emit('update:categoryId', this.currentCategoryId);
      this.$emit('update:colorProduct', this.currentColor);
    },
    reset() {
      this.$emit('update:priceFrom', 0);
      this.$emit('update:priceTo', 0);
      this.$emit('update:categoryId', 0);
      this.$emit('update:colorProduct', '');
    },
  },
};
</script>
