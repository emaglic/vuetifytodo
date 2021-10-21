<template>
  <div class="ml-4 text-subtitle-2">
    {{ date }}
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      date: "",
    };
  },
  methods: {
    getDate() {
      this.date = moment(new Date()).format("MMMM D YYYY, h:mm:ss a");
      setTimeout(this.getDate, 1000);
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>

<style></style>
