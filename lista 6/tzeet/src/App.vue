<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Tzeet from './components/Tzeet.vue'

let tzeets =
[
  {
    userName : "Nome",
    userNick: "String",
    tzeetDate: "String",
    userLink: "String",
    tzeetText : "String",
    likes : 10,
    shares: 10,
    comments: 10
  },
  {
    userName : "Nome",
    userNick: "String",
    tzeetDate: "String",
    userLink: "String",
    tzeetText : "String",
    likes : 10,
    shares: 10,
    comments: 10
  },
  {
    userName : "Nome",
    userNick: "String",
    tzeetDate: "String",
    userLink: "String",
    tzeetText : "String",
    likes : 10,
    shares: 10,
    comments: 10
  }
]
</script>

<template>
  <Tzeet v-for="t in tzeets" :tzeet=t  ></Tzeet>
  <!--<div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />-->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
