<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Recommendations from './components/Recommendations.vue'
let recommendations =
[
  {
    userName : "Nome",
    userUrl: "String",
  },
  {
    userName : "Nome",
    userUrl: "String",
  },
  {
    userName : "Nome",
    userUrl: "String",
  }
]
</script>

<template>
    <div class="card mt-3">
	    <div class="card-body">
		    <h5 class="card-title">Talvez você goste</h5>
			<recommendations v-for="r in recommendations" :recommendation=r></recommendations>
		</div>
    </div>
</template>