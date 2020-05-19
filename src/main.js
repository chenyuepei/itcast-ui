import Vue from 'vue'
import App from './App.vue'
import HmButton from './components/button.vue'
import HmDialog from './components/dialog.vue'
import HmInput from './components/input.vue'
import HmSwitch from './components/switch.vue'
import HmRadio from './components/radio.vue'
import RadioGroud from './components/radioGroud.vue'
Vue.config.productionTip = false
import './assets/fonts/font.scss'
Vue.component(HmButton.name,HmButton)
Vue.component(HmDialog.name,HmDialog)
Vue.component(HmInput.name,HmInput)
Vue.component(HmSwitch.name,HmSwitch)
Vue.component(RadioGroud.name,RadioGroud)
Vue.component(HmRadio.name,HmRadio)


new Vue({
  render: h => h(App),
}).$mount('#app')
