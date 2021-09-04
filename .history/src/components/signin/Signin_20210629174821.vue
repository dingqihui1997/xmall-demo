<template>
  <!-- 登录页面 -->
  <div class="one">
    <div class="box center flex-d login">
      <div class="top">
        <div class="flex-ja"><img src="../../assets/log1.png" alt="" /></div>
        <div class="flex-ja">使用 XMall 账号 登录官网</div>
      </div>
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
      <div class="flex-sb choice">
        <div>
          <input type="checkbox" class="inpt" v-model="checked" /> 记住密码
        </div>
        <div><span>注册XMall账号|</span><span>忘记密码 ?</span></div>
      </div>
      <div class="flex-ja regis">
        <!-- 动态绑定属性，最先是true禁用状态 -->
        <button
          :disabled="flag"
          :class="{ back: flag === false }"
          @click="goto"
        >
          登录
        </button>
      </div>
      <div class="flex-ja regis">
        <!-- 动态绑定属性，最先是true禁用状态 -->
        <button
          :disabled="flag"
          :class="{ back: flag === false }"
          @click="goto"
        >
          返回
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
      if (this.checked === false) {
        this.$message.error("您未勾选同意我们的相关注册协议");
      }
      if (this.password !== this.Repeat) {
        this.$message.error("两次输入的密码不相同");
      }
      if (this.password === this.Repeat && this.checked === true) {
        axios
          .post("/api/users/register", {
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log("请求失败", err);
          });
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
        // console.log(val);
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
  height: 630px;
  border: 1px solid #dadada;
  border-radius: 10px;
  box-shadow: 0 0 10px #dadada;
}
.one {
  height: 100vh;
}
.top {
  height: 200px;
  font-size: 20px;
  //   margin-bottom: 35px;
  padding-top: 25px;
}
.top img {
  margin-bottom: 10px;
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
  width: 370px;
  position: relative;
  left: 40px;
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