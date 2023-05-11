<template>

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
    