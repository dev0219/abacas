import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: "/",
      redirect: "/begin",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/begin",
          name: "begin",
          component: () => import("@/view/pages/inicio/begin.vue")
        },
        {
          path: "/begin/:id",
          name: "beginItem",
          component: () => import("@/view/pages/inicio/learnabacus.vue")
        },
        {
          path: "/begin/acumula/:id",
          name: "acumula",
          component: () => import("@/view/pages/inicio/acmula.vue")
        },
        {
          path: "/begin/:id/:abacus_id",
          name: "beginItem",
          component: () => import("@/view/pages/inicio/abacusstep.vue")
        }
      ]
    },
    {
      path: "/error",
      name: "error",
      component: () => import("@/view/pages/error/Error.vue"),
      children: [
        {
          path: "error-1",
          name: "error-1",
          component: () => import("@/view/pages/error/Error-1.vue")
        },
        {
          path: "error-2",
          name: "error-2",
          component: () => import("@/view/pages/error/Error-2.vue")
        },
        {
          path: "error-3",
          name: "error-3",
          component: () => import("@/view/pages/error/Error-3.vue")
        },
        {
          path: "error-4",
          name: "error-4",
          component: () => import("@/view/pages/error/Error-4.vue")
        },
        {
          path: "error-5",
          name: "error-5",
          component: () => import("@/view/pages/error/Error-5.vue")
        },
        {
          path: "error-6",
          name: "error-6",
          component: () => import("@/view/pages/error/Error-6.vue")
        }
      ]
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/view/pages/auth/Login")
    },
    {
      name: "register",
      path: "/register",
      component: () => import("@/view/pages/auth/Register")
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue")
    },
    {
      // the 404 route, when none of the above matches
      path: "/landing",
      name: "landing",
      component: () => import("@/view/pages/landing/landing.vue")
    }
  ]
});
