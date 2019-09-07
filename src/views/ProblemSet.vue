<template>
  <v-card style=" width:100%; height:100%;" tile flex dark grey darken-3>
    <v-card-title>ProblemSet</v-card-title>
    <v-card-text>
      <v-container>
        <v-divider></v-divider>
        <v-row :v-for="(key,value) in Problems">
          <v-col>
            <v-card>
              <v-card-title>{{key[0]}} {{key[1]}}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
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
 