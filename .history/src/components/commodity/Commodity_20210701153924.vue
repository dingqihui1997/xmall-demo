<template>
  <!-- 详情页第一板块 -->
  <div class="box flex-a">
    <div class="left flex-d">
      <div
        v-for="(item, index) in list.productImageSmall"
        :key="index"
        class="imgsmall flex-ja"
        @click="click(item, index)"
        :class="{ frame: num === index }"
      >
        <!-- 动态绑定class增加边框，点击那个下标时就添加类名 -->
        <img :src="item" class="flex-ja" />
      </div>
    </div>
    <div class="center1">
      <img :src="productImageBig" class="img100" />
    </div>
    <!-- 右边板块 -->
    <div class="right">
      <div class="Name">{{ list.productName }}</div>
      <div class="flex-sb">
        <div class="subTitle">{{ list.subTitle }}</div>
        <div class="num">{{ `￥` + Number(list.salePrice).toFixed(2) }}</div>
      </div>
      <div class="quantity flex">
        <div>数量</div>
        <div class="Symbol" @click="reduce" :class="{ hover: sum === 1 }">
          -
        </div>
        <div><input type="text" v-model="sum" /></div>
        <div class="Symbol jia" @click="add">+</div>
      </div>
      <div class="but">
        <button class="one">加入购物车</button>
        <button class="two">现在购买</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      list: {},
      num: 0,
      productImageBig: "",
      sum: 1, //数量的初始值
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get(`/api/goods/detail?productId=${this.id}`)
        .then((res) => {
          //   console.log(res);
          this.list = res.data.data.result;
          console.log(this.list);
          this.productImageBig = this.list.productImageBig; //设置初始值的大图
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
    click(item, index) {
      this.num = index; //点击那个就让那个添加边框
      this.productImageBig = item; //点击旁边的小图的时候，就让把这个路径赋值给大图
    },
    reduce() {
      if (this.sum > 1) {
        this.sum--;
      } else {
        this.$message.warning("该宝贝不能减少了哦");
      }
    },
    add() {
      console.log(this.list.limitNum);
      if (this.sum < this.list.limitNum) {
        this.sum++;
      }
    },
  },
  mounted() {
    // console.log(this.id);
    this.getData();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 1220px;
  height: 560px;
  background: palegreen;
  margin: 20px auto;
  padding: 60px;
  overflow: hidden;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 3px 8px -6px rgb(0 0 0 / 10%);
}
.left {
  width: 80px;
  height: 440px;
}
.center1 {
  width: 440px;
  height: 440px;
}
.right {
  width: 450px;
  height: 440px;
  padding-left: 10px;
  .Name {
    font-size: 24px;
    margin-bottom: 15px;
  }
  .subTitle {
    color: #bdbdbd;
    font-size: 14px;
  }
  .num {
    color: #d44d44;
    font-size: 24px;
    font-weight: 700;
  }
  .quantity {
    margin-top: 10px;
    padding: 29px 0 8px 10px;
    border-top: 1px solid #ebebeb;
  }
  .but {
    border-top: 1px solid #ebebeb;
    padding: 30px 0 0 10px;
  }
}
button {
  width: 145px;
  height: 50px;
  line-height: 48px;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  outline: none;
}
.one {
  border: 1px solid #5c81e3;
  background-color: #678ee7;
}
.two {
  border: 1px solid #e1e1e1;
  color: #646464;
  background-color: #f9f9f9;
  margin-left: 10px;
}
.imgsmall {
  width: 80px;
  height: 80px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  img {
    width: 54px;
    height: 54px;
  }
}
.Symbol {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  font-size: 20px;
  font-weight: 700;
  color: #666;
  text-align: center;
  line-height: 25px;
  box-shadow: 0 0 5px #999;
  margin-left: 20px;
  margin-right: 20px;
}
.jia {
  background: #ebebeb;
}
.frame {
  border: 3px solid #ccc;
}
.hover {
  &:hover {
    cursor: not-allowed;
  }
}
input {
  width: 25px;
  height: 18px;
  border: none;
  text-align: center;
}
</style>