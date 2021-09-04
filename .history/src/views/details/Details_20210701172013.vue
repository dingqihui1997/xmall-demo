<template>
  <!-- 详情页 -->
  <div>
    <commodity v-if="id" :id="id"></commodity>
    <product></product>
  </div>
</template>

<script>
import Commodity from "../../components/commodity/Commodity.vue";
import Product from "../../components/product/Product.vue";
export default {
  name: "",
  props: {},
  data() {
    return {
      id: null,
      list: {},
    };
  },
  components: { Commodity, Product },
  methods: {
    getData() {
      axios
        .get(`/api/goods/detail?productId=${this.id}`)
        .then((res) => {
          //   console.log(res);
          this.list = res.data.data.result;
          console.log(this.list);
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