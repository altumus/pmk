import * as Vue from 'vue'

import mainblock from '../vue/main-block.vue';
import secondblock from '../vue/second-block.vue';

import '../css/index.less'
import '../css/reset.css'

Vue.createApp(mainblock).mount('#main-container')
Vue.createApp(secondblock).mount('#second-container')