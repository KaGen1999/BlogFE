<template>
  <div class="content grid">
    <router-view name="content"></router-view>
  </div>
</template>

<script>
import Article from './article-item/Article'
import HomePage from './article-item/HomePage'

export default {
  name: "articleContent",
  components: {Article,HomePage},
  data(){
    return{
      articleId:false,
    }
  },
  mounted(){
    console.log(this.$route)
    const acid = this.$route.params.acid
    // console.log(this.articleId)
    this.articleId = acid
    this.tempRoute = Object.assign({}, this.$route)
  },
}
</script>

<style scoped>
.content {
  width: calc(100% * 5 / 6.001 * 3 / 4);
  background-color: #fff;
  /*height: 2000px;*/
  margin-bottom: 100px;
}
@media screen and (max-width: 650px) {
  .content{
    width: 100%;
    margin-right: 0px;
  }
  .subnav li{
    height: .875rem;
    margin-left: 5px;
    margin-right: 3px;
    border-left: 1px solid #e5e5e5;
    padding-left: 15px;
    font-size: 0.55rem;
  }
}
</style>
