<template>
    <div class="pictureTemplate">
        <div class="pictureTemplateHeaderWrapper">
            <slot name="pictureTemplate_header"/>
        </div>
        <div class="trentyCollectionWrapper" v-if="images">
            <div v-for="(singleGifObj, index) in images.data.results" :key="index">
                <div class="gifWrapper">
                    <img 
                        :alt="singleGifObj.content_description" 
                        @mouseover="selectedImg = index"
                        @mouseleave="selectedImg = null"
                        :class="{hover: selectedImg === index}"
                        :src="selectedImg === index ? singleGifObj.media[0].gif.url : singleGifObj.media[0].gif.preview" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: "PictureTemplate",
    props: {
        images: Object,
    },
    data: () => ({
        selectedImg: null
    }),
    methods: {

    }
};
</script>


<style lang="scss" scoped>

.pictureTemplate {
    max-width: 1200px;
    min-height: 200px;
    margin: 3rem auto;
    border: 2px solid #d9d9d9;
    border-radius: 5px;
    padding: 0 30px 30px 30px;
    box-shadow: $globalBoxShadow;
    .pictureTemplateHeaderWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 1rem;
    }
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
            img {
                margin-top: 30px;
                width: 100% !important;
                height: auto !important;
                border: 1px solid #d9d9d9;
                border-radius: 4px;
                box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 5%), 0 2px 4px 0 rgba(0, 0, 0, 8%);
                transition: 0.5s;
            }
        }
    }
}


@media (max-width: 1000px) {
    .pictureTemplate .trentyCollectionWrapper {
        -moz-column-count: 4;
        -webkit-column-count: 4;
        column-count: 4;
    }
}
@media (max-width: 800px) {
    .pictureTemplate .trentyCollectionWrapper {
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
    }
}
@media (max-width: 500px) {
    .pictureTemplate .trentyCollectionWrapper {
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
    }
}
@media (max-width: 400px) {
    .pictureTemplate .trentyCollectionWrapper {
        -moz-column-count: 1;
        -webkit-column-count: 1;
        column-count: 1;
    }
}

.hover {
    transition: 0.5s;
    transform: scale(1.2);
    box-shadow: -3px 5px 10px 0px rgb(0 0 0 / 53%), 0 2px 4px 0 rgb(0 0 0 / 13%) !important;
}

</style>
