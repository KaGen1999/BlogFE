<template>
  <div class="menu grid" ref="gridContainer">
    <div class="menu-inner" :style="'width:'+ (grid_width) +'px;'">
      <!--头像-->
      <div class="menu_head">
        <div class="avatar">
          <img :src="avatar">
        </div>
      </div>
      <!--标题及描述-->
      <div>
        <h1>
          <a href="https://www.clingclang.cn" class="title">OJO的博客</a>
        </h1>
        <p class="discription">这里是一个健忘症的备忘录</p>
      </div>
      <!--文件分类栏-->
      <div>
        <ul class="icon-warp">
          <el-tooltip class="item" effect="dark" content="微信" placement="bottom">
            <li>
              <a class="iconfont icon-weixin icon-item" href="https://www.clingclang.cn"></a>
            </li>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="github" placement="bottom">
            <li>
              <a class="iconfont icon-github icon-item" href="https://www.clingclang.cn"></a>
            </li>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="微博" placement="bottom">
            <li>
              <a class="iconfont icon-weibo icon-item" href="https://www.clingclang.cn"></a>
            </li>
          </el-tooltip>
        </ul>
      </div>
      <!--功能页分类-->
      <div>
        <ul class="page-warp">
          <li class="page-warp-item">
            <a href="">首页</a>
          </li>
          <li class="page-warp-item">
            <a href="./article">关于作者</a>
          </li>
          <li class="page-warp-item">
            <a href="https://wwww.clingclang.cn">留言板</a>
          </li>
        </ul>
        <el-input
          class="seach-input"
          placeholder="在此输入搜索内容"
          v-model="search_kw">
        </el-input>
      </div>
    </div>
    <div class="place-holder" style="width: 100%;height: 1px;"></div>
  </div>
</template>

<script>
import '@/icon/iconfont.css'
  export default {
    name: "Menu",
    data(){
      return{
        avatar: require('../../static/avatar.jpg'),
        screenWidth: document.body.clientWidth,
        grid_width:0,
        search_kw:'',
      }
    },
    mounted(){
      var that = this;
      this.grid_width = this.$refs.gridContainer.offsetWidth;
      window.onresize = () => {
        return (() => {
          this.$EventBus.$emit('changeSideBar')
          that.grid_width = that.$refs.gridContainer.offsetWidth;
        })()
      }
    },
    methods:{
    }
  }
</script>

<style>
.menu{
  width: calc(100% * 1 / 6.001);
  padding: -15px;
}
@media screen and (max-width: 650px) {
  .menu{
    display: none;
  }
}
.menu-inner{
  min-height: 50px;
  background: #fff;
  border-radius: 10px;
  z-index: 88;
  box-shadow: 0 0 0 1px rgba(0,0,0,.02), 0 4px 10px rgba(0,0,0,.06);
  position: fixed;
}

.avatar {
  max-width: 100px;
  padding: 28px 28px 10px;;
  margin: auto;
}
.avatar img{
  width: 100%;
  border: 1px solid #eee;
  border-radius: 100%
}
.title{
  font-size: 1rem;
  color: #333;
  letter-spacing: 1px;
  line-height: 1.5rem;
  position: relative;
}
.menu:hover .title:after{
  transform: scaleX(0);
}
.title:after{
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  height: 1px;
  width: 100%;
  background: rgba(0,0,0,.4);
  transform: scaleX(1);
  transition: all .2s ease-in;
}

.discription{
  display: block;
  font-size: 0.25rem;
  line-height: 1.4;
  letter-spacing:1px;
  color: #999;
}
.icon-warp{
  justify-content: center;
  list-style: none;
  display: flex;
  padding: 10px;
  margin: 0;
  border-bottom: 1px solid #f3f3f3;
}
.icon-item{
  font-size: .925rem;
  font-style: normal;
  padding: 0 10px;
  color: #aaa;
}
.icon-item:hover{
  color: #666;
}
.page-warp{
  list-style: none;
  padding: 0;
  margin: 0;
}
.page-warp-item{
  border-bottom: 1px solid #f3f3f3;
}
.page-warp-item a{
  font-size: .68rem;
  color: #666;
  padding: 12px 0;
  display: block;
}
.page-warp-item a:hover{
  background-color: #44cef6;
  color: #ffffff;
}
.page-warp-item a::selection{
  background-color: #44cef6;
  color: #ffffff;
}
.seach-input input{
  border:0px;
  border-radius:10px;
  border-bottom: 1px solid #f3f3f3;
  text-align: center;
}
</style>
