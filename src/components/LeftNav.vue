<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo dz"
      @open="handleOpen"
      @close="handleClose">
      
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">
          <router-link to="/about">
            首页
          </router-link>
        </span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>学员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">登记学员</el-menu-item>
          <el-menu-item index="2-2">学员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document-copy"></i>
          <span>客户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">登记客户</el-menu-item>
          <el-menu-item index="3-2">客户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-set-up"></i>
          <span>合作管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">添加合作</el-menu-item>
          <el-menu-item index="4-2">合作列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-set-up"></i>
          <span>服务器管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">添加服务器</el-menu-item>
          <el-menu-item index="5-2">服务器状态</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-money"></i>
          <span>财务管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">分成设置</el-menu-item>
          <el-menu-item index="6-2">分成列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


<style>
.dz{
    
    width: 200px;
}

li{
  text-align: left;
}

/* .el-menu{

  height: 100vh;
} */
</style>