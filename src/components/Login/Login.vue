<template>
  <v-form ref="login" lazy-validation v-model="isValid">
    <h2 class="heading nuetral--text pt-5 pb-5">
      Welcome Back
    </h2>

    <v-text-field
      name="username"
      label="Github Username "
      v-model="username"
      class="mb-3"
      type="text"
      required
      :rules="[(v) => !!v || 'Github Username is required']"
    ></v-text-field>

    <v-text-field
      name="password"
      label="password"
      v-model="password"
      class="mb-3"
      type="password"
      aria-autocomplete="both"
      required
      :rules="[(v) => !!v || 'Please type a valid password']"
    ></v-text-field>

    <v-btn
      @click.prevent="onLogin"
      @keyup.prevent.enter="onLogin"
      elevation="0"
      width="100%"
      class="mt-3 mb-3"
      color="primary"
      :disabled="!isValid || isLoading"
    >
      Login
    </v-btn>
    <v-container>
      <v-layout row justify-space-between>
        <v-flex>
          <router-link to="/create-password">
            <div class="text-center">
              <a
                class="primary--text d-inline-block font-weight-medium darken-3 text-decoration-none"
                >Forgot Your Password</a
              >
            </div>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "login-form",
  props: {},
  data() {
    return {
      password: "",
      username: "",
      isValid: true
    };
  },
  computed: {

    ...mapState({
      isLoading: (state) => state.auth.isLoading,
    })
  },
  methods: {
    getUser(){
      this.localStorageUser = JSON.parse(localStorage.getItem("user"));
    },
    onLogin() {
      if (this.$refs["login"].validate()) {
        this.$store
          .dispatch("auth/SetLogin", {
            username: this.username,
            password: this.password
          })
          .then(() => this.$router.push({ name: "Dashboard Home" }));
      }
    }
  }
};
</script>
