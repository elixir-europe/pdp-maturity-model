
 <template>
    <div class="d-flex align-center flex-column">
      <div class="mp-4 ma-4">
        <h1>FOSP maturity model</h1>
  
        <v-table
          v-if="
            importStore.maturityTable !== undefined &&
            importStore.maturityTable !== null
          "
        >
          <thead>
            <tr>
              <th
                class="text-left"
                v-for="(c, index) in importStore.columnName"
                :key="index">
                {{ c }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index2) in importStore.maturityTable" :key="index2">
              <td
                v-for="(cell, indexCell) in Object.values(item)"
                :key="indexCell"
              >
                {{ cell }}
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
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
  </style>