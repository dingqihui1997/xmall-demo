<template>
  <!-- 导航栏 -->
  <div class="box flex-ja">
    <div class="middle flex-a">
      <div class="flex-a" v-for="(item, index) in list" :key="index">
        <div>·</div>
        <div class="text" @click="goto(item)">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      list: [
        { title: "首页", url: "/" },
        { title: "全部", url: "/whole" },
        { title: "捐赠名单", url: "/" },
        { title: "后台管理系统", url: "/" },
        { title: "XPay支付系统", url: "/" },
        { title: "XMal小程序", url: "/" },
        { title: "XBoot开发平台", url: "/" },
        { title: "宣传视频", url: "/" },
        { title: "商用授权", url: "/" },
      ],
    };
  },
  components: {},
  methods: {
    goto(item) {
      //判断是否是当前的页面
      if (this.$route.path !== item.url) {
        this.$router.push(item.url);
      }
    },
    all() {
      this.$router.push("/whole");
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 100%;
  height: 90px;
  box-shadow: 0 0 5px #e6e6e6;
  background-color: #fff;
}
.middle {
  width: 1220px;
  height: 100%;
  //   background-color: aqua;
  color: #666666;
}
.middle div {
  margin: 0 5px;
}
.text:hover {
  color: #56a3ef;
}
</style>