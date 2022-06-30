<template>
  <div class="home">
    <h1>Trendy</h1>
  </div>
</template>

<script>
import {mapFields} from "vuex-map-fields"
import {mapActions} from "vuex"

export default {
  name: 'HomeView',
  components: {
    
  },
  computed: {
    ...mapFields("collections", {
      collection: "collection",
    }),
  },
  methods: {
    ...mapActions({
      getTenorTrendy: "trends/retrieveCollection",
    })
  },
  mounted() {
    this.getTenorTrendy()
  }
}
</script>
