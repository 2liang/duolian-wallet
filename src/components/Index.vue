<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>账户信息</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </el-card>

</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .text {
        font-size: 14px;
        text-align: left;
    }
    .item {
        margin-bottom: 18px;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    .box-card {
        margin: 20px 50px;
        width: 480px;
    }
</style>
