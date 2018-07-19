<template>
  <el-row>
    <el-col :span="4">
      <div class="grid-content bg-purple account-menu">
        <el-menu
          default-active="$route.path"
          class="el-menu-vertical-demo"
          style="width: 200px; min-height: 600px"
          router
          >
          <el-menu-item index="/account/info">
            <i class="el-icon-document"></i>
            <span slot="title">账户信息</span>
          </el-menu-item>
          <el-menu-item index="/account/create">
            <i class="el-icon-plus"></i>
            <span slot="title">创建账户</span>
          </el-menu-item>
          <el-menu-item index="/account/export">
            <i class="el-icon-download"></i>
            <span slot="title">导出账户</span>
          </el-menu-item>
          <el-menu-item index="/account/import">
            <i class="el-icon-upload"></i>
            <span slot="title">导入账户</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-col>
    <el-col :span="20">
      <div class="grid-content bg-purple-light">
        <router-view/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {

  created: function () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .account-menu {
      margin-top: 30px;
    }
</style>
