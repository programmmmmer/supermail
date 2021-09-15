<template>
	<div @click="tabbarclick" class="tabbar-item">
		<slot v-if="!acimgbl()" name="tabbarimg"></slot>
		<slot v-else name="tabbaracimg"></slot>
		<div :style="tabbartextcolors">
			<slot name="tabbartext"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{

			}
		},
		props:{
			tabbarroute:String,
			bartextcolor:String
		},
		methods:{
			tabbarclick(){
				this.$router.push(this.tabbarroute)
			},
			acimgbl(){
				return this.$route.path == this.tabbarroute
			}
		},
		computed:{
			tabbartextcolors(){
				return this.$route.path == this.tabbarroute ? {color: this.bartextcolor} : {}
			}
		}
	}
</script>

<style>
	.tabbar-item{
		flex: 1;
		text-align: center;
	}
	.tabbar-item img{
		height: 29px;
		width: 29px;
		padding-top: 5px;
	}
</style>
