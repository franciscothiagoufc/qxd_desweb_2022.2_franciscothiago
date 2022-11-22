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
    tzeetText : "Novo",
    likes : 10,
    shares: 10,
    comments: 10
  },
  {
    userName : "Nome",
    userNick: "String",
    tzeetDate: "String",
    userLink: "String",
    tzeetText : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet consequat mi. Cras vitae rutrum diam. Integer volutpat nunc vitae turpis ornare hendrerit id dictum erat. Maecenas vulputate pulvinar finibus. <br/>",
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
  <Tzeet v-for="t in tzeets" :tzeet=t></Tzeet>
</template>