<template>
  <v-btn color="primary" class="button-done-sorting" @click="$store.commit('toggleSorting')">Done Sorting</v-btn>
</template>

<script>
export default {};
</script>

<style lang="scss">
.button-done-sorting {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
