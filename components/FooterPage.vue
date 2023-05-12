<template>
  <v-footer
    app
    flat
    elevation="2"
    style="
      background: #023452;
      background-image: linear-gradient(#225472, #023452 55%);
      color: white;
    "
  >
    <v-spacer></v-spacer>
    <v-row>
      <v-col>
        <p><b>Contact us</b></p>
        <p>Github : <a href="https://github.com/elixir-europe/fosp-maturity-model/issues/new" target="_blank">create a issue</a> </p>
      </v-col>
      <v-col>
        <p><b>About ELIXIR FOPS intiative</b></p>
        <p>
          The FOSP Maturity Model
          <span class="font-italic font-weight-light"
            >is maintained
            <a target="_blank" href="https://elixir-europe.org/">ELIXIR</a> by
            and the website by
            <a target="_blank" href="https://www.france-bioinformatique.fr/"
              >IFB-ElixirFr</a
            ></span
          >.
        </p>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>
  </v-footer>
</template>

<style>
a {
  color: aliceblue;
}
</style>
