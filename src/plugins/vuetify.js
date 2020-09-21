// src/plugins/vuetify.js

// import Vue from "vue";
// import Vuetify from "vuetify/lib";
import light from "./theme";
// import { preset } from "vue-cli-plugin-vuetify-preset-crane/preset";
// import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import values from "@/plugins/custom_icon";
//
// Vue.use(Vuetify);
//
// const options = {
//   theme: {
//     themes: { light }
//   },
//   breakpoint: { scrollbarWidth: 12 },
//   icons: {
//     iconfont: "mdi", // default - only for display purposes
//     values
//   }
// };
//
// export default new Vuetify({
//   // The provided global preset is first merged with defaults
//   preset,
//   // User options are then merged, overwriting defaults and the global preset
//   ...options
// });


import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from '@/i18n'
import '@/sass/overrides.sass'

Vue.use(Vuetify)

const theme = {
  primary: '#4caf50',
  secondary: '#ecc986',
  accent: '#9C27b0',
  info: '#00CAE3',
}

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  theme: {
    themes: {
      dark: theme,
      light: light,
    },
  },
  icons: {
    iconfont: "mdi", // default - only for display purposes
    values
  }
})

