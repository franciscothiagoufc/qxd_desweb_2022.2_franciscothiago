<script setup>
import { ref } from 'vue'
defineProps({
	recommendation:{
    	userName: String,
    	userUrl: String
	}
})
</script>

<template>
    <p>
        <img src="figures/tiziu.png" alt="Profile picture"/>
        <a href="{{recommendation.userUrl}}" class="mt-3">{{recommendation.userName}}</a>
        <button class="btn-primary rounded">Seguir</button>
    </p>
</template>