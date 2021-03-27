<template>
  <div class="main">
    <Menu></Menu>
    <articleContent></articleContent>
    <sidebar></sidebar>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Article from './components/article-item/Article'
import articleContent from './components/content'
import sidebar from './components/sidebar'

export default {
  name: "MainPage",
  components: {Menu, Article, articleContent, sidebar},
  data() {
    return {
    }
  },
  created(){
    console.log(this.$route.params.id)
  },
}
</script>

<style>
.main {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  display: flex;
}

.grid {
  margin-top: 50px;
  margin-right: 15px;
  border-radius: 10px;
}

</style>
