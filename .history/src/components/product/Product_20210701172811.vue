<template>
  <!-- 详情页产品信息 -->
  <div class="box">
    <div class="top"></div>
    <div>{{ detail }}</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    detail: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.detail);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 1220px;
  margin: 0 auto;
}
.top {
  height: 60px;
  padding-left: 25px;
  border-bottom: 1px solid #d4d4d4;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 1px 7px rgb(0 0 0 / 6%);
  background: #f3f3f3;
  background: linear-gradient(#fbfbfb, #ececec);
}
</style>