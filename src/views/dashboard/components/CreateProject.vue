<template>
<v-container>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <app/>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import App from "@/components/App/App";
export default {
  name: "CreateProject",
  components:{
    App
  }
}
</script>

<style scoped>

</style>