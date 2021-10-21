<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="768" app>
      <v-img lazy-src="https://picsum.photos/id/11/10/6" class="pa-4 pt-7" height="170" src="https://picsum.photos/id/11/500/300" gradient="to top right, rgba(19,84,122,0.5), rgba(128, 208, 199, 0.8)">
        <v-avatar size="70" class="mb-2" color="primary">
          <span class="white--text text-h5">DF</span>
        </v-avatar>
        <div class="white--text font-weight-bold text-subtitle-1">Default User</div>
      </v-img>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- APP BAR -->
    <v-app-bar app fixed color="primary" dark prominent :height="$route.path === '/' ? 238 : 170" :src="`${publicPath}mountains.jpg`">
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.8), rgba(25,32,72,.8)"></v-img>
      </template>

      <v-container class="pa-0 header-container">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search v-if="$route.path === '/'" />
          <v-btn icon class="mt-2 delete-all-button" v-if="$route.path === '/'" :class="{ disabled: !$store.state.tasks.length || $store.state.search }" @click="$store.state.tasks.length ? (deleteAll = true) : (deleteAll = false)"
            ><v-icon>mdi-delete-forever</v-icon></v-btn
          >
        </v-row>

        <v-row>
          <v-toolbar-title class="ml-4">{{ $store.state.appTitle }}</v-toolbar-title>
        </v-row>
        <v-row>
          <live-date-time />
        </v-row>
        <v-row v-if="$route.path === '/'">
          <field-add-task />
        </v-row>
      </v-container>
    </v-app-bar>
    <!-- END APP BAR -->

    <v-main>
      <!--  -->
      <routerView :deleteAll="deleteAll" @close="deleteAll = false"></routerView>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    publicPath: process.env.NODE_ENV === "production" ? "/projects/todo/" : "/",
    drawer: null,
    deleteAll: false,
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
  }),
  mounted() {
    this.$store.dispatch("getTasks");
  },
  components: {
    snackbar: require("@/components/Shared/Snackbar.vue").default,
    search: require("@/components/Tools/Search.vue").default,
    "live-date-time": require("@/components/Tools/LiveDateTime.vue").default,
    "field-add-task": require("@/components/Todo/FieldAddTask.vue").default,
  },
  methods: {},
};
</script>

<style lang="scss">
.header-container {
  max-width: none !important;
}
.delete-all-button {
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>
