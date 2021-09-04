<template>
  <!-- 导航栏 -->
  <div class="box flex-ja">
    <div class="middle flex-a">
      <div class="flex-a" v-for="(item, index) in list" :key="index">
        <div>·</div>
        <div class="text" @click="goto">首页</div>
      </div>
      <!-- <div>·</div>
      <div class="text" @click="all">全部</div>
      <div>·</div>
      <div class="text">捐赠名单</div>
      <div>·</div>
      <div class="text">后台管理系统</div>
      <div>·</div>
      <div class="text">XMal小程序</div>
      <div>·</div>
      <div class="text">XPay支付系统</div>
      <div>·</div>
      <div class="text">XBoot开发平台</div>
      <div>·</div>
      <div class="text">宣传视频</div>
      <div>·</div>
      <div class="text">Github</div>
      <div>·</div>
      <div class="text">商用授权</div> -->
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
        { title: "全部", url: "whole" },
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
    goto() {
      this.$router.push("");
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