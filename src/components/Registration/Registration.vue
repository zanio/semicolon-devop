<template>
  <v-form ref="form" lazy-validation v-model="isValid">
    <h2 class="subtitle-1 accent--text pt-5 pb-5">
      Complete your Registration
    </h2>
    <div class="d-flex justify-space-between mb-3">
      <v-text-field
        name="password"
        label="Choose A password"
        id="firstname"
        v-model="password"
        outlined
        class="mr-2"
        type="password"
        required
        :rules="passwordRules"
      ></v-text-field>
      <v-text-field
          name="confirmPassword"
          label="Re-type Password"
          id="firstname"
          v-model="confirmPassword"
          outlined
          class="mr-2"
          type="password"
          required
          :rules="confirmPasswordRules"
      ></v-text-field>

    </div>


    <vue-tel-input-vuetify
      label="Phone Number"
      required
      name="phone_number"
      outlined
      :rules="regexValidationForNumber"
      mode="international"
      full-width
      class="custom-input-style"

      v-model="phone"
      @input="countrySelected"
      @country-changed="countrySelected"
    >
      <span>
        <v-icon>{{ mdiChevronDown }}</v-icon>
      </span>
    </vue-tel-input-vuetify>




    <v-btn
      @click.prevent="onSignup"
      elevation="0"
      width="100%"
      class="mt-3 mb-3"
      color="primary"
      :disabled="!isValid || isLoading"
    >
      Complete Registration
    </v-btn>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
import { mdiChevronDown } from "@mdi/js";

export default {
  name: "registration",
  props: {},
  data() {
    return {

      phone: null,
      countryCode: null,
      errorPhoneNumber: "",
      isValid: true,
      password: null,
      confirmPassword: null,
      passwordRules: [
        (value) => !!value || 'Please type password.',
        (value) => (value && value.length >= 6) || 'minimum 6 characters',
      ],
      regexValidationForNumber: [
        (value) => !!value || 'Please type Phone Number.',
        (value) => (value && value.length >= 11) || 'minimum 11 characters',
      ],
      confirmPasswordRules: [
        (value) => !!value || 'type confirm password',
        (value) =>
            value === this.password || 'The password confirmation does not match.',
      ],
      mdiChevronDown
    };
  },

  mounted() {
    console.log(this.user, "From the registration section");
  },
  computed: {

    ...mapState({
      errors: (state) => state.auth.errors,
      isLoading: (state) => state.auth.isLoading,
      user:(state) => state.github.user
    }),
    getUser(){
      return JSON.parse(localStorage.getItem("user"));
    }
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
      console.log(val && val !== this.select && this.querySelections(val));
    }
  },
  methods: {
    countrySelected(val) {
      this.countryCode = val.dialCode;
    },
    onSignup() {
      if (this.$refs.form.validate()) {
        const authId = JSON.parse(localStorage.getItem("authId"));
        const payload = {
          authId: authId,
          avatar_url: this.user.avatar_url || this.getUser().avatar_url,
          phoneNumber: this.phone || this.getUser().avatar_url,
          login: this.user.login || this.getUser().login,
          name: this.user.name || this.getUser().name,
        }
        console.log(payload)
        this.$store
          .dispatch("auth/setRegister", payload)
          .then(() => this.$router.push({ name: "dashboard" }));
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-form {

  .custom-input-style.vue-tel-input-vuetify ::v-deep.country-code .v-input .v-input__control {
    //background: green ;
    //border: solid 1rem purple;
  }

  .custom-input-style.vue-tel-input-vuetify ::v-deep>.v-input fieldset legend {
    display: none    //border: solid 1rem purple;
  }
}
</style>
