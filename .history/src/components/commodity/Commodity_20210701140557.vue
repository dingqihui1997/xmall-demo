<template>
  <!-- 详情页第一板块 -->
  <div class="box flex-a">
    <div class="left flex-d">
      <div
        v-for="(item, index) in list.productImageSmall"
        :key="index"
        class="imgsmall flex-ja"
      >
        <img :src="item" class="flex-ja" />
      </div>
    </div>
    <div class="center1">
      <img :src="list.productImageBig" class="img100" />
    </div>
    <div class="right">
      <div>{{ list.productName }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      list: {},
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get(`/api/goods/detail?productId=${this.id}`)
        .then((res) => {
          //   console.log(res);
          this.list = res.data.data.result;
          console.log(this.list);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    // console.log(this.id);
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
  padding-right: 10px;
}
.imgsmall {
  width: 80px;
  height: 80px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
  img {
    width: 54px;
    height: 54px;
  }
}
</style>