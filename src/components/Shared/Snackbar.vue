<template>
  <v-snackbar v-model="$store.state.snackbar.show" :multi-line="multiLine">
    {{ $store.state.snackbar.message }}

    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="$store.commit('hideSnackbar')">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    multiLine: true,
  }),
};
</script>

<style></style>
