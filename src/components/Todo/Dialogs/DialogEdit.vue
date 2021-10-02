<template>
  <v-dialog :value="true" max-width="290">
    <v-card>
      <v-card-title class="text-h5">
        Edit Task
      </v-card-title>

      <v-card-text>
        Edit the title of this task.
        <v-text-field v-model="taskTitle" @keyup.enter="handleSave(task.id, taskTitle)" />
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text @click="$emit('close')">
          Cancel
        </v-btn>

        <v-btn color="green darken-1" text @click="handleSave(task.id, taskTitle)" :disabled="taskTitleInvalid">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      taskTitle: null,
    };
  },
  methods: {
    handleSave(id, newTitle) {
      if (!this.taskTitleInvalid) {
        let payload = {
          id,
          title: newTitle,
        };
        this.$store.dispatch("editTask", payload);
        this.$emit("close");
      }
    },
  },
  mounted() {
    this.taskTitle = this.task.title;
  },
  computed: {
    taskTitleInvalid() {
      return !this.taskTitle || this.taskTitle === this.task.title;
    },
  },
};
</script>

<style></style>
