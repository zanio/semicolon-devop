<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    mobile-break-point="960"
    color="secondary"
    app
    width="270"
    v-bind="$attrs"
  >

    <template v-slot:img="props">
      <v-img
        v-bind="props"
      />
    </template>


    <router-link :style="{cursor:'pointer'}" tag="div" to="/">  <v-list
      dense
      nav
    >
     <v-list-item >
        <v-list-item-avatar
          class="align-self-center"
          color="white"
          contain
        >
          <v-img
            :src="require('../../../../assets/logo.svg')"

          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            class="display-2"
            v-text="'DS SUITE'"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list></router-link>


    <v-list
      expand
      nav
    >
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

      <template v-for="(item, i) in computedItems">

        <base-item
          v-if="!item.children"
          :key="`item-${i}`"
          :item="item"
        />
      </template>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>

  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'DashboardCoreDrawer',

    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {
          icon: 'mdi-view-dashboard-outline',
          title: 'Dashboard',
          to: '/',
        },
        {
          icon: 'mdi-application-cog',
          title: 'Projects',
          to: '/projects',
        },

        {
          title: 'Documentation',
          icon: 'mdi-text-box-multiple-outline',
          to: '/documentations',
        },
        {
          title: 'Settings',
          icon: 'mdi-cog-outline',
          to: '/settings',
        },
        {
          title: 'Sign Out',
          icon: 'mdi-logout-variant',
          to: '/components/icons',
        }
      ],
    }),

    computed: {
      ...mapState({
        barColor: (state) => state.app.barColor,
        barImage: (state) => state.app.barImage
      }),
      drawer: {
        get () {
          return this.$store.state.app.drawer
        },
        set (val) {
          this.$store.dispatch("app/setDrawer",val);
        },
      },
      computedItems () {
        return this.items.map(this.mapItem)
      },
      profile () {
        return {
          avatar: true,
          title: this.$t('avatar'),
        }
      },
    },

    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title),
        }
      },
    },
  }
</script>

<style lang="sass">
  @import 'node_modules/vuetify/src/styles/tools/rtl'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
