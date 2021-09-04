<template>
  <div class="one">
    <div class="box center flex-d login">
      <div class="top flex-ja">注册 XMall账号</div>
      <!-- 账号 -->
      <div class="flex-ja name">
        <input type="text" placeholder="账号" class="ipt" v-model="username" />
      </div>
      <!-- 密码 -->
      <div class="flex-ja name">
        <input
          type="password"
          placeholder="密码"
          class="ipt"
          v-model="password"
        />
      </div>
      <!-- 重复密码 -->
      <div class="flex-ja name">
        <input
          type="password"
          placeholder="重复密码"
          class="ipt"
          v-model="Repeat"
        />
      </div>
      <div class="flex-ja choice">
        <input type="checkbox" class="inpt" v-model="checked" />
        我已阅读并同意遵守<span>&nbsp;法律声明&nbsp;</span>和<span
          >&nbsp;隐私条款</span
        >
      </div>
      <div class="flex-ja regis">
        <!-- 动态绑定属性，最先是true禁用状态 -->
        <button
          :disabled="flag"
          :class="{ back: flag === false }"
          @click="goto"
        >
          注册
        </button>
      </div>
      <div class="flex-ja">
        <div class="bottom flex-ja">
          如果您已拥有XMall账号，则可在此<span>&nbsp;登陆</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      username: "",
      password: "",
      Repeat: "",
      flag: true, //最开始禁用按钮
      checked: false,
    };
  },
  components: {},
  methods: {
    goto() {
      if (this.password === this.Repeat && this.checked === true) {
        axios
          .post("api/users/register", {
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log("请求失败", err);
          });
      } else if (this.checked === false) {
        this.$message.error("您未勾选同意我们的相关注册协议");
      }
    },
  },
  mounted() {},
  computed: {},
  watch: {
    username(val) {
      this.username = val;
    },
    password(val) {
      this.password = val;
    },
    Repeat(val) {
      //账号和密码都输入了内容后，然后就不禁用button
      this.Repeat = val;
      if (this.username !== "" && this.password !== "" && val !== "") {
        this.flag = false;
        console.log(val);
      } else {
        this.flag = true;
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.box {
  width: 450px;
  height: 530px;
  border: 1px solid #dadada;
  border-radius: 10px;
  box-shadow: 0 0 10px #dadada;
}
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
  padding-left: 10px;
  font-size: 16px;
}
button {
  margin: 25px 0px;
  width: 370px;
  height: 50px;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 20px;
  background-color: #b2b2b2; //最开始设置成灰色背景颜色
}

span {
  color: #527bd9;
}

.name {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
.choice {
  margin-top: 20px;
}
.regis {
  padding: 0 35px;
}
.inpt {
  margin-right: 10px;
}
.bottom {
  width: 370px;
  border-top: 1px #e0e0df solid;
  padding: 30px 0;
}
.back {
  background-color: #5f86e4; //当按钮不禁用的时候就显示蓝色，然后添加hover的效果
  &:hover {
    background-color: #6283cf;
  }
}
</style>