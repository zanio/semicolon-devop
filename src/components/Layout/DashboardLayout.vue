<template>
  <v-container fluid>
    <div class="secondary custom_card layout-position-width-20  layout-position-left">
      <slot></slot>
    </div>
    <div class="layout-position-width-80 layout-position-right">
     <slot name="layoutRight"></slot>
    </div>

  </v-container>
</template>

<script>
export default {
  name: "DashboardLayout"
}
</script>

<style lang="scss" scoped>
.layout-position-width-80{
  width: 80%;
}
.layout-position-width-20{
  width: 20%;
}
.layout-position-left{
  //position: fixed;
  position: absolute;
  left: 0;
  top: 0;
  padding-bottom: 5rem;
  z-index: 99999;
}
.layout-position-right{
  position: absolute;
  left: 20%;
  top: 0;
}
.custom_card{
  height: 100vh;
@media(max-width:1050px) {
  height: 100vh;
}
}
</style>