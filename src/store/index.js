import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "Wake Up",
        done: false,
        dueDate: '2021-10-29'
      },
      {
        id: 2,
        title: "Get Bananas",
        done: false,
        dueDate: '2021-10-25'
      },
      {
        id: 3,
        title: "Eat Bananas",
        done: false,
        dueDate: null
      },
    ],
    snackbar: {
      show: false,
      message: "",
    },
  },
  mutations: {
    addTask(state, newTaskTitle) {
      if (!newTaskTitle.length) return;
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null
      };
      state.tasks.push(newTask);
    },
    doneTask(state, id) {
      console.log("id: ", id);
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    showSnackbar(state, message) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.message = message;
      }, timeout);
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
    },
    editTask(state, { id, title }) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.title = title;
    },
    setDate(state, { id, dueDate }) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.dueDate = dueDate;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackbar", "Task Added");
    },
    doneTask({ commit }, id) {
      commit("doneTask", id);
      commit("showSnackbar", "Task Done");
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
      commit("showSnackbar", "Task Deleted");
    },
    editTask({ commit }, payload) {
      commit("editTask", payload);
      commit("showSnackbar", "Task Updated");
    },
    setDate({ commit} , payload) {
      commit("setDate", payload);
      commit("showSnackbar", "Due Date Set");
    }
  },
  modules: {},
});
