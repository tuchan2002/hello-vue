import { createRouter, createWebHistory } from "vue-router"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import NotFound from './pages/NotFound'
import ChannelsPage from './pages/ChannelsPage'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/products', component: ProductsPage },
  { path: '/products/:id', component: ProductDetailPage },
  { path: '/channels', component: ChannelsPage },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, 
})

export default router