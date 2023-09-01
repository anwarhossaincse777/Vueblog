import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogPage from "@/views/pages/BlogPage.vue";
import SingleBlogPage from "@/views/pages/SingleBlogPage.vue";
import PostsPage from "@/views/pages/PostsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },


    // {
    //   path: '/posts',
    //   name: 'posts',
    //   component: Posts,
    // },



    {
      path: '/category/:id',
      name: 'blogPage',
      component: BlogPage,
      props:true,
    },

    {
      path: '/category/:id',
      name: 'PostsPage',
      component: PostsPage,
      props:true,
    },

    {
      path: '/post/:id',
      name: 'SingleBlogPage',
      component: SingleBlogPage,
      props:true,
    },
  ]
})

export default router
