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
    };
  },
  components: { Commodity, Product },
  methods: {},
  mounted() {
    this.id = Number(this.$route.query.id);
    // console.log(this.id);
  },

  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>