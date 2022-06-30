<template>
  <div class="home">
    <h1>Trendy</h1>
    <div class="trentyCollectionWrapper" v-if="collection">
      <div v-for="(singleGifObj, index) in collection.data.results" :key="index">
        <div class="gifWrapper">
          <!-- {{ singleGifObj }} -->
          <img :src="singleGifObj.media[0].gif.preview" alt="#">
          <!-- <p>{{ singleGifObj.media[0].gif.preview }}</p> -->
        </div>
      </div>
    </div>
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
    ...mapFields("trends", {
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




<style lang="scss" scoped>

.trentyCollectionWrapper {
    line-height: 0;
   
  column-count: 5;
  -webkit-column-count: 5;
  -moz-column-count: 5;
  column-gap: 30px;
  -webkit-column-gap: 30px;
  -moz-column-gap: 30px;

  .gifWrapper {
    width: 100%;    
    img{
      margin-top: 30px;
      width: 100% !important;
      height: auto !important;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      box-shadow: 0 4px 10px 0 rgb(0 0 0 / 5%), 0 2px 4px 0 rgb(0 0 0 / 8%);
    }
  }
  
}

@media (max-width: 1200px) {
  .trentyCollectionWrapper {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  }
}
@media (max-width: 1000px) {
  .trentyCollectionWrapper {
  -moz-column-count:    3;
  -webkit-column-count: 3;
  column-count:         3;
  }
}
@media (max-width: 800px) {
  .trentyCollectionWrapper {
  -moz-column-count:    2;
  -webkit-column-count: 2;
  column-count:         2;
  }
}
@media (max-width: 400px) {
  .trentyCollectionWrapper {
  -moz-column-count:    1;
  -webkit-column-count: 1;
  column-count:         1;
  }
}



/*
.trentyCollectionWrapper {
  max-width: 1100px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  .gifWrapper {
    max-width: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media (max-width: 1150px) {
  .trentyCollectionWrapper {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 900px) {
  .trentyCollectionWrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 650px) {
  .trentyCollectionWrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 450px) {
  .trentyCollectionWrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}

*/
</style>
