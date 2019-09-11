<template>
  <v-card style=" width:100%; height:100%;" tile color="grey darken-3">
    
    <v-card-text>
          
            <v-card elevation="3" color="white lighten-1">
                <v-card-title>ProblemSet</v-card-title>
                <v-container>
                <v-row v-for="key in Problems" :key="key" >
          <v-col>
            <v-card color="white" elevation="3">
              <v-card-title><v-icon>mdi-chevron-right</v-icon>{{key[0]}} {{key[1]}}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
                </v-container>
            </v-card>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    /* eslint-disable */
  components: {},
  data: () => {
    return {
        Problems:[
            [
                "P1000",
                "A+B Problem"
            ],
            [
                "P1001",
                "A+B Problem"
            ],
            [
                "P1002",
                "A+B Problem"
            ],
            [
                "P1003",
                "A+B Problem"
            ],
        ]
    };
  }
});
</script>

<style>
.mainpage {
  height: 100%;
}
</style>
 