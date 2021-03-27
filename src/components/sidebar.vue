<template>
    <div class="sidebar grid" ref="sidebarContainer">
      <div class="sidebar-inner" :style="'width:'+ (grid_width) +'px;'">
        <ul class="sidebar-ul">
          <li id="post-card" class="card-item-default">
            <div class="card-default">
              <div class="card-head">
                <h4>近期文章</h4>
              </div>
              <ul class="card-item sidebar-ul">
                <li>
                  <a href="www.clingclang.cn">文章1</a>
                </li>
                <li>
                  <a href="www.clingclang.cn">文章2</a>
                </li>
                <li>
                  <a href="www.clingclang.cn">文章3</a>
                </li>
                <li>
                  <a href="www.clingclang.cn">文章4</a>
                </li>
                <li>
                  <a href="www.clingclang.cn">文章5</a>
                </li>
              </ul>
            </div>
          </li>
          <li id="category-card" class="card-item-default">
            <div class="card-default">
              <div class="card-head">
                <h4>分类目录</h4>
              </div>
              <ul class="card-item sidebar-ul">
                <li>
                  <a href="www.clingclang.cn">Python</a>
                </li>
                <li>
                  <a href="www.clingclang.cn">Vue</a>
                </li>
                <li>
                  <a href="www.clingclang.cn">乱七八糟</a>
                </li>
                <li>
                  <a href="www.clingclang.cn">骚操作</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
    name: "sidebar",
  data(){
      return{
        grid_width:0,
      }
  },
  mounted(){
    var that = this;
    this.grid_width = this.$refs.sidebarContainer.offsetWidth;
    this.$EventBus.$on('changeSideBar',function () {
      that.grid_width = that.$refs.sidebarContainer.offsetWidth;
    })
  },

}
</script>

<style scoped>
.sidebar{
  width: calc(100% * 5 / 6.001 * 1/4);
}
@media screen and (max-width: 650px) {
  .sidebar{
    display: none;
  }
}
.sidebar-inner{
  position: fixed;
  border-radius: 10px;
}
.sidebar-ul{
  list-style: none;
  padding-left: 0px;
  margin: 0px;
  text-align: left;
}
.card-head h4{
  padding: 15px 20px;
  box-shadow: 0 2px 4px -2px rgba(0,0,0,0.07);
  color: #888;
  font-size: .70rem;
  line-height: 1rem;
  min-height: 1rem;
  letter-spacing: 1;
  margin: 0;
  font-weight: normal;
}
.card-item{
  padding: 20px;
  margin: 0;
}
.card-item-default{
  background-color: #fff;
  border-radius: 10px;
}
.card-item li a{
  font-size: 0.65rem;
  line-height: 1.3rem;
  color: #52616b;
}
.card-item li a:hover{
  text-decoration: none;
  opacity: 0.7;
}

#category-card{
  margin-top: 10px;
}
</style>
