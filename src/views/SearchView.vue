<template>
	<div class="search">
		<InputSearch />
		<PicturesTemplate :images="collection" />
	</div>
</template>


<script>
import {mapFields} from "vuex-map-fields"
import PicturesTemplate from "@/components/PicturesTemplate.vue";
import InputSearch from "@/components/InputSearch.vue";

export default {
	name: "SearchView",
	components: {
		PicturesTemplate,
		InputSearch,
	},
	data: () => ({

	}),
	computed: {
		...mapFields("search", {
			collection: "collection",
		}),
	}
}

</script>