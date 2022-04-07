import * as Vue from 'vue'

import mainblock from '../vue/main-block.vue';
import secondblock from '../vue/second-block.vue';
import thirdblock from '../vue/third-block.vue';
import fourthblock from '../vue/fourth-block.vue'



import '../css/index.less'
import '../css/reset.css'


import '../css/slider.core.css'
import '../css/slider.theme.css'

Vue.createApp(mainblock).mount('#main-container')
Vue.createApp(secondblock).mount('#second-container')
Vue.createApp(thirdblock).mount('#third-container')
Vue.createApp(fourthblock).mount('#fourth-container')


import Glide from './glide.min.js'

let sliders = document.querySelectorAll('.glide');

for (let i = 0; i < sliders.length; i++) {
  let glide = new Glide(sliders[i], {
    gap: 4,
  });
  
  glide.mount();
}