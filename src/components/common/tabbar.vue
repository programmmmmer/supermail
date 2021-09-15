<template>
	<div class="tabbar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.tabbar{
		height: 59px;
		display: flex;
		bottom: 0;
		left: 0;
		right: 0;
		position: absolute;
		background-color: #F0F0F0;
	}
</style>
