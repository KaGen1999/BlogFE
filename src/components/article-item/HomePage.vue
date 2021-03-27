<template>
  <div class="home-page">
    <ul>
      <li class="article-item">
        <div class="summary">
          <div class="summary-detail">
            <h2 @click="jump">{{title}}</h2>
            <p>{{summary}}</p>
          </div>
          <div class="summary-info">
            <a class="label">{{articleCategory}}</a>
            <time>{{articleDate}}</time>
          </div>
        </div>
        <div class="cover">
          <img
            :src="cover">
        </div>
      </li>
      <li class="article-item">
        <div class="summary">
          <div class="summary-detail">
            <h2>{{title}}</h2>
            <p>{{summary}}</p>
          </div>
          <div class="summary-info">
            <a class="label">{{articleCategory}}</a>
            <time>{{articleDate}}</time>
          </div>
        </div>
        <div class="cover">
          <img
            :src="cover">
        </div>
      </li>
      <li class="article-item">
        <div class="summary">
          <div class="summary-detail">
            <h2>{{title}}</h2>
            <p>{{summary}}</p>
          </div>
          <div class="summary-info">
            <a class="label">{{articleCategory}}</a>
            <time>{{articleDate}}</time>
          </div>
        </div>
        <div class="cover">
          <img
            :src="cover">
        </div>
      </li>
      <li class="article-item">
        <div class="summary">
          <div class="summary-detail">
            <h2>{{title}}</h2>
            <p>{{summary}}</p>
          </div>
          <div class="summary-info">
            <a class="label">{{articleCategory}}</a>
            <time>{{articleDate}}</time>
          </div>
        </div>
        <div class="cover">
          <img
            :src="cover">
        </div>
      </li>
      <li class="article-item">
        <div class="summary">
          <div class="summary-detail">
            <h2>{{title}}</h2>
            <p>{{summary}}</p>
          </div>
          <div class="summary-info">
            <a class="label">{{articleCategory}}</a>
            <time>{{articleDate}}</time>
          </div>
        </div>
        <div class="cover">
          <img
            :src="cover">
        </div>
      </li>
      <li class="article-item" @click="jump">
        <div class="summary">
          <div class="summary-detail">
            <h2>{{title}}</h2>
            <p>{{summary}}</p>
          </div>
          <div class="summary-info">
            <a class="label">{{articleCategory}}</a>
            <time>{{articleDate}}</time>
          </div>
        </div>
        <div class="cover">
          <img
            :src="cover">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  data() {
    return {
      title: '这是文章标题',
      summary: '往事，我这个人比较喜欢念旧吧，人事物。不知不觉，2019年马上就要过去了。',
      articleCategory: '乱七八糟',
      articleDate: '2021-01-12',
      cover: require('../../../static/test2.jpg'),
    }
  },
  methods: {
    jump() {
      this.$router.push({path:'/article/123',})
    }
  }
}
</script>

<style>
.home-page ul {
  padding-left: 40px;
  padding-right: 30px;
  list-style: none;
}

.article-item {
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 25px 0 25px 0;
}

.summary {
  width: calc(100% * 2 / 3.001);
  text-align: justify;
}

.summary-detail h2 {
  font-size: 0.95rem;
  font-weight: normal;
  color: #333;
}

.summary-detail p {
  margin: 10px 0;
  letter-spacing: 2px;
  font-size: .675rem;
  color: #666;
  line-height: 1.5;
}

.cover {
  width: calc(100% * 1 / 3.001);
  padding: 0px 30px 0px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cover img {
  width: 100%;
}

.label {
  background: transparent;
  color: #888;
  font-size: .4rem;
  letter-spacing: 1px;
  line-height: 1;
}

.summary-info time {
  font-size: .4rem;
  letter-spacing: 2px;
  color: #888;
}
</style>
