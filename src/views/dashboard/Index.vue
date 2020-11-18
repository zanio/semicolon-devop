<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <dashboard-core-view />

  </v-app>
</template>

<script>
import AppBar from "@/views/dashboard/components/core/AppBar";
import Drawer from "@/views/dashboard/components/core/Drawer";
import View from "@/views/dashboard/components/core/View";
  export default {
    name: 'DashboardIndex',

    components: {
      DashboardCoreAppBar:AppBar,
      DashboardCoreDrawer: Drawer,
      DashboardCoreView: View
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
