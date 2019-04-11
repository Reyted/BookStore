import Vue from 'vue'
import Router from 'vue-router'
import AddGoods from '@/components/AddGoods'
import CheckInventory from '@/components/CheckInventory'
import Business from '@/components/Business'
import ServerClient from '@/components/ServerClient'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 添加商品的路由
      path: '/AddGoods',
      name: 'AddGoods',
      component: AddGoods
    },
    {
      // 查看所有库存路由
      path: '/CheckInventory',
      name: 'CheckInventory',
      component: CheckInventory
    },
    {
      // 查看营业状况路由
      path: '/Business',
      name: 'Business',
      component: Business
    },
    {
    	path:'/ServerClient',
    	name:'ServerClient',
    	component:ServerClient
    }
  ]
})
