<template>
	<div id="app">
		<Navbar />
		<main>
			<router-view/>
			<Footer />
		</main>
	</div>
</template>


<script>
import Navbar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"

export default {
	name: 'App',
	components: {
		Navbar, Footer
	}
}
</script>






<style lang="scss">

#app {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	main {
		min-height: calc(100vh - $navbarHeight);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
}

</style>
