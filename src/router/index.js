import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardHomeView from '../dashboard/TheHome.vue';
import TheCategories from '../dashboard/TheCategories.vue';
import EditCategory from '../dashboard/EditCategory.vue';
import TheBlogs from '../dashboard/TheBlogs.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard_home',
      component: DashboardHomeView,
      children: [
        {
          path: 'categories',
          component: TheCategories,
        },
        {
          path: 'editCategory/:id',
          name: 'editCategory',
          component: EditCategory,
          props: true
        },
        {
          path: 'blogs',
          component: TheBlogs,
        },
      ]
    }
  ]
})

export default router
