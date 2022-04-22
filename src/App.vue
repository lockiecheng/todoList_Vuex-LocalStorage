<template>
  <div class="main">
    <!-- 头部区域 -->
    <Header></Header>
    <!-- List事项区域 -->
    <List></List>
    <!-- Footer事项区域 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },
};
</script>

<style>
/* base样式 */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main {
  width: 600px;
  margin: 100px auto;
}
</style>