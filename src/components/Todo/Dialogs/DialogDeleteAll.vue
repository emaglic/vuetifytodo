<template>
  <v-dialog persistent :value="true" max-width="290">
    <v-card>
      <v-card-title class="text-h5">
        Delete All Tasks?
      </v-card-title>

      <v-card-text>
        Are you sure you wanna delete all tasks?
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text @click="$emit('close')">
          No
        </v-btn>

        <v-btn color="green darken-1" text @click="handleDeleteAll">
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  methods: {
    handleDeleteAll() {
      this.$emit("close");
      this.$store.dispatch("deleteAllTasks");
    },
  },
};
</script>

<style></style>
