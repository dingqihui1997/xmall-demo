<template>
  <!-- 详情页第一板块 -->
  <div class="box flex-a">
    <div class="left"></div>
    <div class="center1"></div>
    <div class="right"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("api/goods/detail?productId=this.id")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    console.log(this.id);
    this.getData();
  },
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