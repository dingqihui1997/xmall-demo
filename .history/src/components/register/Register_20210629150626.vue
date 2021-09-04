<template>
  <div class="one">
    <div class="box center flex-d login">
      <div class="top flex-ja">注册 XMall账号</div>
      <div class="flex-ja name">
        <input type="text" placeholder="账号" class="ipt" />
      </div>
      <div class="flex-ja name">
        <input type="password" placeholder="密码" class="ipt" />
      </div>
      <div class="flex-ja name">
        <input type="password" placeholder="重复密码" class="ipt" />
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
  width: 450px;
  height: 570px;
  border: 1px solid #dadada;
  border-radius: 10px;
  box-shadow: 0 0 10px #dadada;
}
body,
.one {
  height: 100vh;
}
.top {
  height: 60px;
  border-bottom: 1px solid #e7e7e7;
  font-size: 20px;
  color: #66696a;
  font-weight: 700;
  margin-bottom: 35px;
}
.ipt {
  width: 370px;
  height: 50px;
  outline: none;
  border: 1px #dcdcdc solid;
  border-radius: 5px;
}
.name {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
</style>