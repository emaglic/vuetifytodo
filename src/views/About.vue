<template>
  <div class="about pa-6">
    <h1>About {{ $store.state.appTitle }}</h1>
    <p>This is a test project that I created while following along with <a target="_blank" href="https://www.udemy.com/course/vuetify-vuejs-vuex/">this</a> Udemy course.</p>
    <p>
      The project is created with <a target="_blank" href="https://vuetifyjs.com/">Vuetify</a> (a Material Design Framework for VueJS) + <a target="_blank" href="https://github.com/dannyconnell/localbase">LocalBase</a> (an offline Firebase-style
      database solution)
    </p>
    <p>This app allows you to create and manage a Todo list. With this app you can...</p>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title">
        <v-list-item-icon>
          <v-icon v-if="item.icon" color="pink">
            mdi-star
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { icon: true, title: "Add a title for each todo item.", avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg" },
        { icon: true, title: "Provide a due date for each todo item..", avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg" },
        { icon: true, title: "Sort todo items however you'd like", avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg" },
      ],
    };
  },
};
</script>
