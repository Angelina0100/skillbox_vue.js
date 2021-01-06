<template>
  <component
    :is="currentPage"
    :page-params="currentPageParams"
  />
</template>

<script>
import MainPage from './pages/MainPage.vue';
import ProductPage from './pages/ProductPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import eventBus from './eventBus';
import products from './data/products';

const routes = {
  main: 'MainPage',
  product: 'ProductPage',
};

export default {
  components: {
    MainPage, ProductPage, NotFoundPage, products,
  },
  data() {
    return {
      currentPage: 'mainPage',
      currentPageParams: {},
    };
  },

  computed: {
    currentPageComponent() {
      return routes[this.currentPage] || 'NotFoundPage';
    },
  },
  created() {
    eventBus.$on('gotoPage', (pageName, pageParams) => this.gotoPage(pageName, pageParams));
  },

  methods: {
    gotoPage(pageName, pageParams) {
      this.currentPage = pageName;
      this.pageParams = pageParams || {};
    },
  },
};
</script>
