<template>
  <!-- 官方精选 -->
  <div>
    <div class="box marginauto">
      <div class="Category flex-a">官方精选</div>
      <div class="foot">
        <!-- 先设置所有的盒子宽高都一样 -->
        <!-- 第一张下标0时，就增加类名，宽高变大 -->
        <div
          v-for="(item, index) in arr"
          :key="index"
          :class="{ flex2: index === 0, item: index !== 0 }"
          class="quarter flex-dji"
          @click="see(item)"
        >
          <div :class="{ move: index === 0 }"></div>
          <img :src="item.picUrl" />
          <!-- 其余的就添加div添加数据 -->
          <div v-if="index !== 0" class="title mat20">
            {{ item.productName }}
          </div>
          <div v-if="index !== 0" class="subTitle mat10">
            {{ item.subTitle }}
          </div>
          <div v-if="index !== 0" class="Price mat20">
            {{ `￥` + item.salePrice.toFixed(2) }}
          </div>
          <div v-if="index !== 0" class="key flex-ja">
            <button class="one" @click.stop="see(item)">查看详情</button>
            <button class="two">加入购物车</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      arr: null,
    };
  },
  components: {},
  methods: {
    see(item) {
      console.log(item.productId);
      this.$router.push({
        name: "Details",
        query: {
          id: item.productId,
        },
      });
    },
  },
  mounted() {
    this.arr = this.list.panelContents;
    // console.log(this.arr);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 1220px;
  height: 920px;
  background-color: #fff;
  margin-top: 30px;
  border-radius: 8px;
  overflow: hidden;
}
.foot {
  height: 860px;
  display: flex;
  flex-wrap: wrap; //子元素换行排列
  overflow: hidden;
}
.quarter {
  height: 50%;
  width: 25%;
  img {
    height: 206px;
    width: 206px;
  }
  &:hover {
    cursor: pointer;
    .key {
      display: block;
    }
    .Price {
      display: none;
    }
    // animation: move 0.5s linear forwards;
  }
}
.key {
  display: none;
  height: 30px;
  margin-top: 20px;
}

.flex2 {
  width: 50%;
  height: 50%;
  // position: relative;
  img {
    width: 609px;
    height: 430px;
  }
}
.Price {
  color: #d44d44;
  font-weight: 700;
  height: 30px;
}
.subTitle {
  color: #d0d0d0;
}
.one {
  border: 1px solid #e1e1e1;
  color: #646464;
  background-color: #f9f9f9;
  margin-right: 10px;
}
.two {
  border: 1px solid #5c81e3;
  color: #fff;
  background-color: #678ee7;
}
button {
  width: 98px;
  height: 30px;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
}
</style>