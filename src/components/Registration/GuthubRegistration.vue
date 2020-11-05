<template>
  <v-form>
    <div class="d-flex justify-content-center mb-3">
      <github></github>
    </div>
    <v-btn
      @click.prevent="connect"
      elevation="0"
      width="100%"
      class="mt-3 mb-3"
      color="primary"
    >
      Continue with Github
    </v-btn>
  </v-form>
</template>

<script>
import { mdiChevronDown } from "@mdi/js";
import Github from "@/components/github_signup/Github";
import Pizzly from "pizzly-js";

export default {
  name: "registration",
  components: {Github},
  props: {},
  data() {
    return {
      user: null,
      repositories: [],
      mdiChevronDown
    };
  },

  mounted: function() {
    // Here we initialize Pizzly.
    this.$pizzly = new Pizzly({
      host: "semicolon-dev-oauth2.herokuapp.com",
      publishableKey:"aaaaaaaaaa"
    });
  },
  methods: {
    connect: function() {
      // Here, we create a new method
      // that "connect" a user to GitHub
      this.$pizzly
          .integration('github')
          .connect()
          .then(this.connectSuccess)
          .catch(this.connectError);
    },
    connectSuccess: function(data) {
      // On success, we update the user object
      console.log(data)
      this.user = data.authId;
      this.fetchStarringRepositories()
    },
    connectError: function (err) {
      console.error(err)
      alert("Something went wrong. Look at the logs.")
    },
    fetchStarringRepositories: function() {
      this.$pizzly
          .integration("github")
          .auth(this.user)
          .get("/user")
          .then(response => response.json())
          .then((data) => { this.repositories = data })
          .catch(this.fetchError)
    },
    fetchError: function (err) {
      console.error(err)
      alert("Error fetching request from proxy server.")
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
