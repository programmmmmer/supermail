<template>
  <div id="app">
		<router-view></router-view>
		<maintabbar/>
  </div>
</template>

<script>
import maintabbar from 'components/content/maintabbar/maintabbar.vue'

export default {
  name: 'App',
	components:{
		maintabbar
	}
}
</script>

<style>

</style>
