import { createApp } from 'vue'
import './style.css'
import Posts from './Posts.vue'
import Recommendations from './Recommendation.vue'
createApp(Posts).mount('#posts')
createApp(Recommendations).mount('#recommendations')

