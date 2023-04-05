import { defineStore } from 'pinia'
import * as Papa from "papaparse";

const urlFile = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9ZRlOioYuMEvsiweT9Hw4rdQ_0Ngi2Db_IkP6kyofneTmlXwlXh6WYcTNIO3vxByeRNHzdmQUGtKe/pub?gid=91542180&single=true&output=csv"

export const useImportStore = defineStore('ImportStore', {
    state: () => {
        return {
            imported: false,
            maturityTable: [],
            columnName: [],
        };
    },
    getters: {},
    actions: {
        async import() {
            if (!this.imported) {
                Papa.parse(urlFile, {
                    download: true,
                    header: true,
                    complete: (results) => {
                        this.maturityTable = results.data;
                        this.columnName = Object.keys(results.data[0]);
                    }
                })

                this.imported = true;
            }
        },


    },
});

