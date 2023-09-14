<template>
  <div class="h-light" :style="setColor">
    <slot/>
  </div>
</template>

<script>
export default {
    props:['color'],
    computed:{
        setColor(){
            var bgc="yellow";
            if(this.color)bgc=this.color;
            return "background-color:"+bgc+";";
        }   
    }
}
</script>

<style scoped>
.h-light{
    display: inline;
}
</style>