<template>
  <v-text-field
    outlined
    label="Add Task"
    class="pa-3"
    hide-details
    clearable
    v-model="newTaskTitle"
    @keyup.enter="addTask"
  >
  <template v-slot:append>
    <v-icon @click="addTask" color="primary" :disabled="newTaskTitleInvalid">mdi-plus</v-icon>
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
      if(!this.newTaskTitleInvalid) {
        this.$store.dispatch("addTask", this.newTaskTitle);
        this.newTaskTitle = "";
      }
    },
  },
  computed: {
    newTaskTitleInvalid() {
      return !this.newTaskTitle;
    }
  }
};
</script>

<style></style>
