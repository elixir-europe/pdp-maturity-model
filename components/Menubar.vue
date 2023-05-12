<template>
  <v-overlay :value="drawer" z-index="4">
      </v-overlay>
      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
        <v-list
          :items="items"
        ></v-list>
      </v-navigation-drawer>
  
      <v-app-bar app clipped-left dark color="#447fa6">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title><strong>FOSP Maturity Model</strong></v-toolbar-title>
      </v-app-bar>
</template>


<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Global Model View',
        to: '/pages/level0',
      },
      {
        title: 'Domain Levels',
        to: '/',
      },
    ],
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>
