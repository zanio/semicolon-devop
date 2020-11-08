<template>
  <v-form>
    <v-alert v-if="isLoading" outlined color="accent">
      Authenticating your github profile...</v-alert>
    <div class="d-flex justify-content-center mb-3">
      <github></github>
    </div>
    <v-btn
        @click.prevent="connect"
        elevation="0"
        width="100%"
        class="mt-3 mb-3"
        color="primary"
        :disabled="isLoading"
    >
      Continue with Github
    </v-btn>
  </v-form>
</template>

<script>
import {mdiChevronDown} from "@mdi/js";
import Github from "@/components/github_signup/Github";
import Pizzly from "pizzly-js";
import {mapState} from "vuex";


export default {
  name: "registration",
  components: {Github},
  props: {},
  data() {
    return {
      authId: null,
      loading: false,
      mdiChevronDown
    };
  },

  mounted: function () {
    // Here we initialize Pizzly.
    this.$pizzly = new Pizzly({
      host: "semicolon-dev-oauth2.herokuapp.com",
      publishableKey: "aaaaaaaaaa"
    });
  },
  computed: {
    ...mapState({
      errors: (state) => state.github.errors,
      isLoading: (state) => state.github.isLoading,
      user: (state) => state.github.user
    })
  },
  methods: {
    connect: function () {
      // Here, we create a new method
      // that "connect" a user to GitHub
      this.$pizzly
          .integration('github')
          .connect()
          .then(this.connectSuccess)
          .catch(this.connectError);
    },
    connectSuccess: function (data) {
      // On success, we update the user object
      this.authId = data.authId;
      // this.user = data;
      const authId = JSON.stringify(this.authId)
      localStorage.setItem("authId", authId);
      this.fetchUserProfile()
    },
    connectError: function (err) {
      console.error(err.message)
      this.loading = false;
    },
    fetchUserProfile: function () {
      this.$store.dispatch("github/startLoading")
      this.$pizzly
          .integration("github")
          .auth(this.authId)
          .get("/user")
          .then(response => response.json())
          .then((data) => {
            this.$store.dispatch("github/endLoading")
            this.$store.dispatch("github/setData", data)
            const user = JSON.stringify(data)
            localStorage.setItem("user", user);
            this.$router.push("/complete-registration", function () {
              console.log("the push was successfully. welcome!")
            })
          })
          .catch(this.fetchError)
    },
    fetchError: function (err) {
      console.error(err)
      this.$store.dispatch("github/endLoading")
      this.$store.dispatch("github/setError", err)

      // alert("Error fetching request from proxy server.")
    }
  }
};
</script>

<style lang="scss" scoped>
.v-form {
  .country-code {
    padding: 0;
    margin: 0;
  }

  .vue-tel-input-vuetify .country-code {
    background: green;
    border: solid 1rem purple;
  }
}
</style>
