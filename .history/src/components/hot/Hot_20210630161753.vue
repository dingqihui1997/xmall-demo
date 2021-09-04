<template>
  <div>
    <div class="box marginauto">
      <div class="top flex-a">热门商品</div>
      <div class="bottom"></div>
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
  width: 1220px;
  height: 490px;
  background: aqua;
  border-radius: 8px 8px 0 0;
}
.top {
  height: 60px;
  background: linear-gradient(#fbfbfb, #ececec);
  box-shadow: 0 1px 7px rgb(0 0 0 / 6%);
}
.bottom {
  height: 430px;
}
</style>