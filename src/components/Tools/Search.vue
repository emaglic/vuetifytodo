<template>
  <v-text-field
    v-model="search"
    class="mt-1 expanding-search"
    :class="{ closed: searchClosed && !search }"
    placeholder="Search"
    :disabled="$store.state.sorting"
    prepend-inner-icon="mdi-magnify"
    @focus="searchClosed = false"
    @input="$store.commit('setSearch', $event)"
    @blur="searchClosed = true"
    filled
    clearable
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      search: null,
      searchClosed: true,
    };
  },
};
</script>

<style lang="scss">
.expanding-search {
  transition: max-width 0.3s;
  .v-input__slot {
    cursor: pointer !important;
    &:before,
    &:after {
      display: none;
    }
  }
  &.closed {
    max-width: 45px;
    .v-input__slot {
      background: transparent !important;
    }
  }
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>
