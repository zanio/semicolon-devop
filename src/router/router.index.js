import Vue from "vue";
import Router from "vue-router";
import programmaticScrolling from "vuetify/es5/services/goto";
import ResponseLayout from "../components/Layout/ResponseLayout";
import ApplicantLayout from "../components/Layout/ApplicantLayout";

Vue.use(Router);

export default new Router({
  base: "/",
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return programmaticScrolling(scrollTo);
  },
  routes: [
    {
      name: "Register",
      path: "/register",
      component: () => import("@/views/RegisterationView"),
      meta: { title: "DevSuite - Register" }
    },
    {
      name: "response",
      path: "/response",
      component: ResponseLayout,
      meta: { title: "DevSuite - Response" }
    },
    {
      name: "dashboard",
      path: "/dashboard",
      component: ApplicantLayout,
      meta: { title: "DevSuite - dashboard" }
    },
    {
      name: "Create Password",
      path: "/create-password",
      component: () => import("@/views/CreatePasswordView"),
      meta: { title: "DevSuite - Create A Password" }
    },
    {
      name: "Login",
      path: "/login",
      component: () => import("@/views/LoginView"),
      meta: { title: "DevSuite - Login" }
    },

    {
      name: "reset-password",
      path: "/reset-password",
      component: () => import("@/views/ResetPasswordView"),
      meta: { title: "DevSuite - Reset Password" }
    },
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      meta: { title: "DevSuite - dashboard" },
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),

        },
        // Pages
        // {
        //   name: 'User Profile',
        //   path: 'pages/user',
        //   component: () => import('@/views/dashboard/pages/UserProfile'),
        // },
        // {
        //   name: 'Notifications',
        //   path: 'components/notifications',
        //   component: () => import('@/views/dashboard/component/Notifications'),
        // },
        // {
        //   name: 'Icons',
        //   path: 'components/icons',
        //   component: () => import('@/views/dashboard/component/Icons'),
        // },
        // {
        //   name: 'Typography',
        //   path: 'components/typography',
        //   component: () => import('@/views/dashboard/component/Typography'),
        // },
        // Tables
        // {
        //   name: 'Regular Tables',
        //   path: 'tables/regular-tables',
        //   component: () => import('@/views/dashboard/tables/RegularTables'),
        // },
        // Maps
        // {
        //   name: 'Google Maps',
        //   path: 'maps/google-maps',
        //   component: () => import('@/views/dashboard/maps/GoogleMaps'),
        // },
        // Upgrade
        // {
        //   name: 'Upgrade',
        //   path: 'upgrade',
        //   component: () => import('@/views/dashboard/Upgrade'),
        // },
      ],
    },

  ],
  mode: "history"
});
