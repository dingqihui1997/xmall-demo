<template>
  <!-- 详情页 -->
  <div>
    <commodity v-if="id" :id="id"></commodity>
    <product v-if="list"></product>
  </div>
</template>

<script>
import axios from "axios";
import Commodity from "../../components/commodity/Commodity.vue";
import Product from "../../components/product/Product.vue";
export default {
  name: "",
  props: {},
  data() {
    return {
      id: null,
      list: {},
      detail: null,
    };
  },
  components: { Commodity, Product },
  methods: {
    //传值给子组件
    getData() {
      axios
        .get(`/api/goods/detail?productId=${this.id}`)
        .then((res) => {
          //   console.log(res);
          this.list = resthis.list.data.data.result;
          this.detail = this.list.detail;
          console.log(this.detail);
          this.productImageBig = this.list.productImageBig; //设置初始值的大图
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    this.id = Number(this.$route.query.id);
    this.getData();
    // console.log(this.id);
  },

  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>