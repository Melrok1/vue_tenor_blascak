<template>
	<div class="home">
		<PicturesTemplate :images="collection">
			<h1 slot="pictureTemplate_header">Trends</h1>
		</PicturesTemplate>
	</div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";
import PicturesTemplate from "@/components/PicturesTemplate.vue";

export default {
	name: "HomeView",
	components: {
		PicturesTemplate,
	},
	computed: {
		...mapFields("trends", {
			collection: "collection",
		}),
	},
	methods: {
		...mapActions({
			getTenorTrendy: "trends/retrieveCollection",
		}),
	},
	mounted() {
		this.getTenorTrendy();
	},
}
</script>




<style lang="scss" scoped>

</style>
