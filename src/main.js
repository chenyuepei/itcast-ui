import Vue from 'vue'
import App from './App.vue'
import HmButton from './components/button.vue'
import HmDialog from './components/dialog.vue'
import HmInput from './components/input.vue'
Vue.config.productionTip = false
import './assets/fonts/font.scss'
Vue.component(HmButton.name,HmButton)
Vue.component(HmDialog.name,HmDialog)
Vue.component(HmInput.name,HmInput)
new Vue({
  render: h => h(App),
}).$mount('#app')
