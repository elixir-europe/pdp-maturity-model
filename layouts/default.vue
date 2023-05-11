<template>
  
    <v-layout class="bg-grey-lighten-3">
      <v-overlay :value="drawer" z-index="4">
      </v-overlay>
      <v-navigation-drawer>
        <v-list dense>
          <v-list-item>
            Global Model View
          </v-list-item>
          <v-list-item>
            Domain Levels
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar app clipped-left dark color="#447fa6">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>FOSP Maturity Model</v-toolbar-title>
      </v-app-bar>
    
      <v-main>
        <br><br>
        <v-container fluid>
            <v-row dense>
              <v-card
                class="mx-auto rounded-card"
                height="600px" width="600px"
  
              >
                <v-card-text>
                  <div>Level 0</div>
                  <br>
                  <p class="text-h4 text--primary">
                    Governance, Strategy & Sustainability
                  </p>
                  <br>
                </v-card-text>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">Governance and structure of the FOSP node</v-btn>
                </v-col>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">Vision and Strategy of the FOSP node</v-btn>
                </v-col>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">Sustainability model of the FOSP node</v-btn>
                </v-col>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">Overarching key performance indicators (KPIs)</v-btn>
                </v-col>
              </v-card>
  
              <v-card
                class="mx-auto rounded-card"
                height="600px" width="600px"
  
              >
                <v-card-text>
                  <div>Level 1</div>
                  <br>
                  <p class="text-h4 text--primary">
                    Legal
                  </p>
                  <br><br><br>
                </v-card-text>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">Data Protection policies at the FOSP are established</v-btn>
                </v-col>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">FOSP/IOSP Collaboration agreement</v-btn>
                </v-col>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">Legal agreements between the FOSP Node and its users</v-btn>
                </v-col>
              </v-card>
  
              <v-card
                class="mx-auto rounded-card"
                height="600px" width="600px"
  
              >
                <v-card-text>
                  <div>Level 2</div>
                  <br>
                  <p class="text-h4 text--primary">
                    Data & metadata management
                  </p>
                  <br><br><br>
                </v-card-text>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">	Secure management of data at physical/logical levels</v-btn>
                </v-col>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">Incoming and outgoing data & metadata flow</v-btn>
                </v-col>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">Data Reception and Standards-based Interoperability</v-btn>
                </v-col>
              </v-card>
            </v-row>
          </v-container>
  
          <v-container fluid>
            <v-row dense>
  
              <v-card
                class="mx-auto rounded-card"
                height="600px" width="600px"
              >
                <v-card-text>
                  <div>Level 3</div>
                  <br>
                  <p class="text-h4 text--primary">
                    Technical Infrastructure
                  </p>
                </v-card-text>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">Software stack</v-btn>
                </v-col>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">	Technical Benchmarking</v-btn>
                </v-col>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">Storage System</v-btn>
                </v-col>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">Network Interfaces</v-btn>
                </v-col>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">Internal Computing Capacity</v-btn>
                </v-col>
              </v-card>
  
              <v-card
                class="mx-auto rounded-card"
                height="600px" width="600px"
              >
                <v-card-text>
                  <div>Level 4</div>
                  <br>
                  <p class="text-h4 text--primary">
                    Operations Support
                  </p>
                  <br><br><br><br>
                </v-card-text>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">	Standard Operating Procedures & documentation</v-btn>
                </v-col>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">Establishment of FOSP Node team</v-btn>
                </v-col>
              </v-card>
  
              <v-card
                class="mx-auto rounded-card"
                height="600px" width="600px"
              >
                <v-card-text>
                  <div>Level 5</div>
                  <br>
                  <p class="text-h4 text--primary">
                    Communications, Community Building and Engagement
                  </p>
                  <br><br>
                </v-card-text>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">	Stakeholder Research Community Engagement</v-btn>
                </v-col>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">Capacity Building driven by the FOSP Node</v-btn>
                </v-col>
                <v-col>
                 <v-btn block class="text-none mb-4" rounded="lg" size="x-large">Dedicated Public Communication Strategy</v-btn>
                </v-col>
              </v-card>
            </v-row>
          </v-container>
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
                <strong><i>FOSP Maturity Model</i></strong><br>
              </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
              <v-col class="text-center" cols="1">
                <v-img src="/github.png" height="100px" width="150px"/>
              </v-col>
            </v-row>
            <v-row justify="center" no-gutters>
              <v-col class="text-center" cols="3">
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
  
  
  #drawer{
    background: rgba(240, 240, 240, 1);
    
  }
    </style>
    