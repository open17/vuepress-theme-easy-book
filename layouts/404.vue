<template>
  <div class="overflow-x overflow-y">
    <TopBarVue/>
    <div class="pic">
      <el-empty :image-size="200" :description="getText()">
        <el-link type="primary" :href="$withBase('/')" >
            take me home~
        </el-link>
      </el-empty>
      <el-tabs>
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
    </div>
  </div>
</template>

<script>
import TopBarVue from '../compentents/TopBar.vue';
import "../styles/basic.css"
export default {
    components:{
        TopBarVue
    },
    methods:{
        getText(params) {
            const randomInt = Math.floor(Math.random() * 5);
            var text = [
                "我们是怎么来到这里的?",
                "看起来有些broken link",
                "这是一个404页面",
                "你正在寻找的页面不存在",
                "你似乎来到了没有知识存在的荒原",
            ]
            return text[randomInt];

        }
    },
    mounted(){

        this.$message.error(this.getText());
    }
};
</script>

<style>
.pic {
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* 调整为适合您的页面高度 */
}
</style>