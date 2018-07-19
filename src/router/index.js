import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/Index'
import Account from '@/components/Account'
import Transaction from '@/components/Transaction'
import CreateAccount from '@/components/CreateAccount'
import ExportAccount from '@/components/ExportAccount'
import ImportAccount from '@/components/ImportAccount'
import AccountInfo from '@/components/AccountInfo'
import TokenReceive from '@/components/TokenReceive'
import TokenTransfer from '@/components/TokenTransfer'
import TransactionRecord from '@/components/TransactionRecord'

Vue.use(Router)

export default new Router({
  routes: [
    { // 首页
      path: '/',
      name: 'Index',
      component: IndexPage
    },
    { // 账户
      path: '/account',
      name: 'Account',
      component: Account,
      children: [
        { // 创建账户
          path: 'create',
          name: 'CreateAccount',
          component: CreateAccount
        },
        { // 导出账户
          path: 'export',
          name: 'ExportAccount',
          component: ExportAccount
        },
        { // 导入账户
          path: 'import',
          name: 'ImportAccount',
          component: ImportAccount
        },
        { // 导出账户
          path: 'info',
          name: 'AccountInfo',
          component: AccountInfo
        }
      ]
    },
    { // 交易
      path: '/transaction',
      name: 'Transaction',
      component: Transaction,
      children: [
        { // 接收
          path: 'receive',
          name: 'TokenReceive',
          component: TokenReceive
        },
        { // 发送
          path: 'send',
          name: 'TokenTransfer',
          component: TokenTransfer
        },
        { // 交易记录
          path: 'record',
          name: 'TransactionRecord',
          component: TransactionRecord
        }
      ]
    }
  ]
})
