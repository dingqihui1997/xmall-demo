<template>
  <!-- 轮播图 -->
  <div class="box carousel">
    <div class="block">
      <el-carousel trigger="click" height="500px" arrow="never">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    list: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.list);
  },
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