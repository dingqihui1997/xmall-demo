<template>
  <div>
    <carousel v-if="list" :list="list[0]"></carousel>
    <new-products v-if="list" :list="list[1]"></new-products>
    <hot v-if="list" :list="list[2]"></hot>
    <official v-if="list" :list="list[3]"></official>
    <official v-if="list" :list="list[4]"></official>
    <official v-if="list" :list="list[5]"></official>
    <new-products v-if="list" :list="list[6]"></new-products>
  </div>
</template>

<script>
import axios from "axios";
import Carousel from "../components/carousel/Carousel .vue";
import NewProducts from "../components/newProducts/NewProducts.vue";
import Hot from "../components/hot/Hot.vue";
import Official from "../components/official/Official.vue";
export default {
  name: "",
  props: {},
  data() {
    return {
      list: null,
    };
  },
  components: { Carousel, NewProducts, Hot, Official },
  methods: {
    getData() {
      axios
        .get("api/goods/home")
        .then((res) => {
          // console.log(res);
          this.list = res.data.data;
          console.log(this.list);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    this.getData();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>