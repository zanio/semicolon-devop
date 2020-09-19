<template>
  <router-link :to="btnLink">
    <v-btn elevation="0" large class="d-inline-block" color="primary">
      <slot></slot>
    </v-btn>
  </router-link>
</template>

<script>
export default {
  name: "custom-button",
  props: {
    btnLink: {
      type: String
    }
  },
  methods:{
    dummy(){
      console.log(this.$data)
    }
  }
};
</script>
