<template>
  <div>
    <div class="box">
      <div class="middle flex-sb">
        <div class="flex-a"><img src="../../assets/logo2.png" alt="" /></div>
        <div class="flex-a">
          <div>
            <el-input placeholder="请输入内容" v-model="input4">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  height: 100px;
  width: 100%;
  background-color: #010101;
}
.middle {
  height: 100%;
  width: 1220px;
  margin: 0 auto;
}
.el-icon-search {
  height: 40px;
  width: 310px;
}
</style>