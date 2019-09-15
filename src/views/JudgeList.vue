<template>
  <v-card-text>
    <v-card dark elevation="12" color="light-blue light-1" transition="slide-y-reverse-transition">
      <v-card-title>
        <span>评测列表</span>
      </v-card-title>
      <v-container>
        <v-row v-for="key in Judges" :key="key">
          <v-col>
            <v-card dark color="primary" elevation="3" :to="'/JudgeStatus/'+key[0]">
              <v-container style="padding: 0 4px 0 0;">
                <v-row>
                  <v-col>
                    <v-card-title style="padding:0 0 0 12px;">
                      <v-card style="width:150px; margin: 0px 12px 0px 0px;" dark color="blue">
                        <v-row no-gutters>
                          <v-col cols="4" style="padding:2px 4px 2px 4px;">
                            <v-avatar height="36" width="36">
                              <img
                                src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                                alt="avatar"
                              />
                            </v-avatar>
                          </v-col>
                          <v-col style="padding:2px 4px 2px 4px;">
                            <div style="font-size:4px;">
                              Quank
                              <v-icon small color="grey darken-5">check_circle</v-icon>
                            </div>
                          </v-col>
                        </v-row>
                      </v-card>
                      #{{key[0]}} {{key[1]}}
                      <v-chip style="margin:0px 8px" :color="key[2][0]">{{key[2][1]}}</v-chip>
                    </v-card-title>
                  </v-col>
                  <v-col></v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
        <div class="text-center">
          <v-pagination v-model="page" :length="4" light circle></v-pagination>
        </div>
      </v-container>
    </v-card>
  </v-card-text>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  /* eslint-disable */
  components: {},
  data: () => {
    return {
      Judges: [
        ["1", "A+B Problem", ["green", "Accepted"]],
        ["2", "A+B Problem", ["green", "Accepted"]],
        ["3", "A+B Problem", ["green", "Accepted"]],
        ["4", "A+B Problem", ["green", "Accepted"]],
        ["5", "A+B Problem", ["green", "Accepted"]],
        ["6", "A+B Problem", ["green", "Accepted"]],
        ["7", "A+B Problem", ["green", "Accepted"]],
        ["8", "A+B Problem", ["green", "Accepted"]],
        ["9", "A+B Problem", ["green", "Accepted"]]
      ],
      items: [
        {
          text: "GuOJ",
          disabled: true,
          href: "/"
        },
        {
          text: "ProblemSet",
          disabled: true,
          href: "/ProblemSet"
        }
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
 