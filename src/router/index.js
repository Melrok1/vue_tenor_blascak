import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/search',
		name: 'search',
		component: SearchView
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
