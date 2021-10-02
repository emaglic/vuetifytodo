<template>
  <v-dialog
        ref="dialog"
        :value="true"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <v-date-picker
          v-model="date"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="$emit('close')"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="handleSave"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
</template>

<script>
export default {
    props: ['task'],
    data: () => ({
      date: null,
      menu: false,
      modal: false,
      menu2: false,
    }),
    mounted() {
      if(this.task.dueDate) {
        this.date = this.task.dueDate;
      }
    },
    methods: {
      handleSave() {
      let payload = {
          id: this.task.id,
          dueDate: this.date
        };
        this.$store.dispatch("setDate", payload);
        this.$emit("close");
    }
  }
}
</script>

<style>

</style>