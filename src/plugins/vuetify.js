import light from "./theme";
import values from "@/plugins/custom_icon";
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

