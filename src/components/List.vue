<template>
  <ul class="list-container">
    <!-- 向子组件传递 -->
    <Item v-for="item in itemData" :key="item.id" :item="item"></Item>
  </ul>
</template>

<script>
import Item from "./Item";
export default {
  name: "List",
  components: {
    Item,
  },
  // 使用computed可以让vuex中的数据是响应式
  computed: {
    itemData() {
      return this.$store.state.itemData
    }
  },
};
</script>

<style>
/* list样式 */
.list-container {
  border: 1px solid #ccc;
  list-style: none;
  margin: 15px auto;
}
</style>