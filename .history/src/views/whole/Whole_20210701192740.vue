<template>
  <!-- 热门商品 -->
  <div>
    <div class="box marginauto">
      <div class="bottom flex-ja">
        <div class="flex-wrap">
          <div v-for="(item, index) in list" :key="index" class="hei item">
            <div class="flex-ja">
              <img :src="item.productImageBig" alt="" />
            </div>
            <div class="flex-ja title">{{ item.productName }}</div>
            <div class="flex-ja pay">{{ item.subTitle }}</div>
            <div>
              <div class="flex-ja money">
                {{ `￥` + item.salePrice.toFixed(2) }}
              </div>
              <!-- 按钮，hover时出现 -->
              <div class="flex-ja text">
                <!-- 按钮 -->
                <button class="one">查看详情</button>
                <button class="two">加入购物车</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--分页  -->
      <div class="block">
        <span class="demonstration">完整功能</span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[8, 20, 40, 80]"
          :page-size="8"
          layout="total, sizes, prev, pager, next, jumper"
          :total="30"
        >
        </el-pagination>
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
      arr: null,
      currentPage: 1, //当前的页数
      page: 8, //当前每页的条数
      list: [],
    };
  },
  components: {},
  methods: {
    handleSizeChange(val) {
      this.page = val;
      this.getData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getData();
    },
    getData() {
      // page: 8, //当前每页的条数
      axios
        .get(`api/goods/allGoods?page=${this.currentPage}&size=${this.page}`)
        .then((res) => {
          console.log(res);
          this.list = res.data.data;
          this.total = res.data.total;
          console.log(this.list);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    this.getData();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  margin-top: 20px;
  width: 1220px;
  border-radius: 8px;
  overflow: hidden;
}
.bottom {
  background: #fff;
  overflow: hidden;
}
.but {
  padding-top: 50px;
}
.hei:hover {
  cursor: pointer;

  .money {
    display: none;
  }
  .text {
    display: block;
  }
}
img {
  width: 206px;
  height: 206px;
}
.title {
  margin: 10px;
}
.pay {
  color: #d0d0d0;
  margin-bottom: 20px;
  font-size: 12px;
}
.money {
  color: #d44d44;
  font-weight: 700;
  height: 30px;
}
button {
  width: 98px;
  height: 30px;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
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
.text {
  display: none;
  width: 100%;
  text-align: center;
  height: 30px;
}
.hei {
  width: 25%;
  height: 430px;
}
</style>