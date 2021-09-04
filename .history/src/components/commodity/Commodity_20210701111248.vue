<template>
  <!-- 详情页第一板块 -->
  <div class="box flex-a">
    <div class="left"></div>
    <div class="center1"></div>
    <div class="right"></div>
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
  width: 1220px;
  height: 560px;
  background: palegreen;
  margin: 20px auto;
  padding: 60px;
}
.left {
  width: 80px;
  height: 440px;
}
.center1 {
  width: 440px;
  height: 440px;
}
.right {
  width: 450px;
  height: 440px;
}
</style>