
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
                :key="index"
              >
                {{ c }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index2) in value" :key="index2">
              <template
                v-for="(cell, indexCell) in Object.values(item)"
                :key="indexCell"
              >
                <td
                  v-if="
                    sepCol.includes(Object.keys(item)[indexCell]) &&
                    displayTest(Object.keys(item)[indexCell])
                  "
                  rowspan="5"
                >
                  {{ cell }}
                </td>
                <td v-else-if="cell != ''" :rowspan="getRowSpan(cell)">
                  {{ cell }}
                </td>
              </template>
            </tr>
          </tbody>
        </v-table>
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
      display: true,
      sepCol: ["indicator #", "indicator connected with", "indicator"],
      count: {
        "indicator #": 5,
        "indicator connected with": 5,
        indicator: 5,
      },
    };
  },
  methods: {
    getRowSpan(value) {
      if (value in this.importStore.rowSpans) {
        return this.importStore.rowSpans[value];
      } else {
        return 1;
      }
    },
    displayTest(name) {
      if (this.count[name] < 5) {
        this.count[name] = this.count[name] + 1;
        return false;
      } else {
        this.count[name] = 1;
        return true;
      }
    },
  },
};
</script>
  
<style>
td[rowspan] {
  vertical-align: top;
  text-align: left;
}
</style>