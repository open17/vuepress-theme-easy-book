<template>
  <el-collapse>
    <el-collapse-item :title="title" name="1">
      <slot/>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
    props:['title']
};
</script>

<style>
</style>