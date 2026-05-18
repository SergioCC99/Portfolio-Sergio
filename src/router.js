import { createRouter, createWebHistory} from "vue-router"
import Home from "./components/home.vue"
//import About from "./components/about.vue"
import Project from "./components/project.vue"


const routes = [
    {path: "/", component: Home},
    {path: "/home", component: Home},
    //{path: "/about", component: About},
    {path: "/project/:id", component: Project}
]


const router = createRouter({
    history: createWebHistory(),
    routes,

        scrollBehavior() {
        return {
        top: 0,
        behavior: 'smooth'

            }
        }
    }
)

export default router