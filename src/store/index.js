import Vue from "vue";
import Vuex from "vuex";

import auth from "./AuthModule/auth.module";
import app from "./AppModule/app.module";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    auth,
    app
  }
});
