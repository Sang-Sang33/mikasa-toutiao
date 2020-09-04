<template>
  <div id="newsDetail">
    <div class="profilePhoto">
      <img :src="article.n_user.avator" alt />
      <span>
        <em>id:</em>
        {{article.n_user.nickname}}
      </span>
    </div>
    <h3>{{article.title}}</h3>
    <div class="newsContent">
      <span v-html="article.content">{{article.content}}</span>
    </div>
    <div class="pic" v-if="article.img">
      <img :src="article.img" alt />
    </div>
    <div class="created_date">
      <span>
        <em>date:</em>
        {{article.created_at}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    article() {
      return this.$store.state.nidArticle;
    },
  },
};
</script>

<style>
</style>