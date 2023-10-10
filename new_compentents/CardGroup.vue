<template>
  <el-row :gutter="20">
    <el-col :span="8" v-for="(g, index) in group" :key="index">
      <el-card :body-style="{ padding: '0px' }" class="_my-card" shadow="never">
        <img :src="g.img_url" class="_image" />
        <div class="_card-content">
          <div class="_title">{{g.title}}</div>
          <div class="_description">{{g.description}}</div>
          <div class="_line"></div>
          <div class="_link-container">
            <el-link type="primary" class="link" :href="g.link">View Details</el-link>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
    props:["group"]
}
</script>

<style>
._my-card {
  margin-bottom: 20px;
  border: 1px solid #888;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

._my-card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
}

._image {
  padding-left: 15%;
  padding-right: 15%;
  margin-bottom: 0%;
  width: 70%;
  display: block;
}

._card-content {
  padding: 14px;
}

._title {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

._description {
  text-align: center;
  font-size: 14px;
  color: #888;
}

._line {
  margin: 10px auto;
  height: 1px;
  background-color: #ccc;
}

._link-container {
  text-align: center;
  margin-top: 10px;
}

._link {
  font-size: 14px;
}
</style>