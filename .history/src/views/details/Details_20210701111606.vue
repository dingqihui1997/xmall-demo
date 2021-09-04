<template>
  <!-- 详情页 -->
  <div>
    <commodity :id="id"></commodity>
  </div>
</template>

<script>
import Commodity from "../../components/commodity/Commodity.vue";
export default {
  name: "",
  props: {},
  data() {
    return {
      id: "",
    };
  },
  components: { Commodity },
  methods: {},
  mounted() {
    this.id = this.$route.query.id;
    // console.log(this.id);
  },

  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>