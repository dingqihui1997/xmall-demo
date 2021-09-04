<template>
  <!-- 导航栏 -->
  <div class="box flex-ja">
    <div class="middle flex-a">
      <div>·</div>
      <div class="text">首页</div>
      <div>·</div>
      <div class="text">全部</div>
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
      <div class="text">商用授权</div>
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
  box-shadow: 0 0 2px #666;
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