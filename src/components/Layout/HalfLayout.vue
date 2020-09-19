<template>
  <v-row align="center" justify="center">
    <v-col cols="12"  class="text-center">
      <v-row  align="center" justify="center height-center">
        <slot></slot>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "half-layout",

}
</script>

<style scoped>

</style>