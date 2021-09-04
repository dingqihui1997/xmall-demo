<template>
  <!-- 轮播图 -->
  <div class="box carousel">
    <div class="block">
      <el-carousel trigger="click" height="500px" arrow="never">
        <el-carousel-item v-for="(item, index) in arr" :key="index">
          <div class="small">
            <img :src="item.picUrl" class="imgsrc img100" />
            <img :src="item.picUr2" class="imgsrc img100" />
            <img :src="item.picUr3" class="imgsrc img100" />
          </div>
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
      required: true,
    },
  },
  data() {
    return {
      arr: null,
    };
  },
  components: {},
  methods: {},
  mounted() {
    // console.log(this.list);
    this.arr = this.list.panelContents;
    console.log(this.arr);
    this.arr.map((item) => {
      // item.
    });
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
.small {
  position: relative;
}
.imgsrc {
  position: relative;
  top: 0;
}
</style>