<template>
  <!-- 轮播图 -->
  <div class="box">
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <el-carousel trigger="click" arrow="never">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
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
  height: 500px;
  background-color: aqua;
  margin: 20px auto;
  border-radius: 10px;
}
</style>