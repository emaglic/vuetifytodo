<template>
  <v-text-field outlined placeholder="Add Task" class="pa-3 field-add-task" hide-details clearable v-model="newTaskTitle" @keyup.enter="addTask">
    <template v-slot:append>
      <v-icon @click="addTask" :disabled="newTaskTitleInvalid">mdi-plus</v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    addTask() {
      if (!this.newTaskTitleInvalid) {
        this.$store.dispatch("addTask", this.newTaskTitle);
        this.newTaskTitle = "";
      }
    },
  },
  computed: {
    newTaskTitleInvalid() {
      return !this.newTaskTitle;
    },
  },
};
</script>

<style lang="scss">
.field-add-task {
  &.v-input--is-focused {
    .v-input__slot {
      background-color: rgba(90, 100, 148, 0.7);
    }
  }
}
</style>
