<template>
    <div class="footer">
        <p> 
            <span>
                &copy; Martin Blaščák 2022 
            </span> 
            <span>
                martin.blascak86@gmail.com
            </span>
        </p>
    </div>
</template>


<script>
export default {
    name: 'Footer-template'
}
</script>

<style lang="scss" scoped>

.footer {
    text-align: center;
    color: rgb(243, 243, 243);
    padding: 0.5rem 0;
    background: rgb(182, 182, 182);
    p {
        span {
            margin-right: 3rem;
        }
    }
}

</style>