import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const Home = () => import('views/home/home.vue')
const Category = () => import('views/category/category.vue')
const Cart = () => import('views/cart/cart.vue')
const Profile = () => import('views/profile/profile.vue')


const routes = [
	{
		path:'',
		redirct:'/home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/category',
		component:Category
	},	{
		path:'/cart',
		component:Cart
	},
	{
		path:'/profile',
		component:Profile
	},
]
	

const router = new VueRouter({
	routes,
	mode:'history'
})

export default router