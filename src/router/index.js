import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PostDetails from '../views/PostDetails.vue'
import CreatePost from '../views/CreatePost.vue'
import PostsByTag from '../views/PostsByTag.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'PostDetails',
    component: PostDetails,
    props: true
  },
  {
    path: '/CreatePost',
    name: 'CreatePost',
    component: CreatePost,
  },
  {
    path: '/tags/:tag',
    name: 'PostsByTag',
    component: PostsByTag,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
