<template>
  <dashboard-layout>
    <v-card elevation="0" >
      <logo logo-background-color="secondary"></logo>
      <v-divider  class="mx-3 line-rule-green no-border"/>
      <naigation-top-left-item></naigation-top-left-item>
    </v-card>
    <v-divider class="mt-2 black-bg"/>
    <expanded-menu-layout
        :handle-display-expanded-menu="handleDisplayExpandedMenu" :icon-name="iconName"
        :show-expanded-menu="showExpandedMenu"></expanded-menu-layout>
    <template v-slot:layoutRight>
      <v-sheet>
        <template>
          <div>
            <v-app-bar elevation="0" color="white" dark height="80px" id="app-bar-select" :style="{position:'relative',zIndex:'40'}">
              <v-row>
                <v-col class="d-flex" sm="12" lg="3" md="2" cols="4">
                  <reeach-vue-select
                      :option="options" v-model="selected" :placement="placement"></reeach-vue-select>
                </v-col>
              </v-row>

            </v-app-bar>
            <v-app-bar elevation="0" color="light-blue" dark height="80px">
              <second-layout-app-bar></second-layout-app-bar>
            </v-app-bar>
            <v-row>
              <v-col sm="12" cols="12"/>
              <slot></slot>
            </v-row>
          </div>
        </template>

      </v-sheet>
    </template>
  </dashboard-layout>

</template>

<script>
import Logo from "@/components/Logo/Logo";
import ReeachVueSelect from "@/components/CustomSelect/ReeachVueSelect";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import ExpandedMenuLayout from "@/components/Navigation/ExpandedMenuLayout";
import NaigationTopLeftItem from "@/components/Navigation/NaigationTopLeftItem";
import SecondLayoutAppBar from "@/components/Navigation/SecondLayoutAppBar";
export default {


  data () {
    return {

      options: [{
        value:1,
        label:'Always open for Business',
        iconClass:"always-open-for-business"
      },
        {
        value:2,
        label:'Open for business',
        iconClass:"open-for-business"

      },

        {
          label: "Closed for business",
          value: 4,
          iconClass:"closed-for-business"

        },
        {
          label: "set business hours",
          value: 3,
          iconClass:"set-business-hrs"


        }
      ],
      selected:{
        value:1,
        label:'Always open for Business',
        iconClass:"always-open-for-business"

      },
      placement:'up',
      showExpandedMenu: false,
      iconName:'$.arrow_down',

    }
  },
  components:{
    Logo,
    ReeachVueSelect,
    DashboardLayout,
    ExpandedMenuLayout,
    NaigationTopLeftItem,
    SecondLayoutAppBar
  },
  created() {
  },
  methods:{
    handleDisplayExpandedMenu:function handleDisplayExpandedMenu() {
      this.showExpandedMenu = !this.showExpandedMenu
      if(this.showExpandedMenu){
        this.iconName = '$.expanded_less_arrow'

      } else{
        this.iconName = '$.arrow_down'

      }
    }
  },


}
</script>



<style lang="scss" scoped>

.line-rule-green{
  border-bottom: 1px solid #03DAC5 !important;
  background: transparent !important;
  height: 0px !important;
}
.no-border{
  border: none;
}

::v-deep.v-divider.black-bg{
  border-bottom: 1px solid #000000 !important;
}

.v-card{
  border-radius: 0 !important;
}
</style>