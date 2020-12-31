export const routes = [
    {
        path: '/main',
        name: 'Main',
        component: r => require(['../views/Main.vue'], r)
    },
    {
        path: '/login',
        name: 'Login',
        component: r => require(['../views/Login.vue'], r)
    },
    {
        path: '/adminHome',
        name: 'AdminHome',
        component: r => require(['../views/AdminHome.vue'], r)
    },
    {
        path: '/orderInfo',
        name: 'OrderInfo',
        component: r => require(['../views/OrderInfo.vue'], r)
    },
    {
        path: '/orderQuery',
        name: 'OrderQuery',
        component: r => require(['../views/OrderQuery.vue'], r)
    },
    {
        path: '/editOrder',
        name: 'EditOrder',
        component: r => require(['../views/EditOrder.vue'], r)
    },
    {
        path: '*',
        redirect: {
            name: 'Main'
        }
    }
]