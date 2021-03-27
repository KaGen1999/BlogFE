<template>
  <div class="article">
    <h1 class="article-title">文章标题</h1>
    <!--文章信息栏-->
    <ul class="subnav">
      <li class="iconfont icon-yonghutouxiang">KaGen</li>
      <li class="iconfont icon-leimupinleifenleileibie">
        <a href="www.clingclang.cn">乱七八糟</a>
      </li>
      <li class="iconfont icon-date">2021-01-01</li>
      <li class="iconfont icon-yueduliang">123</li>
    </ul>
    <mavon-editor
      :boxShadow="false"
      class="mdPrinter"
      :value="mdData"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :scrollStyle="true"
      :ishljs="true"
    />
    <!--赞助作者栏-->
    <div class="donate">
      <el-button round size="mini" @click="onPreview" class="iconfont icon-kafei reward">
        请作者喝杯咖啡
      </el-button>
      <el-image-viewer
        v-if="showViewer"
        :on-close="closeViewer"
        :url-list="[donateUrl]" />
    </div>
    <div>
      <ul class="share">
        <li class="share-item" style="font-size: 0.6rem;color: #666">分享：</li>
        <el-popover
          placement="top"
          trigger="hover">
          <img :src="wxShareImg"/>
          <div>微信扫码 点击右上角分享</div>
          <li class="share-item" slot="reference">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weixin"></use>
            </svg>
          </li>
        </el-popover>
        <li class="share-item">
          <a :href="qqShareUrl" target="_blank">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-qq1"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
import '@/icon/iconfont.js'
import QRCode from 'qrcode'  //那使用哪用

export default {
  name: "Article",
  components:{ElImageViewer},
  data(){
    return{
      showViewer:false,
      donateUrl:'http://demo.qzhai.net/gohan/wp-content/uploads/2020/03/tx.png',
      qqShareUrl:'',
      wxShareImg:null,
      mdData:'//将下面的文字复制粘贴到你的有道云笔记Markdown编辑器/简书Markdown编辑器即可在预览中重现上文。\n' +
      '> 作者：在路上\\\n' +
      '贡献者：诺布\n' +
      '\n' +
      '# 0x00 写在前面\n' +
      '\n' +
      '#### 到底什么是个Markdown?\n' +
      '- **Markdown** 是一种文本编辑时候使用的**语法**，通过在文字中加入助记符，将排版/编号/列表/文字高亮/加粗等问题交给机器处理，对文字进行自动排版，从而大大提高编辑记录效率。\n' +
      '\n' +
      '- 有道云Markdown编辑器 or 简书Markdown编辑器都是依照这种Markdown**语法的实现**，所以难免上渲染出来的效果有些小偏差，但是排版方式是通用的。\n' +
      '\n' +
      '#### 为什么要用Markdown?\n' +
      '\n' +
      '- 文章的排版很麻烦，如果有一种对于文章排版的解决方案就好了。\n' +
      '\n' +
      '- 学习实践Markdown语法后你可以自定义你的文章排版。\n' +
      '\n' +
      '- 这是一套定义文章排版格式的语法。\n' +
      '\n' +
      '- 这是一个边际成本递减的升维实践过程。\n' +
      '\n' +
      '#### Markdown的应用场景?\n' +
      '\n' +
      '可以说，所有的文本场景下都可以使用Markdown语法，只要你有一个支持Markdown语法的编辑器就可以，笔者使用的是有道云笔记的Markdown编辑器，因为其支持语法全面(包括文本高亮标记)。当前探索出的支持Markdown的环境有:有道云笔记、简书、微信公众号推送(粘贴渲染排版后的文本即可)。\n' +
      '\n' +
      '#### 本文逻辑安排目录：\n' +
      '\n' +
      '1. **Markdown可以实现的排版效果**\n' +
      '\n' +
      '2. **Markdown文章示例**\n' +
      '\n' +
      '3. **本文的Markdown语法的原文**\n' +
      '\n' +
      '# 0x01 标题相关示例\n' +
      '---\n' +
      '# 主标题\n' +
      '## 副标题\n' +
      '### 一级标题\n' +
      '#### 二级标题\n' +
      '##### 三级标题\n' +
      '###### 六级小标题\n' +
      '### [标题网址](http://yq.upwith.me/)\n' +
      '> 引用文字块\n' +
      '---\n' +
      '\n' +
      '\n' +
      '# 0x02 无序列表相关示例\n' +
      '---\n' +
      '- # 一级列表\n' +
      '- ## 二级列表\n' +
      '- ### 三级列表\n' +
      '- #### 四级列表\n' +
      '- ##### 五级列表\n' +
      '- ###### 六级列表\n' +
      '---\n' +
      '\n' +
      '# 0x03 有序列表相关示例\n' +
      '---\n' +
      '1. **加粗标题1**\n' +
      '    1. 自编号标题1.1\n' +
      '        1. ++下划线自编号标题1.1.1++\n' +
      '            1. *斜体自编号标题1.1.1.1*\n' +
      '\n' +
      '---\n' +
      '\n' +
      '# 0x04 综合使用示例\n' +
      '\n' +
      '> 使用MD时候的要点，合理使用无序列表语法与自定义序号，尽量少使用有序列表语法，因为存在兼容性问题(有道云笔记兼容性比简书好很多)会导致标题无层次分类，示例开始。\n' +
      '\n' +
      '![image](http://upload-images.jianshu.io/upload_images/6189910-13d61acf16fccc84.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n' +
      '## 一、如何更好地理解第四章？\n' +
      '### (一) 前置两个问题：升维与复杂系统\n' +
      '#### 1. 升维\n' +
      '##### (1) 维度是什么？\n' +
      '时空坐标体系下的坐标轴数量，可以理解为**增加的视野角度**。\n' +
      '        \n' +
      '##### (2) 高维和低维的关系\n' +
      '- 信息密度*高*，信息量*大*\n' +
      '- 低维是高维的切片\n' +
      '- 高维的低维展开会导致低维量级的无限扩张\n' +
      '- 推演：高维比低维的视角更多\n' +
      '        \n' +
      '### 2. 复杂系统\n' +
      '#### (1) 定义\n' +
      '什么叫系统？一组组内相互作用、相互依赖的复杂整体\n' +
      '#### (2) 要素\n' +
      '#### (3) 系统的三要素\n' +
      '- 系统关系\n' +
      '- **元素间关系**\n' +
      '- 系统功能\n' +
      '#### (4) 两大类系统\n' +
      '##### ① 他组织系统\n' +
      '- 系统元素\n' +
      '- 系统结构关系\n' +
      '- 系统功能\n' +
      '- 特点：功能稳定，输入一定，输出一定。\n' +
      '##### ② 自组织系统\n' +
      '\n' +
      '---\n' +
      '\n' +
      '# 0x05 Markdown原文\n' +
      '\n' +
      'Markdown与Markdown编辑器与排版文字的关系梳理与实践：\n' +
      '\n' +
      '- Markdown格式原文->有道云Markdown编辑器 or 简书Markdown编辑器->预览效果就是发布后的效果\n' +
      '\n' +
      '- 简书中Markdown编辑器开启方式\n' +
      '    - ```个人设置-基础设置-常用编辑器-Markdown```\n' +
      '\n' +
      '- 有道云笔记Markdown编辑器开启方式\n' +
      '    - ```新文档-新建Markdown```\n' +
      '\n'
    }
  },
  created(){
    this.qqShareUrl = 'https://connect.qq.com/widget/shareqq/index.html?url='+window.location.href;
    this.wxShare()
  },
  methods: {
    onPreview() {
      this.showViewer = true
    },
    // 关闭查看器
    closeViewer() {
      this.showViewer = false
    },
    //生成wx share qr
    wxShare(){
      let url = 'http://www.baidu.com';//获取当前地址栏的地址
      QRCode.toDataURL(url)
        .then(tpian => {
          this.wxShareImg = tpian;
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
}
</script>

<style>
.article{
  padding:30px 20px 0px 20px;
}

.article-title{
  font-size: 1.5rem;
  text-align: left;
}
.subnav{
  list-style: none;
  display: flex;
  padding-left: 0px;
  color: #999;
}
.subnav li{
  height: .875rem;
  margin-left: 0px;
  margin-right: 15px;
  border-left: 1px solid #e5e5e5;
  padding-left: 15px;
  font-size: 0.65rem;
}
@media screen and (max-width: 650px) {
  .subnav li{
    height: .875rem;
    margin-left: 5px;
    margin-right: 3px;
    border-left: 1px solid #e5e5e5;
    padding-left: 15px;
    font-size: 0.55rem;
  }
}
.subnav li a{
  color: #999;
}
.subnav li:nth-child(2):hover{
  color: #666;
}
.subnav li:nth-child(2) a:hover{
  color: #666;
}
.subnav li:hover{
  cursor: pointer;
}
.mdPrinter{
  margin-bottom: 30px;
}
.v-note-wrapper{
  border: 0px !important;
}
.reward{
  font-size: .5rem;
  padding: 10px 15px 10px 15px !important;
}
.share{
  display: flex;
  list-style: none;
  font-size: 1rem;
  right: 0;
  justify-content: flex-end;
}
.share-item{
  opacity: 0.8;
  line-height: 30px;
  padding-left: 16px;
}
.el-popover{
  text-align: center;
  min-width: auto;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
