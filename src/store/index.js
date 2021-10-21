import Vue from "vue";
import Vuex from "vuex";
import Localbase from "localbase";

let db = new Localbase("db");
db.config.debug = false;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    tasks: [
      /* {
        id: 1,
        title: "Wake Up",
        done: false,
        dueDate: "2021-10-29",
      },
      {
        id: 2,
        title: "Get Bananas",
        done: false,
        dueDate: "2021-10-25",
      },
      {
        id: 3,
        title: "Eat Bananas",
        done: false,
        dueDate: null,
      }, */
    ],
    snackbar: {
      show: false,
      message: "",
    },
    sorting: false,
  },
  mutations: {
    setSearch(state, value) {
      console.log("value: ", value);
      state.search = value;
    },
    addTask(state, newTask) {
      state.tasks.unshift(newTask);
    },
    doneTask(state, id) {
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
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    toggleSorting(state) {
      state.sorting = !state.sorting;
    },
    deleteAllTasks(state) {
      state.tasks = [];
    },
  },
  actions: {
    getTasks({ commit }) {
      db.collection("tasks")
        .get()
        .then((tasks) => {
          commit("setTasks", tasks.reverse());
        });
    },
    addTask({ commit }, newTaskTitle) {
      if (!newTaskTitle.length) return;
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null,
      };
      db.collection("tasks")
        .add(newTask)
        .then(() => {
          commit("addTask", newTask);
          commit("showSnackbar", "Task Added");
        });
    },
    doneTask({ state, commit }, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      db.collection("tasks")
        .doc({ id })
        .update({
          done: !task.done,
        })
        .then(() => {
          commit("doneTask", id);
          commit("showSnackbar", "Task Done");
        });
    },
    deleteTask({ commit }, id) {
      db.collection("tasks")
        .doc({ id })
        .delete()
        .then(() => {
          commit("deleteTask", id);
          commit("showSnackbar", "Task Deleted");
        });
    },
    editTask({ state, commit }, { id, title }) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      db.collection("tasks")
        .doc({ id })
        .update({
          title,
        })
        .then(() => {
          commit("editTask", { id, title });
          commit("showSnackbar", "Task Updated");
        });
    },
    setDate({ state, commit }, { id, dueDate }) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      db.collection("tasks")
        .doc({ id })
        .update({
          dueDate,
        })
        .then(() => {
          commit("setDate", { id, dueDate });
          commit("showSnackbar", "Due Date Set");
        });
    },
    setTasks({ state, commit }, tasks) {
      db.collection("tasks").set(tasks);
      commit("setTasks", tasks);
    },
    deleteAllTasks({ state, commit }) {
      db.collection("tasks")
        .delete()
        .then(() => {
          commit("deleteAllTasks");
          commit("showSnackbar", "All Tasks Deleted");
        });
    },
  },
  getters: {
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks;
      } else {
        return state.tasks.filter((task) => task.title.toLowerCase().includes(state.search.toLowerCase()));
      }
    },
  },
  modules: {},
});
