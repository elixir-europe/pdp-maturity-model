<template>
  <v-layout full-height="true">
    <v-app-bar
      title="The ELIXIR FOSP Maturity Model"
      style="background: #225472; color: white"
    >
      <template v-slot:append>
        <v-btn icon="mdi-github" href="https://github.com/elixir-europe/fosp-maturity-model" target="_blank"></v-btn> </template
    ></v-app-bar>
    <v-main class="fill-height" scrollable>
      <div class="fill-height" style="max-height: calc(100% - 40px)">
        <div
          style="
            height: 400px;
            background: #023452;
            background-image: linear-gradient(#225472, #023452 55%);
          "
          class="d-flex align-center justify-center"
        >
          <img src="/ElixirLogo_white.png" alt="" style="height: 200px" />
          <h1 style="color: white">The ELIXIR FOSP Maturity Model</h1>
        </div>
        <v-container>
          <slot />
        </v-container>
      </div>
    </v-main>
    <FooterPage />
  </v-layout>
</template>
    
    
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "Global Model View",
        value: "Global Model View",
      },
      {
        title: "Domain Levels",
        value: "Domain Levels",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

    <style lang="scss">
@use "./settings";

.rounded-card {
  border-radius: 30px;
}

#drawer {
  background: rgba(240, 240, 240, 1);
}
</style>
    