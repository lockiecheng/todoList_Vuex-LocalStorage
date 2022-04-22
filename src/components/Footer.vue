<template>
  <div class="footer-container">
    <span>共{{ totalItem }}条数据</span>
    <div class="footer-btn">
      <el-button
        v-for="(btnItem, index) in buttonType"
        :key="index"
        :type="btnItem.btnStyle"
        @click="toggleList(index)"
        >{{ btnItem.title }}</el-button
      >
      <el-link :underline="false" @click="delDoneList">清除已完成</el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    totalItem() {
      return this.$store.state.itemData.length;
    },
    buttonType() {
      return this.$store.state.buttonType;
    },
  },
  methods: {
    toggleList(value) {
      // 这里改变一下itemList即可
      this.$store.commit("TOGGLELIST", value);
    },
    delDoneList() {
      // 清楚已完成的事项，则将state.itemData数据遍历，清除后，保存localstorage即可
      this.$store.dispatch("delDoneList");
    },
  },
};
</script>

<style scoped>
/* Footer区域样式 */

.footer-container {
  height: 60px;
  display: flex;
}

.footer-container span {
  line-height: 36px;
  margin-left: 16px;
  color: #606266;
}

.footer-btn {
  margin-left: 56px;
}

.footer-btn .el-button {
  height: 36px;
  margin-left: 10px;
  width: 80px;
}

.footer-btn .el-link {
  margin-left: 100px;
}
</style>