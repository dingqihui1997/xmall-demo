<template>
  <!-- 详情页 -->
  <div>
    <commodity :list="list"></commodity>
    <product v-if="detail" :detail="detail"></product>
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
      list: null,
      detail: "",
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
          this.list = res.data.data.result;
          this.detail = this.list.detail; //产品信息详情
          console.log(this.list);
          this.productImageBig = this.list.productImageBig; //设置初始值的大图
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    this.id = Number(this.$route.query.id); //点击详情页传递过来的id
    this.getData();
    // console.log(this.id);
  },

  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>