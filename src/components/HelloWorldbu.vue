<template>
  <v-container>
    <button class="counter" @click="counter++">{{ counter }}</button>
    <input v-model="message" @keyup.esc="handleKeyup" @keyup.enter="alertMessage" v-autofocus :style="errorStyle" ref="messageInput" />
    <button @click="clearMessage">Clear</button>
    <div>{{ message.length }}</div>
    <h5 class="border-gray" v-if="message.length">{{ message }}</h5>
    <h5 class="border-gray" v-else>No Message Entered.</h5>
    <p v-show="messageUpperCase.length">Uppercase Message: {{ messageUpperCase }}</p>
    <p>Lowercase message: {{ message | messageLowerCase }}</p>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      message: "",
      counter: 0,
    };
  },
  computed: {
    messageUpperCase() {
      //this.counter++;
      return this.message.toUpperCase();
      console.log("whatever");
    },
    errorStyle() {
      if (this.message.length > 22) {
        return {
          color: "red",
          background: "pink",
        };
      }
    },
  },
  methods: {
    clearMessage() {
      this.message = "";
    },
    handleKeyup(evt) {
      console.log(evt);
    },
    alertMessage() {
      alert(this.message);
    },
    /* messageUpperCase() {
      this.counter++;
      return this.message.toUpperCase();
    }, */
  },
  filters: {
    messageLowerCase(value) {
      return value.toLowerCase();
    },
  },
  directives: {
    autofocus: {
      inserted(el) {
        console.log(el);
        el.focus();
      },
    },
  },

  mounted() {
    console.log("this.$refs: ", this.$refs);
  },
};
</script>

<style>
.border-gray {
  border: 1px solid gray;
  padding: 1rem;
  margin-top: 1rem;
}
p {
  margin-top: 1rem;
}
.counter {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: red;
  color: white;
  padding: 10px;
}

input,
button {
  font-size: 23px;
}
</style>
