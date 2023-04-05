<!-- <template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component.
    </AppAlert>
  </div>
  <template>
  <v-btn>Hello Sass Changes</v-btn>
</template>

</template> -->


 

<template>
  <div class="d-flex align-center flex-column">
    <v-icon>mdi-home</v-icon>
    <v-card width="400">
      <v-card-title>This is a title</v-card-title>
      <v-card-subtitle>This is a subtitle</v-card-subtitle>
      <v-card-text> This is content </v-card-text>
    </v-card>
    <v-btn class="mt-10">Hello Sass Changes</v-btn>
  </div>
</template>

<style lang="scss">
@use './settings';
</style>