import { createApp, h } from 'vue'
import store from './store'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

const app  = createApp({
    render: () => h(App)
});

const Home = () => import('@/App')
const Posts = () => import('@/components/AppContainer')

const routes = [
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path:'/posts',
        name:'Posts',
        component: Posts
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(router);
app.use(store);
app.mount('#app');
