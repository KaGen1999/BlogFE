import Vue from 'vue'
import Router from 'vue-router'
import articleContent from '@/components/content'
import HomePage from '@/components/article-item/HomePage'
import Article from '@/components/article-item/Article'
import MainPage from '@/MainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      components: {
        content:HomePage
      },
      meta: {title: '首页'},
    },
    {
      path: '/article/:acid',
      name: 'articleContent',
      components: {
        content:Article
      },
    },
  ]
})
