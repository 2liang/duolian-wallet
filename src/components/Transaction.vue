<template>
  <el-row>
    <el-col :span="4">
      <div class="grid-content bg-purple">
      <el-menu
        default-active="$route.path"
        class="el-menu-vertical-demo"
        style="width: 200px; min-height: 600px"
        router
        >
        <el-menu-item index="/transaction/send">
          <i class="el-icon-remove"></i>
          <span slot="title">代币转账</span>
        </el-menu-item>
        <el-menu-item index="/transaction/receive">
          <i class="el-icon-circle-plus"></i>
          <span slot="title">代币收款</span>
        </el-menu-item>
        <el-menu-item index="/transaction/record">
          <i class="el-icon-document"></i>
          <span slot="title">交易记录</span>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
