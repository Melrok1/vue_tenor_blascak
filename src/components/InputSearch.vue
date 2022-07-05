<template>
    <div class="inputSearch">
        <label for="search">
            <span class="icon">
                <SVGIcons width="1rem" height="1rem" name="searchIcon"/>
            </span>
        </label>
        <input  @input="inputEvent" type="search" id="search" v-model="searchInput" />
    </div>
</template>


<script>
import { mapActions } from "vuex"
import SVGIcons from "@/components/SVGIcons.vue"

export default {
    name: 'InputSearch',
    components: {
        SVGIcons
    },
    data: () => ({
        searchInput: null,
        timer: null ,
        timerDelay: 200
    }),
    methods: {
        ...mapActions({
            getTenorSearchTerm: "search/retrieveCollection",
        }),
        inputEvent() {
            clearTimeout(this.timer)
        }
    },
    watch: {
        searchInput(val) {
            if(val.length > 2) {
                this.timer = setTimeout(() => {
                    this.getTenorSearchTerm(this.searchInput)
                }, this.timerDelay)
            }
        }
    }
}
</script>


<style lang="scss" scoped>

.inputSearch {
    label {
        span {
            margin-right: 0.5rem;
        }
    }
    #search {
        padding: 0.25rem 0.5rem;
        font-size: 1.1rem;
        border-radius: 5px;
        border: 2px solid $secondary_color;
        border-style: outset;
        background: $primary_color;
        outline: none;
        box-shadow: rgb(171 171 171) 3px 3px 4px 0px inset, rgb(255 255 255) -3px -3px 10px 1px inset;
    }
}

</style>
