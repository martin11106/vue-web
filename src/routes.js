import VueRoute from 'vue-router'
import Vue from 'vue'
import respuesta from './components/buscadorComponent.vue'
Vue.use(VueRoute)
const router= new VueRoute({
    routes:[
        {
            path:"/welcome",
            component: respuesta
        }
    ]
})
export default router