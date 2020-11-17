import Vue from "vue";
import './plugins/base'
import './plugins/chartist'
import i18n from './i18n'
import App from "./App.vue";
import router from "./router/router.index";
import store from "./store";
import VueTelInputVuetify from "vue-tel-input-vuetify/lib";
import AlertComponent from "./components/Alert/Alert";
import "./registerServiceWorker";

// import { CHECK_AUTH } from "./store/actions.type";
import ApiService from "./common/api.service";
import DateFilter from "./common/date.filter";
import ErrorFilter from "./common/error.filter";
import vuetify from "./plugins/vuetify";
import JwtService from "@/common/jwt.service";

import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

Vue.filter("date", DateFilter);
Vue.filter("error", ErrorFilter);
Vue.use(VueTelInputVuetify, {
    vuetify,
});


Vue.component("app-alert", AlertComponent);

Vue.use(Vuelidate);

ApiService.init();


function routeMetaLogic(to, next) {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.metaTags);
    // const previousNearestWithMeta = from.matched
    //     .slice()
    //     .reverse()
    //     .find((r) => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(
        document.querySelectorAll("[data-vue-router-controlled]")
    ).map((el) => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags
        .map((tagDef) => {
            const tag = document.createElement("meta");

            Object.keys(tagDef).forEach((key) => {
                tag.setAttribute(key, tagDef[key]);
            });

            // We use this to track which meta tags we create, so we don't interfere with other ones.
            tag.setAttribute("data-vue-router-controlled", "");

            return tag;
        })
        // Add the meta tags to the document head.
        .forEach((tag) => document.head.appendChild(tag));


}

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        // routeMetaLogic(to , next)
        if (!JwtService.getToken()) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JwtService.getToken();
            if(to.matched.some(record => record.meta.is_admin)) {
                if(user.is_admin == 1){
                    next()
                }
                else{
                    next({ name: 'Dashboard Home'})
                }
            }else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        // routeMetaLogic(to,next)
        if(!JwtService.getToken()){
            next()
        }
        else{
            next({ name: 'Dashboard Home'})
        }
    }else {
        // routeMetaLogic(to, next)
        next()
    }
})

export default router

new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: (h) => h(App),
}).$mount("#app");
