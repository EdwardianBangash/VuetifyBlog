import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardHomeView from '../dashboard/TheHome.vue';
import TheCategories from '../dashboard/TheCategories.vue';
import EditCategory from '../dashboard/EditCategory.vue';
import AddCategory from '../dashboard/AddCategory.vue';
import TheBlogs from '../dashboard/TheBlogs.vue';
import EditBlog from '../dashboard/EditBlog.vue';
import AddBlog from '../dashboard/AddBlog.vue';

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
          path: 'addCategory',
          name: 'addCategory',
          component: AddCategory,
          props: true
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
        {
          path: 'addBlog',
          name: 'addBlog',
          component: AddBlog,
          props: true
        },
        {
          path: 'editBlog/:id',
          name: 'editBlog',
          component: EditBlog,
          props: true
        },
      ]
    }
  ]
})

export default router
