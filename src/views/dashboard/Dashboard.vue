<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <div class="d-md-flex justify-space-between mt-5">
      <div class="mb-sm-6">
        <h1> Welcome Back, John Doe</h1>
        <p><span class="badge-warning px-1 py-1  font-weight-regular">Last Login</span> : <span class="font-weight-light text--secondary lighten-1">08 October 2020 @3:45pm WAT</span></p>
      </div>
    <v-btn to="/projects/create-project" elevation="0" ripple="false" color="primary"  >
      Create Project
    </v-btn>
    </div>

    <v-row>
      <v-col
        cols="12"
        lg="4"
      >
        <v-card tile outlined>
          <div class="d-md-flex justify-space-between">
            <v-card-title>Ecommerce Project </v-card-title>
            <v-chip
                class="ma-2 font-weight-bold"
                color="success"
            >
              <v-icon size="15px" left>
                mdi-wrench
              </v-icon>
              #5
            </v-chip>
          </div>
          <v-card-text>Using the layout system, we can add custom text anywhere within the background.</v-card-text>
          <v-sheet tile outlined dark color="secondary"  class="pa-5 ma-2" >
            <p class="text--secondary text-center md-display-3  text-capitalize font-weight-light">Project Information</p>
            <v-row>
              <v-col cols="12" lg="6" md="4">
                <!--              Project details would be here-->
              </v-col>
              <v-col cols="12" lg="6" md="4">
                <!--                Next project details would be here-->
              </v-col>
            </v-row>

          </v-sheet>
          <div class="ma-3 d-md-flex justify-space-between">
            <v-chip text-color="" light ><span class="text--primary font-weight-bold ">Last Build</span>: 2 minutes ago</v-chip>
            <v-chip>Last Build: 2 minutes ago</v-chip>
          </div>
          <v-card-actions>
            <v-btn color="primary" outlined block elevation="0" v-ripple="false" >
              See More
            </v-btn>
          </v-card-actions>



        </v-card>

      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <v-card tile outlined>
          <div class="d-md-flex justify-space-between">
            <v-card-title>Ecommerce Project </v-card-title>
            <v-chip
                class="ma-2 font-weight-bold"
                color="error"
            >
              <v-icon size="15px" left>
                mdi-wrench
              </v-icon>
              #5
            </v-chip>
          </div>
          <v-card-text>Using the layout system, we can add custom text anywhere within the background.</v-card-text>
          <v-sheet tile outlined dark color="secondary"  class="pa-5 ma-2" >
            <p class="text--secondary text-center md-display-3  text-capitalize font-weight-light">Project Information</p>
            <v-row>
              <v-col cols="12" lg="6" md="4">
                <!--              Project details would be here-->
              </v-col>
              <v-col cols="12" lg="6" md="4">
                <!--                Next project details would be here-->
              </v-col>
            </v-row>

          </v-sheet>
          <div class="ma-3 d-md-flex justify-space-between">
            <v-chip text-color="" light ><span class="text--primary font-weight-bold ">Last Build</span>: 2 minutes ago</v-chip>
            <v-chip>Last Build: 2 minutes ago</v-chip>
          </div>
          <v-card-actions>
            <v-btn color="primary" outlined block elevation="0" v-ripple="false" >
              See More
            </v-btn>
          </v-card-actions>



        </v-card>

      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <v-card tile outlined>
          <div class="d-md-flex justify-space-between">
            <v-card-title>Ecommerce Project </v-card-title>
            <v-chip
                class="ma-2 font-weight-bold"
                color="success"
            >
              <v-icon size="15px" left>
                mdi-wrench
              </v-icon>
              #5
            </v-chip>
          </div>
          <v-card-text>Using the layout system, we can add custom text anywhere within the background.</v-card-text>
          <v-sheet tile outlined dark color="secondary"  class="pa-5 ma-2" >
            <p class="text--secondary text-center md-display-3  text-capitalize font-weight-light">Project Information</p>
            <v-row>
              <v-col cols="12" lg="6" md="4">
                <!--              Project details would be here-->
              </v-col>
              <v-col cols="12" lg="6" md="4">
                <!--                Next project details would be here-->
              </v-col>
            </v-row>

          </v-sheet>
          <div class="ma-3 d-md-flex justify-space-between">
            <v-chip text-color="" light ><span class="text--primary font-weight-bold ">Last Build</span>: 2 minutes ago</v-chip>
            <v-chip>Last Build: 2 minutes ago</v-chip>
          </div>
          <v-card-actions>
            <v-btn color="primary" outlined block elevation="0" v-ripple="false" >
              See More
            </v-btn>
          </v-card-actions>



        </v-card>

      </v-col>
      <v-col offset-md="9" cols="12" md="3" offset-sm="7"  sm="5" offset-lg="9" lg="3">
        <v-btn
            text
            color="primary"

        >
          More Projects
          <v-icon>
            mdi-arrow-right
          </v-icon>
        </v-btn>
      </v-col>

      <v-col
          cols="12"
          md="6"
      >
        <base-material-card
            color="warning"
            class="px-5 py-3"
        >
          <template v-slot:heading>
            <span class="display-2  font-weight-light text--secondary lighten-1">

              <span class=" font-weight-regular">Builds</span>
            </span>

            <div class="text-caption font-weight-regular text--secondary lighten-1">
              All activities within the last 24hrs.
            </div>
          </template>
          <v-card-text>
            <v-data-table
                :headers="headers"
                :items="items"
            />
          </v-card-text>
        </base-material-card>
      </v-col>

      <v-col
          cols="12"
          md="6"
      >
        <base-material-card
            color="success"
            class="px-5 py-3"
        >
          <template v-slot:heading>
            <span class="display-2 text--primary font-weight-light lighten-1">

               <span class="   font-weight-regular">Deployments</span>
            </span>

            <div class="text-caption text--primary font-weight-regular lighten-1">
              All activities within the last 24hrs.
            </div>
          </template>
          <v-card-text>
            <v-data-table
                :headers="headers"
                :items="items"
            />
          </v-card-text>
        </base-material-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardDashboard',


    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
    },
  }
</script>
