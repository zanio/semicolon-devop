<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <dashboard-core-view />

    <dashboard-core-settings />
  </v-app>
</template>

<script>
import AppBar from "@/views/dashboard/components/core/AppBar";
import Drawer from "@/views/dashboard/components/core/Drawer";
import View from "@/views/dashboard/components/core/View";
import Settings from "@/views/dashboard/components/core/Settings";
  export default {
    name: 'DashboardIndex',

    components: {
      DashboardCoreAppBar:AppBar,
      DashboardCoreDrawer: Drawer,
      DashboardCoreSettings: Settings,
      DashboardCoreView: View
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
