<template>
	<div>
		<tabbar>
			<tabbarItem tabbarroute='/home' bartextcolor='pink'>
				<img slot="tabbarimg" src="~assets/img/tabbar/首页.png" />
				<img slot="tabbaracimg" src="~assets/img/tabbar/首页active.png" />
				<div slot="tabbartext">首页</div>
			</tabbarItem>
			<tabbarItem tabbarroute='/category' bartextcolor='pink'>
				<img slot="tabbarimg" src="~assets/img/tabbar/分类.png" />
				<img slot="tabbaracimg" src="~assets/img/tabbar/分类active.png" />
				<div slot="tabbartext">分类</div>
			</tabbarItem>
			<tabbarItem tabbarroute='/cart' bartextcolor='pink'>
				<img slot="tabbarimg" src="~assets/img/tabbar/购物车.png" />
				<img slot="tabbaracimg" src="~assets/img/tabbar/购物车active.png" />
				<div slot="tabbartext">购物车</div>
			</tabbarItem>
			<tabbarItem tabbarroute='/profile' bartextcolor='pink'>
				<img slot="tabbarimg" src="~assets/img/tabbar/我的.png" />
				<img slot="tabbaracimg" src="~assets/img/tabbar/我的active.png" />
				<div slot="tabbartext">我的</div>
			</tabbarItem>
		</tabbar>
		</div>
</template>

<script>
	import tabbar from 'components/common/tabbar.vue'
	import tabbarItem from 'components/common/tabbar-item.vue'
	
	export default{
		components:{
			tabbar,
			tabbarItem
		}
	}
</script>

<style>
</style>
