import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Users from './components/Users'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.prototype.$axios=axios
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
		{path:"/",component:HelloWorld},
		{path:"/users",component:Users},
	]
})
/* eslint-disable no-new */
new Vue({
	router,
	el:"#app",
/*	template:`
		<div class="app">
			<ul>
				<li>
					<router-link to="/">HelloWorld</router-link>
					<router-link to="/users">users</router-link>
				</li>
			<ul>
			<router-view><router-view>
		</div>
	`,*/
	render:h=>h(App)
	})
/*.$mount("#app")*/
