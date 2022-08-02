<template>
  <div>
    <el-container>
      <el-header>
        <TopHeaderVue></TopHeaderVue>
    </el-header>
    </el-container>
    <el-container>
       <el-aside>
        <LeftNav></LeftNav>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
    </el-container>
  </div>
</template>

<script>
import TopHeaderVue from "@/components/TopHeader.vue";
import LeftNavVue from "@/components/LeftNav.vue";
import TopHeader from "@/components/TopHeader.vue";
import LeftNav from "@/components/LeftNav.vue";
export default {
  name:'Home',
  components: {
    TopHeaderVue,
    LeftNavVue,
    TopHeader,
    LeftNav
},
};
</script>

<style>
.el-header,.el-main{
    padding: 0px;
}

.el-aside{
  width: 200px !important;
  /* 100vh相当于100% ，但是vh即使没有内容也可以撑开【对视窗的百分百】 */
  height: 100vh;
  background: white;
}
</style>