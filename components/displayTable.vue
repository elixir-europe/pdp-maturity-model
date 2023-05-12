<template>
  <div v-if="importTable !== undefined && importTable !== null && importTable.length !== 0 ">
  <v-table >
    <thead>
      <tr>
        <th class="text-left" v-for="(c, index) in importColumn" :key="index">
          {{ c }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index2) in importTable" :key="index2">
        <template
          v-for="(cell, indexCell) in Object.values(item)"
          :key="indexCell"
        >
          <td
            v-if="
              sepCol.includes(Object.keys(item)[indexCell]) &&
              displayTest(index2)
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
</div>
</template>

<script>
export default {
  props: { importTable: Array, importColumn: Array, importRowSpans: Object },
  data() {
    return {
      display: true,
      sepCol: ["indicator #", "indicator connected with", "indicator"],
      count: 15,
      count_indicator_nb:5, 
      count_indicator_conc:5, 
      count_indicator_conc:5, 
    };
  },
  methods: {
    getRowSpan(value) {
      if (value in this.importRowSpans) {
        return this.importRowSpans[value];
      } else {
        return 1;
      }
    },
    displayTest(index) {
      return index % 5 == 0;
    },
  },
};
</script>

<style>
</style>