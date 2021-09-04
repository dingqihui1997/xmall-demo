<template>
  <!-- 热门商品 -->
  <div>
    <div class="box marginauto">
      <div class="bottom flex-ja">
        <div class="flex-ja"></div>
        <div class="flex-ja title"></div>
        <div class="flex-ja pay"></div>
        <div>
          <div class="flex-ja money"></div>
          <!-- 按钮，hover时出现 -->
          <div class="flex-ja text">
            <!-- 按钮 -->
            <button class="one">查看详情</button>
            <button class="two">加入购物车</button>
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
          :total="400"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    // list: {
    //   type: Object,
    //   required: true, //必传项
    // },
  },
  data() {
    return {
      arr: null,
      currentPage: "",
    };
  },
  components: {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  margin-top: 20px;
  width: 1220px;
  // height: 490px;
  border-radius: 8px;
  overflow: hidden;
}
.bottom {
  // height: 430px;
  background: #fff;
  overflow: hidden;
}
.but {
  padding-top: 50px;
}
.but:hover {
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
</style>