import Vue from 'nativescript-vue'

import Home from './components/Home'

Vue.registerElement(
  "Mapbox",
  () => require("@nativescript-community/ui-mapbox").MapboxView
);

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
