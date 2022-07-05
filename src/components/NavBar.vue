<template>
    <div class="navbarWrapper">
        <nav>
            <router-link to="/">Trends</router-link>
            <router-link to="/search">Serach</router-link>
        </nav>
    </div>
</template>



<style lang="scss" scoped>

.navbarWrapper {
    width: 100%;
    height: $navbarHeight;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: $secondary_color;
    box-shadow: $globalBoxShadow;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

nav {
	padding: 30px;

	a {
		text-decoration: none;
		font-size: 1.7rem;
		font-weight: 300;
		color: $linkColor;
		text-shadow: 0px 0px 2px #1f1f1f;
		padding: 0.25rem 0.75rem;
		margin-right: 2rem;
		&.router-link-exact-active {
			color: $linkColor_active;
			border-bottom: 4px solid $linkColor_active;
			border-radius: 4px;
		}
	}

	a:last-of-type{
		margin-right: 0;
	}
}

</style>