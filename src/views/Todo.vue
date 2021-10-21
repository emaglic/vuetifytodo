<template>
  <div class="">
    <list-tasks v-if="$store.state.tasks.length" />
    <no-tasks v-else />
    <button-done-sorting v-if="$store.state.sorting" />
    <dialog-delete-all v-if="deleteAll" @close="emitClose" />
  </div>
</template>

<script>
export default {
  props: ["deleteAll"],
  name: "Home",
  data() {
    return {};
  },
  methods: {
    emitClose() {
      this.$emit("close");
    },
  },
  components: {
    "list-tasks": require("@/components/Todo/ListTasks.vue").default,
    "no-tasks": require("@/components/Todo/NoTasks.vue").default,
    "button-done-sorting": require("@/components/Todo/ButtonDoneSorting.vue").default,
    "dialog-delete-all": require("@/components/Todo/Dialogs/DialogDeleteAll.vue").default,
  },
};
</script>
<style lang="scss">
.no-tasks {
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0.5;
  transform: translate(-50%, -50%);
}
</style>
