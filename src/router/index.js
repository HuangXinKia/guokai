import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue"
import Login from "../views/Login.vue"
// import Vue from "vue";

// Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Login,
            name:'login'
        },
        {
            path:'/home',
            component:Home,
            name:'home',
            children:[
                {
                    path:'/about',
                    name:'about',
                    component:()=>import("@/views/Index/Index.vue")
                }
            ]
        }
    ]
})

//全局前置守卫
router.beforeEach((to,from,next) => {
    // // console.log(to);
    // // console.log(from);

    // //判断用户是否登录
    // if(global.token != null && global.token != ""){
    //     next();
    // }else if(to.fullPath.indexOf("/login") != -1){
    //     next();
    // }
    // else{
    //     window.location.href="#/login"; 
    //     location.reload();
    //     // next();
    // }
    next();
    
})

//全局后置路由守卫
router.afterEach((to,from) => {
    
})

//暴露
export default router