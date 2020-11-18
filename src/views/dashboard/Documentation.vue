<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-spacer class="mt-5"></v-spacer>

    <v-row>
      <v-col sm="12" cols="12">
        <h3 class="text--secondary lighten-1">Getting Started</h3>
        <p class="text--accent-3 font-weight-regular">
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable.
          If you haven’t signed up kindly use the signup link to create a project account.
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable.</p>
      </v-col>

      <v-col sm="12" cols="12">
        <h3 class="text--secondary lighten-1">Requirements</h3>
        <p class="text--accent-3 font-weight-regular">
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable.
          If you haven’t signed up kindly use the signup link to create a project account.
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable.</p>
      </v-col>


      <v-col sm="12" cols="12">
        <h3 class="text--secondary lighten-1">Set Up New Projects</h3>
        <p class="text--accent-3 font-weight-regular">
          Add environment variable based on tech or language stack
          Use additional fields provided to add any extra environment variable
          Save environment variable
          Booking an Appointment for Deployment Support
          Book by filling form on the site’s dashboard
          Pre-configuring of production requirement by DevOps team
          Update of deployment setting by individual project TTL</p>
      </v-col>

      <v-col sm="12" cols="12">
        <h3 class="text--secondary lighten-1">Testing and Building A Project</h3>
        <p class="text--accent-3 font-weight-regular">
          Team Leads are to prevent unnecessary use of resources
          After team lead is satisfied with the teams push and does the final merge,
          everything is ready for production; A final test and build is performed, and the
          git repository is provided with a green badge of success

          Deploying A Project
          Team Lead checks if deployment button is enabled. </p>
      </v-col>

      <v-col sm="12" cols="12">
        <h3 class="text--secondary lighten-1">Contact Us</h3>
        <p class="text--accent-3 font-weight-regular">
          Feel free to contact the DevOps team with any issues you may encounter with your projects.
          Email:  semicolon-devops@gmail.com</p>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Documentation',


    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
    },
  }
</script>
