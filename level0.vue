<template>
    <v-layout class="bg-grey-lighten-3">
      
      <v-app-bar
        color="primary"
      >
  
        <v-app-bar-title><strong>FOSP Maturity Model</strong></v-app-bar-title>
  
        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>
    
      <v-main>
        <br><br>
        
      </v-main>
  
    </v-layout>
  
    <!-- <v-card-actions>
      <v-btn
        variant="text"
        color="teal-accent-4"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions> -->
  
      <v-layout>

        
        <v-footer class="footer">
          <v-row justify="left" no-gutters>
              <v-col class="text-center mt-6" cols="10">
                <i>FOSP (Federated One Health Surveillance Platform) <br> Maturity Model</i><br>
              </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
              <v-col class="text-center" cols="7">
                <v-img src="/github.png" height="50px" width="100px"/>
              </v-col>
            </v-row>
            <v-row justify="left" no-gutters>
              <v-col class="text-center" cols="5">
                <v-img src="/ElixirLogo.png" height="100px" width="150px"/>
              </v-col>
            </v-row>
      </v-footer> 
      </v-layout>
    </template>
  
    
    <script>
    import { useImportStore } from "@/stores/dataStore";
    export default {
      async setup() {
        const importStore = useImportStore();
        return { importStore };
      },
      data() {
        return {
          columnName: [],
        };
      },
      async created() {
        await this.importStore.import();
      },
      
    };
    </script>
    
    
    <style lang="scss">
    @use "./settings";
  
  .rounded-card{
      border-radius:30px;
  }
  
    </style>
    