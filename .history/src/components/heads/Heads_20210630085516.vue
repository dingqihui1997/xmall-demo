<template>
  <div>
    <div class="box">
      <div class="middle flex-sb">
        <div class="flex-a"><img src="../../assets/logo2.png" alt="" /></div>
        <div class="flex-a">
          <div>
            <el-input placeholder="请输入内容" v-model="input">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
          <div class="all">全部商品</div>
          <div class="donation">捐赠</div>
          <div class="one"></div>
          <div class="me"><i class="el-icon-user-solid"></i></div>
          <div class="shopping"><i class="iconfont icon-che1"></i></div>
          <div></div>
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
    return {
      input: "",
    };
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
  color: #fff;
}
.el-input {
  height: 40px;
  width: 310px;
  margin-right: 25px;
}
.all {
  margin: 0 25px;
}
.one {
  width: 1px;
  height: 15px;
  background: #373737;
  margin: 0 25px;
}
.donation,
.shopping,
me {
  margin: 0 25px;
}
</style>