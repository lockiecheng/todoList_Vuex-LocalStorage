<template>
  <div class="input-container">
    <el-input placeholder="请输入待办事项" v-model="input" clearable>
    </el-input>
    <el-button type="primary" @click="addTodo">添加事项</el-button>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    // input值不可以为空
    addTodo() {
      this.$store.dispatch("addTodo", this.input);
      this.input = "";
    },
  },
};
</script>

<style scoped>
/* header样式 */
.input-container {
  width: 600px;
  display: flex;
}

.el-button {
  width: 100px;
  margin-left: 15px;
}
</style>