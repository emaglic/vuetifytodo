<template>
  <div :key="task.id">
    <v-list-item :class="{ 'blue lighten-5': task.done }" @click="$store.dispatch('doneTask', task.id)" :ripple="false" class="">
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="task.done"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title :class="{ 'text-decoration-line-through': task.done }">
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
            {{ task.dueDate | niceDate }}
          </v-list-item-action-text>
        </v-list-item-action>
        <v-list-item-action>
          <task-menu :task="task" />
        </v-list-item-action>

        <v-list-item-action v-if="$store.state.sorting">
          <v-btn primary icon class="handle">
            <v-icon>mdi-drag-horizontal-variant</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["task"],
  filters: {
    niceDate(value) {
      return moment(value).format("MMM D");
    },
  },
  components: {
    "task-menu": require("@/components/Todo/TaskMenu.vue").default,
  },
  methods: {},
};
</script>

<style lang="scss">
.sortable-ghost {
  opacity: 0.5;
}
.sortable-drag {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
