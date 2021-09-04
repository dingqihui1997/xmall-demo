<template>
  <!-- 导航栏 -->
  <div class="box flex-ja">
    <div class="middle flex-a">
      <div>·</div>
      <div class="text">首页</div>
      <div>·</div>
      <div>全部</div>
      <div>·</div>
      <div>捐赠名单</div>
      <div>·</div>
      <div>后台管理系统</div>
      <div>·</div>
      <div>XMal小程序</div>
      <div>·</div>
      <div>XPay支付系统</div>
      <div>·</div>
      <div>XBoot开发平台</div>
      <div>·</div>
      <div>宣传视频</div>
      <div>·</div>
      <div>Github</div>
      <div>·</div>
      <div>商用授权</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 100%;
  height: 90px;
}
.middle {
  width: 1220px;
  height: 100%;
  background-color: aqua;
  color: #666666;
}
.middle div {
  margin: 0 5px;
}
.middle div:hover {
  color: #56a3ef;
}
</style>