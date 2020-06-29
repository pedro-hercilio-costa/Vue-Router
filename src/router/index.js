import Vue from 'vue'
import VueRouter from 'vue-router'
import Consulta from '../views/Consulta.vue'
import Informacoes from '../views/Informacoes.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/consulta',
    name: 'Consulta',
    component: Consulta
}, {
    path: '/informacoes',
    name: 'Informacoes',
    component: Informacoes
}, ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router