<template>
  <div class="">
    <field-add-task />
    <list-tasks v-if="$store.state.tasks.length" />
    <no-tasks v-else />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  components: {
    "field-add-task": require("@/components/Todo/FieldAddTask.vue").default,
    "list-tasks": require("@/components/Todo/ListTasks.vue").default,
    "no-tasks": require("@/components/Todo/NoTasks.vue").default,
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
