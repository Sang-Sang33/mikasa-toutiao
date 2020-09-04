<template>
  <div id="content" class>
    <div is="Aside"></div>

    <div is="Main" :arr="arr"></div>

    <div is="RightLogin"></div>
  </div>
</template>

<script>
import Aside from "./aside";
import Main from "./main";
import RightLogin from "./rightLogin";

export default {
  components: { Aside, Main, RightLogin },
  data() {
    return {
      //渲染视图的数据
      arr: [],
      //当前页面下标
      page: 0,
      //全部的头条数
      total_Counts: 0,
      //每页的头条数
      number: 10,
      last_Articles: [],
    };
  },
  computed: {
    //总共的页数
    total_Page: {
      get() {
        return Math.ceil(this.total_Counts / this.number);
      },
      set(newVal) {
        this.total_Counts = newVal;
      },
    },
  },
  methods: {
    //请求数据
    getData() {
      this.$axios
        .get("/getArticles", {
          params: {
            lastid: 0,
            page: this.page,
            number: this.number,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status == 0) {
            this.arr = this.arr.concat(res.data.articles);
            this.total_Counts = res.data.counts;
            if (res.data.current_page == this.total_Page - 1) {
              this.last_Articles = res.data.articles;
            }
            this.page++;
          }
        });
    },
    //触底拼接数组方法
    toTop() {
      //视口的高度
      let h = document.documentElement.clientHeight;
      // 内容的高度
      let sh = document.documentElement.scrollHeight;
      // 设置滚动条贴底
      if (document.documentElement.scrollTop >= sh - h) {
        //当page为最后一页时，重复渲染最后一页的数据
        if (this.page > this.total_Page - 1) {
          this.arr = this.arr.concat(this.last_Articles);
        } else {
          this.getData();
        }
      }
    },
  },
  created() {
    this.getData();
  },
  mounted() {
    // window.addEventListener('scroll', this.toTop, true);
  },
};
</script>

<style>
</style>