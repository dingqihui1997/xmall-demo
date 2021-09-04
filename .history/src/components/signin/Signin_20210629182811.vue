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
        <div><span>注册XMall账号</span>|<span>忘记密码 ?</span></div>
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
      <div class="flex-ja">
        <!-- 动态绑定属性，最先是true禁用状态 -->
        <button class="bott">返回</button>
      </div>
      <div class="flex-ja">
        <div class="bottom flex">
          其他账号登录：<i class="iconfont icon-weixin"></i
          ><i class="iconfont icon-weibo1193419easyiconnet"></i>
          <i class="iconfont icon-qq1"></i>
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
      flag: true, //最开始禁用按钮
      checked: false,
    };
  },
  components: {},
  methods: {
    goto() {
      if (this.password !== "" && this.username !== "") {
        axios
          .post("/api/users/login", {
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            console.log(res);
            if (res.data.code === 500) {
              this.$message.error(res.data.msg);
            } else if (res.data.code === 200) {
              this.$message({ message: "登录成功", type: "success" });
            }
          })
          .catch((err) => {
            console.log("请求失败", err);
          });
      } else {
        this.$message.error("信息填写有误请检查");
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
      if (this.username !== "" && val !== "") {
        this.flag = false;
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
  margin-bottom: 15px;
}
button {
  margin: 10px 0px;
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
  text-align: center;
}
.choice {
  margin-top: 20px;
  margin-bottom: 15px;
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
  padding-top: 20px;
  margin-top: 10px;
}
.bott {
  background: #fff;
  border: 1px solid #e1e1e1;
  color: #000;
}
.back {
  background-color: #5f86e4; //当按钮不禁用的时候就显示蓝色，然后添加hover的效果
  &:hover {
    background-color: #6283cf;
  }
}
i {
  color: #939494;
  margin-left: 10px;
  position: relative;
  top: 5px;
}
</style>