<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-5 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          {{title}}
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          {{description}}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props:["info"],
    data() {
        return {
            title:"",
            description:"",
        }
    },
    mounted() {
        var a=this.$page.frontmatter[this.info];
        if(a){
            this.title=a.title;
            this.description=a.description;
        }
    }
};
</script>

<style>
</style>