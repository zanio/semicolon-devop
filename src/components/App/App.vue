<template>
    <div class="App">
      <h2 class="heading nuetral--text pt-5 pb-5">
        Create Project
      </h2>
      <v-form v-model.lazy="$v.$model">

        <v-row  justify-md="space-between">
          <v-col cols="12" md="6">
            <v-text-field
                name="title"
                label="Title of Project"
                outlined
                v-model.lazy="$v.password.$model"
                :error-messages="PasswordErrors"
                @input="$v.password.$touch()"
                type="text"
                class="mb-5-lg"
                required
                height="55px"
            ></v-text-field>

          </v-col>
          <v-col cols="12" md="6">

          <v-text-field
              name="description"
              label="Project description"
              v-model.lazy="$v.confirmPassword.$model"
              :error-messages="ConfirmPasswordErrors"
              outlined
              class="mb-5-lg"
              height="55px"
              @input="$v.confirmPassword.$touch()"
              @keydown.enter="onCreatePassword"
              type="text"
              required
          ></v-text-field>
          </v-col>
        </v-row>

        <v-row  justify-md="space-between">
          <v-col cols="12" md="6">
            <v-text-field
                name="name"
                label="Name of Application"
                outlined
                v-model.lazy="$v.password.$model"
                :error-messages="PasswordErrors"
                @input="$v.password.$touch()"
                type="text"
                class="mb-5-lg"
                required
                height="55px"
            ></v-text-field>

          </v-col>
          <v-col cols="12" md="6">

            <v-text-field
                name="domain"
                label="Domain of the Application"
                v-model.lazy="$v.confirmPassword.$model"
                :error-messages="ConfirmPasswordErrors"
                outlined
                class="mb-5-lg"
                height="55px"
                @input="$v.confirmPassword.$touch()"
                @keydown.enter="onCreatePassword"
                type="text"
                required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row  justify-md="space-between">
          <v-col cols="12" md="6">
            <v-select
                :items="teckStack"
                label="Tech Stack Of Application"
                outlined
                height="55px"
            ></v-select>
          </v-col>

          <v-col cols="12" md="6">
            <v-select
                :items="typeOfApplication"
                label="Type of Application"
                outlined
                height="55px"
            ></v-select>
          </v-col>

        </v-row>


        <v-btn
            @click.prevent="onCreatePassword"
            elevation="0"
            width="100%"
            class="mt-3 mb-3"
            ref="sendReply"
            color="primary"
            :disabled="$v.$anyError"
        >
          Submit
        </v-btn>
      </v-form>

    </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "create-app",
  mixins: [validationMixin],

  props: {},
  data() {
    return {
      password: "",
      confirmPassword: "",
      isValid: true,
      teckStack: [   'VUE', 'REACT', 'PYTHON', 'JAVA', 'NODE'],
      typeOfApplication: [   'MONOLITHIC', 'DECOUPLED'],
    };
  },

  validations: {
    password: { required, minLength: minLength(8) },
    
    confirmPassword: {
      required,
      minLength: minLength(8),
      sameAs: sameAs("password")
    }
  },

  computed: {
    PasswordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
      errors.push("Password must have at least a length of 8");
      !this.$v.password.required && errors.push("Password  is required.");
      return errors;
    },

    ConfirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      console.log(this.$v);
      !this.$v.confirmPassword.minLength &&
      errors.push("Password must have at least a length of 8");
      !this.$v.confirmPassword.required &&
      errors.push("Password  is required.");
      this.password !== this.confirmPassword &&
      errors.push("Password does not match");
      return errors;
    }
  },

  methods: {
    onCreatePassword() {
      this.$v.$touch();
      if (!this.$v.$anyError) {
        console.log("Credential is now valid");
      }
    },
    triggerBtn() {
      this.$refs["sendReply"].click();
    }
  }
};
</script>
