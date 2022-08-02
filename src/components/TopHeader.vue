<template>
  <div id="top">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        16620783229<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
}
#top {
  width: 100%;
  height: 50px;
  /* background: wheat; */
  background: #7f71e7;
  text-align: right;
  padding: 15px;
}

  .el-dropdown-link {
    cursor: pointer;
    color: white;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>