<template>
   <router-link :to="'/' + to" v-if="!isOuterLink(to)"><slot/></router-link>
   <a v-else :href="to" target="_blank"><slot/></a>
</template>

<script>
export default {
    props:["to"],
    methods:{
        isOuterLink(url){
            return url.startsWith("http://")||url.startsWith("https://")
        }
    }
}
</script>

<style>

</style>