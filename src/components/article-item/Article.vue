<template>
  <div class="article">
    <h1 class="article-title">{{ article.title }}</h1>
    <!--文章信息栏-->
    <ul class="subnav">
      <li class="iconfont icon-yonghutouxiang">KaGen</li>
      <li class="iconfont icon-leimupinleifenleileibie">
        <a href="www.clingclang.cn">{{ article.catalog }}</a>
      </li>
      <li class="iconfont icon-date">{{ article.modify_time | formatDate }}</li>
      <li class="iconfont icon-yueduliang">123</li>
    </ul>
    <mavon-editor
      :boxShadow="false"
      class="mdPrinter"
      :value="article.content"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :scrollStyle="true"
      :ishljs="true"
    />
    <div class="statement">
      <span>本作品原创，遵循</span>
      <a
        target="_blank"
        href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
      >
        《署名-非商业性使用-禁止演绎 4.0 国际》
      </a>

      <span>欢迎转载</span>
    </div>
    <!--赞助作者栏-->
    <div class="donate">
      <el-button
        round
        size="mini"
        @click="onPreview"
        class="iconfont icon-kafei reward"
      >
        请作者喝杯咖啡
      </el-button>
      <el-image-viewer
        v-if="showViewer"
        :on-close="closeViewer"
        :url-list="[donateUrl]"
      />
    </div>
    <div>
      <ul class="share">
        <li class="share-item" style="font-size: 0.6rem; color: #666">
          分享：
        </li>
        <el-popover placement="top" trigger="hover">
          <img :src="wxShareImg" />
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
import QRCode from 'qrcode'
import { getPostById } from '@/api/article'

export default {
  name: 'Article',
  components: { ElImageViewer },
  filters: {
    formatDate(modify_time) {
      return modify_time.split(' ')[0]
    }
  },
  data() {
    return {
      acid: '',
      article: {
        title: '',
        content: '',
        catalog: '',
        comment_option: false,
        statement_option: false,
        modify_time: '2020-01-01',
        tags: '',
        readNum: 123
      },
      showViewer: false,
      donateUrl: require('../../../static/wechat.jpg'),
      qqShareUrl: '',
      wxShareImg: null,
      mdData: ''
    }
  },
  created() {
    this.getPost()
    this.qqShareUrl =
      'https://connect.qq.com/widget/shareqq/index.html?url=' +
      window.location.href
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
    wxShare() {
      let url = 'http://www.baidu.com' //获取当前地址栏的地址
      QRCode.toDataURL(url)
        .then((tpian) => {
          this.wxShareImg = tpian
        })
        .catch((err) => {
          console.error(err)
        })
    },
    fillArticle(article) {
      this.article.title = article.title
      this.article.content = article.content
      this.article.catalog = article.catalog
      this.article.comment_option = article.comment_option
      this.article.statement_option = article.statement_option
      this.article.modify_time = article.modify_time
      this.article.tags = article.tags
    },
    // 获取文章内容
    getPost() {
      this.acid = this.$route.params.acid
      var data = {
        article_id: this.acid
      }
      getPostById(data).then((res) => {
        this.fillArticle(res.data)
      })
    }
  }
}
</script>

<style>
.article {
  padding: 30px 20px 0px 20px;
}

.article-title {
  font-size: 1.5rem;
  text-align: left;
}
.subnav {
  list-style: none;
  display: flex;
  padding-left: 0px;
  color: #999;
}
.subnav li {
  height: 0.875rem;
  margin-left: 0px;
  margin-right: 15px;
  border-left: 1px solid #e5e5e5;
  padding-left: 15px;
  font-size: 0.65rem;
}
@media screen and (max-width: 650px) {
  .subnav li {
    height: 0.875rem;
    margin-left: 5px;
    margin-right: 3px;
    border-left: 1px solid #e5e5e5;
    padding-left: 15px;
    font-size: 0.55rem;
  }
}
.subnav li a {
  color: #999;
}
.subnav li:nth-child(2):hover {
  color: #666;
}
.subnav li:nth-child(2) a:hover {
  color: #666;
}
.subnav li:hover {
  cursor: pointer;
}
.mdPrinter {
  margin-bottom: 30px;
}
.v-note-wrapper {
  border: 0px !important;
}
.reward {
  font-size: 0.5rem;
  padding: 10px 15px 10px 15px !important;
}
.share {
  display: flex;
  list-style: none;
  font-size: 1rem;
  right: 0;
  justify-content: flex-end;
}
.share-item {
  opacity: 0.8;
  line-height: 30px;
  padding-left: 16px;
}

.statement{
  font-size: .6rem;
  margin: 1vh 0 1vh 0;
  color: rgb(92, 91, 91);
}

.el-popover {
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
