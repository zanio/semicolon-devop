<template>
  <v-app>
<!--    <v-layout row v-if="errors">-->
<!--      <v-flex v-if="errors.message" xs12>-->
        <alert btnClor="secondary" dismissible v-if="errors && errors.message" v-text="errors.message" color="error"/>
<!--      </v-flex>-->
<!--    </v-layout>-->
    <router-view />
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Alert from "./components/Alert/Alert";

export default {
  name: "App",
  data() {
    return { errorMessage: null, textError: null };
  },
  components: {
    Alert
  },
  watch: {
    errors: function (currentError, previousError) {
      if (
        currentError &&
        currentError.response &&
        currentError !== previousError
      ) {
        this.textError = currentError.response.data.error;
      }
    }
  },
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
      isLoading: (state) => state.auth.isLoading
    })
  }
};
</script>
