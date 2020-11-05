<template>
  <layout>
    <template v-slot:left>
      <github></github>
    </template>

    <template v-slot:right>
      <registration-image></registration-image>
    </template>

    <template v-slot:button>
      <layout-button btn-link="/login">Login</layout-button>
      <!--      <my-input></my-input>-->
    </template>
  </layout>
</template>

<script>
import Layout from "../components/Layout/AuthLayout";
import RegistrationImage from "../components/Registration/RegistrationImage";
import LayoutButton from "../components/LayoutButton/LayoutButton";
import Github from "../components/Registration/GuthubRegistration";

export default {
  name: "GithubView",
  components: {
    Layout,
    RegistrationImage,
    LayoutButton,
    Github,
  }
}
</script>

<style scoped>

</style>