<template>
	<div class="menusbg">
		<div class="menus-icon-wrap" @click="closeMenu">
			<img src="@/assets/imgs/left-white.png" />
		</div>
		<ul>
			<li><router-link to="/">HOME</router-link></li>
			<li><router-link to="/graph">GRAPH</router-link></li>
			<li><router-link to="/career">CAREER</router-link></li>
			<li><router-link to="/contact">CONTACT</router-link></li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Menus',
	methods: {
		closeMenu() {
			this.$emit('isCloseMenu', false)
		},
	},
}
</script>

<style></style>
