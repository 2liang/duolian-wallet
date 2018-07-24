<template>
  <div id="app">
    <el-row>
        <el-col :span="24">
            <div class="grid-content bg-purple-dark">
                <div class="line"></div>
                <el-menu
                    :default-active="$route.path"
                    class="el-menu-demo"
                    mode="horizontal"
                    router
                    background-color="#001529"
                    text-color="#fff"
                    active-text-color="#fff">
                    <li class="el-menu-item" style="color: rgb(255, 255, 255); border-bottom-color: transparent; background-color: rgb(0, 21, 41);" id="logo">多链钱包</li>
                    <el-menu-item index="/"><i class="el-icon-menu" style="margin-bottom: 3px;"></i>首页</el-menu-item>
                    <el-menu-item index="/account/info"><i class="el-icon-view" style="margin-bottom: 3px;"></i>我的账户</el-menu-item>
                    <el-menu-item index="/transaction/receive"><i class="el-icon-success" style="margin-bottom: 3px;"></i>我要交易</el-menu-item>
                </el-menu>
            </div>
        </el-col>
    </el-row>
    <div id="content">
      <router-view/>
    </div>
   
    <div id="footer" style="margin: 50px 0;">
        <span>Wallet@2018 多链科技</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
        activeIndex: '/'
      };
    },
    methods: {
      
    }
}
</script>

<style>
body {
  background: #f1f2f5;
}
a {
  text-decoration: none;
}
body, div, a {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#logo {
  font-size: 18px;
}
#content {
  margin: 0 50px; 
  padding: 20px 0;
  min-height: 400px;
  background: #FFFFFF;
}
</style>
