<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        href="#"
        class="pagination__link pagination__link--arrow"
        aria-label="Предыдущая страница"
        :class="{'pagination__link--disabled': page === 1}"
        @click.prevent="prev()"
      >
        <svg
          width="8"
          height="14"
          fill="currentColor"
        >
          <use xlink:href="#icon-arrow-left" />
        </svg>
      </a>
    </li>
    <li
      v-for="pageNumber in pages"
      :key="pageNumber"
      class="pagination__item"
    >
      <a
        href="#"
        class="pagination__link"
        :class="{'pagination__link--current': pageNumber === page}"
        @click.prevent="paginate(pageNumber)"
      >
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <a
        v-if="page >= 1"
        class="pagination__link pagination__link--arrow"
        href="#"
        aria-label="Следующая страница"
        :class="{'pagination__link--disabled': page === pages}"
        @click.prevent="next()"
      >
        <svg
          width="8"
          height="14"
          fill="currentColor"
        >
          <use xlink:href="#icon-arrow-right" />
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: {
    page: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },

    prev() {
      if (this.page === 1) {
        return;
      }
      this.page -= 1;
      this.$emit('paginate', this.page);
    },

    next() {
      if (this.page === this.pages()) {
        return;
      }
      this.page += 1;
      this.$emit('paginate', this.page);
    },
  },
};
</script>
