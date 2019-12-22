<template>
    <v-container>
      <v-row>
        <v-col>
          <v-card light elevation="12">
            <v-carousel>
              <v-carousel-item v-for="Slide in Slides" :key="Slide">
                <v-sheet :color="Slide[0]" height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <div class="display-3" style="color:#000;">{{ Slide[1] }}</div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card color="white" light elevation="12">
            <v-card-title>
              <v-icon color="white">mdi-chevron-right</v-icon>鸽子算命
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div style="text-align:center;">
                <v-container>
                  <v-row justify="center">
                    <v-col>
                      <div style="font-size:20px;color:#000;">今日运势</div>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col>
                      <div style="font-size:40px;color:#000;">🕊大吉🕊</div>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
            <v-card color="white" elevation="12">
                <v-card-title><v-icon>mdi-chevron-right</v-icon>鸽子语录</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <p class="black--text">
                        今天要干什么呢？
                    </p>
                    
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="4">
            <v-card color="white" elevation="12">
                <v-card-title><v-icon>mdi-chevron-right</v-icon>题库动态</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <p class="black--text">
                        新鲜好题：
                    </p>
                    
                </v-card-text>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
  data: () => {
    return {
      Slides: [
        ["white", "New GuOJ Generation"],
      ]
    };
  }
});
</script>

<style>
.mainpage {
  height: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
