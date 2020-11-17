import Vue from "vue";
import Router from "vue-router";
import programmaticScrolling from "vuetify/es5/services/goto";
import ResponseLayout from "../components/Layout/ResponseLayout";
import MarketingPage from "@/markettingPage/MarketingPage";
import GithubView from "@/views/GithubView";
import RegistrationView from "@/views/RegisterationView";
import {isAuthIdPresent} from "@/common/helper";
import JwtService from "@/common/jwt.service";
import Dashboard from "@/views/dashboard/Dashboard";
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
      component: GithubView,
      meta: { title: "DevSuite - Register With Github",allowAnonymous:true },
      beforeEnter:(to,from,next)=>{
        if (to.meta.allowAnonymous && isAuthIdPresent() && !JwtService.getToken()) {
          next({
            path: '/complete-registration',
            query: {redirect: to.fullPath}
          })
        }
       else if (to.name === 'Register' && JwtService.getToken()) {
          next({path: '/'})
        }
        else  {
          next();
        }
      }

    },
    {
      name: "Register",
      path: "/complete-registration",
      component: RegistrationView,
      meta: { title: "DevSuite - Complete Your Registration With Github",allowAnonymous:false },
      beforeEnter:(to,from,next)=>{
        if (to.name === 'login' && isAuthIdPresent() && JwtService.getToken()) {
            next({path: '/'})
        }
        else if (!to.meta.allowAnonymous && JwtService.getToken()) {
          next({
            path: '/',
            query: {redirect: to.fullPath}
          })
        }
        else if (!to.meta.allowAnonymous && !isAuthIdPresent()) {
            next({
                path: '/register',
                query: {redirect: to.fullPath}
            })
        } else {
          next();
        }
      }

    },
    {
      name: "Semicolon Dev Suite",
      path: "/",
      component: MarketingPage,
      meta: { title: "DevSuite Automate Your Deployment Process",allowAnonymous:true,guest:true }
    },
    {
      name: "response",
      path: "/response",
      component: ResponseLayout,
      meta: { title: "DevSuite - Response",allowAnonymous:true,guest:true }
    },
    {
      name: "Create Password",
      path: "/create-password",
      component: () => import("@/views/CreatePasswordView"),
      meta: { title: "DevSuite - Create A Password",allowAnonymous:true,guest:true }
    },
    {
      name: "Login",
      path: "/login",
      component: () => import("@/views/LoginView"),
      meta: { title: "DevSuite - Login",allowAnonymous:true,guest:true }
    },

    {
      name: "reset-password",
      path: "/reset-password",
      component: () => import("@/views/ResetPasswordView"),
      meta: { title: "DevSuite - Reset Password",allowAnonymous:true,guest:false }
    },
    {
      name:"dashboard index",
      path: '',
      component: () => import('@/views/dashboard/Index'),
      meta: { title: "DevSuite - dashboard",allowAnonymous:false,requiresAuth:true,is_admin:false,guest:false },
      children: [
        // Dashboard
        {
          name: 'Dashboard Home',
          path: '/',
          component: Dashboard,

        },
        // Pages
        // {
        //   name: 'User Profile',
        //   path: 'pages/user',
        //   component: () => import('@/views/dashboard/pages/UserProfile'),
        // },

      ],
    },

  ],
  mode: "history"
});
