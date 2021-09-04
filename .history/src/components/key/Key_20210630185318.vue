<template>
  <div>
    <div class="flex-ja text">
      <button class="one">查看详情</button>
      <button class="two">加入购物车</button>
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
.one {
  border: 1px solid #e1e1e1;
  color: #646464;
  background-color: #f9f9f9;
  margin-right: 10px;
}
.two {
  border: 1px solid #5c81e3;
  color: #fff;
  background-color: #678ee7;
}
.text {
  //   display: none;
  width: 100%;
  text-align: center;
  height: 30px;
}
button {
  width: 98px;
  height: 30px;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
</style>