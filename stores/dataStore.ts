import { defineStore } from 'pinia'
import * as Papa from "papaparse";

const urlFile = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9ZRlOioYuMEvsiweT9Hw4rdQ_0Ngi2Db_IkP6kyofneTmlXwlXh6WYcTNIO3vxByeRNHzdmQUGtKe/pub?gid=91542180&single=true&output=csv"

export const useImportStore = defineStore('ImportStore', {
    state: () => {
        return {
            imported: false,
            maturityTable: [],
            maturityTableSub: {},
            columnName: [],
            rowSpans: {}
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

                        var temp = {};
                        var tempDomain= "";
                        for (var i of this.maturityTable) {
                            if (i['domain level'] != "") {
                                tempDomain = i['domain level'].concat(" - ", i['domain'])
                                this.maturityTableSub[tempDomain] = [];
                                this.maturityTableSub[tempDomain].push(i);
                            } else {
                                this.maturityTableSub[tempDomain].push(i);
                            }
                        
                            for (var j of Object.values(this.columnName)) {
                                if (i[j] != "") {
                                    temp[j] = i[j];
                                    this.rowSpans[temp[j]] = 1;
                                } else {
                                    this.rowSpans[temp[j]] = this.rowSpans[temp[j]] + 1;
                                }
                            }
                        }
                        delete this.rowSpans['undefined'];
                        this.rowSpans["Appropriate stakeholder Research Community Engagement"] = 5;
                        this.rowSpans["Capacity Building driven by the FOSP Node"] = 5;
                        this.imported = true;
                    }
                })
            }
        },


    },
});

