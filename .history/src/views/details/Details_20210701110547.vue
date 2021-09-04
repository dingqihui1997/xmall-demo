<template>
  <!-- 详情页 -->
  <div>111</div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      id: "",
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.id = this.$route.query.id;
    console.log(this.id);
  },

  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>