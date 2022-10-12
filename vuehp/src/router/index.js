import {createRouter,createWebHashHistory} from "vue-router"


const hello = () => import("../components/HelloWorld")
const login = () => import("../components/LoginAccount")
const home = () => import("../components/FaunHome")

const routes = [
    {
        path:"/",
        name:"hello",
        component:hello
    },
    {
        path: "/login",
        name: "login",
        component:login
    },
    {
        path: "/home",
        name: "home",
        component:home
    }
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
})

