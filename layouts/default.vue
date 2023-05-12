<template>
  <v-layout fill-height>
    <v-app-bar app clipped-left dark color="#447fa6">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title><strong>FOSP Maturity Model</strong></v-toolbar-title>

        <v-tabs align="left">
          <v-tab label="Domain Levels" />
            <v-menu>
              <v-list style="min-width: 100px">
                <v-item clickable to="/level0">
                  <v-item>Level 0</v-item>
                </v-item>
                <v-item clickable  to="/level1">
                  <v-item>Level 1</v-item>
                </v-item>
                <v-item clickable to="/level2">
                  <v-item>Level 2</v-item>
                </v-item>
                <v-item clickable to="/level3">
                  <v-item>Level 3</v-item>
                </v-item>
                <v-item clickable to="/level4">
                  <v-item>Level 4</v-item>
                </v-item>
                <v-item clickable to="/level5">
                  <v-item>Level 5</v-item>
                </v-item>
              </v-list>
            </v-menu>
          <v-tab clickable to="/" label="Global View">
          </v-tab>
        </v-tabs>
    </v-app-bar>
    <v-page-container>
    <v-main>
      <v-page>
        <div>
          <router-view />
        </div>

      </v-page>
    </v-main>
    </v-page-container>

  </v-layout>

  <v-layout>
    <FooterPage/>
  </v-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  methods: {
    onClick() {},
    openInNewTab(url) {
      window.open(url, "_blank", "noreferrer");
    },
  },
};
</script>


<style>
</style>