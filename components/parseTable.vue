
 <template>


  <v-expansion-panels v-if='importStore.imported'>
    <v-expansion-panel
      v-for="[key, value] of Object.entries(importStore.maturityTableSub)"
      :key="key"
    >
      <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
        {{ key }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <displayTable :importTable="value" :importColumn="importStore.importColumn" :importRowSpans="importStore.rowSpans"/>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-skeleton-loader v-else></v-skeleton-loader>
</template>

<script>
import { useImportStore } from "@/stores/dataStore";
export default {
  async setup() {
    const importStore = useImportStore();
    importStore.import();
    return { importStore };
  },
  data() {
    return {
      columnName: [],
      rowspans: {},
      
    };
  },
  
};
</script>
  
<style>
td[rowspan] {
  vertical-align: top;
  text-align: left;
}
</style>