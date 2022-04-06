import * as Vue from 'vue'

import mainblock from '../vue/main-block.vue';
import secondblock from '../vue/second-block.vue';
import thirdblock from '../vue/third-block.vue';



import '../css/index.less'
import '../css/reset.css'
import '../css/slider.less'



import '../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'


Vue.createApp(mainblock).mount('#main-container')
Vue.createApp(secondblock).mount('#second-container')
Vue.createApp(thirdblock).mount('#third-container')
