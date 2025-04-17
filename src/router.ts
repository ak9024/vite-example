import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export enum RouteNames {
  TODO = 'TODO',
  DONE = 'DONE',
  NOT_FOUND = 'NOT_FOUND'
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: RouteNames.TODO }
  },
  {
    path: '/todo',
    name: RouteNames.TODO,
    component: () => import('./views/Todo.vue')
  },
  {
    path: '/done',
    name: RouteNames.DONE,
    component: () => import('./views/Done.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: RouteNames.NOT_FOUND,
    component: () => import('./views/NotFound.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})