<template>
    <div class="create-account-content">    
        <div class="primary">
            <el-card class="box-card create-account-card">
            <div class="text item">
                <el-button ref="createBtn" type="primary" v-on:click="createBtnClick">{{ createBtnMessage }}</el-button>
                <div style="margin-top: 30px; height: 50px; line-height: 50px;" ref="mnemonicDom"></div>
                <div style="height: 50px; line-height: 50px; color: red;" ref="mnemonicTip"></div>
                <el-button class="removeBtn" style="display: block;" ref="removeBtn" type="info" v-on:click="removeBtnClick">清除本地账号</el-button>
            </div>
            </el-card>
        </div> 
    </div>
</template>

<script>

export default {

    data: function () {
        return {
            createBtnMessage: "点击生成助记词",
        }
    },

    created: function () {
        if (!window.localStorage) {
            this.$message({
                message: '您的浏览器不支持LocalStorage，请升级您的浏览器。',
                type: 'error'
            }); 
            
        }
    },

    mounted: function() {
        this.checkAccount();
    },

    methods: {  

        // 检测本地是否有账号
        checkAccount() {
            
        },

        // 生成助记词
        generateMnemonic() {
            
        },

        // 创建按钮绑定点击事件
        createBtnClick() {

        },

        // 移除按钮绑定点击事件
        removeBtnClick() {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .create-account-card {
        width: 75%;
        min-width: 800px;
        margin: 0 auto;
        margin-top: 50px;
        margin-left: 30px;
        min-height: 300px;
    }

    .removeBtn {
        float: right;
        margin-top: 50px;
    }
</style>
