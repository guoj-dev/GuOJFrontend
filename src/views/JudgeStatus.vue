<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-card color="white" light>
          <v-container style="padding: 12px 12px 0px">
            <v-chip outlined label style="padding:4px 4px 4px 4px;" small="true" color="white">
              <v-breadcrumbs style="padding:12px ;" light :items="items"></v-breadcrumbs>
            </v-chip>
          </v-container>
          <v-card-title>评测任务 #{{$route.params.JudgeID}} <v-chip outlined style="padding:4px 4px 4px 4px;" small="true" color="green">Accepted</v-chip></v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-container>
              <v-tooltip bottom v-for="i in 10" :key="i" dark>
              <template v-slot:activator="{ on }">
                <v-card v-on="on" elevation="10" color="green" style="display:inline-block;height:100px;width:100px;margin:10px 10px 10px 10px">
                    <div style="text-align:center;padding:10%;color:#fff;">
                      <v-icon color="green lighten-5" large>check</v-icon>
                      <br />
                      #{{i}}
                      <br />Accepted
                    </div>
                  </v-card>
                  
              </template>
              <span>Time:0ms<br/>Memory:0kb</span>
              </v-tooltip>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
      
      <v-col justify="end" cols="4">
          <v-card color="white">
              <v-card-title>
                  评测信息
              </v-card-title>
              <v-divider/>
              <v-card-text>
                  <div style="color:#000">
                    题目: <v-chip outlined style="margin:4px 4px 4px 4px;" small color="green">{{ProblemID}} {{ProblemName}}</v-chip><br>
                    日期: <v-chip outlined style="margin:4px 4px 4px 4px;" small color="indigo">2019/09/15 14:15:30</v-chip><br>
                    状态: <v-chip outlined style="margin:4px 4px 4px 4px;" small="true" color="green">Accepted</v-chip><br>
                    时间: <v-chip outlined style="margin:4px 4px 4px 4px;" small="true" color="yellow darken-2">{{Time}}/{{TimeLimit}}</v-chip><br>
                    空间: <v-chip outlined style="margin:4px 4px 4px 4px;" small="true" color="blue darken-4">{{Memory}}/{{MemoryLimit}}</v-chip><br>
                    评级: <v-chip outlined style="margin:4px 4px 4px 4px;" small="true" color="green">A+</v-chip><br>
                    奖励: 
                    <v-chip outlined style="margin:4px 4px 4px 4px;" small="true" color="yellow darken-2">
                        <v-icon color="yellow darken-2">
                            grade
                        </v-icon>
                        +1
                    </v-chip> 
                    <v-chip outlined style="margin:4px 4px 4px 4px;" small="true" color="yellow darken-2">
                        <v-icon color="yellow darken-2">
                            monetization_on
                        </v-icon>
                        +1
                    </v-chip>
                  </div>
              </v-card-text>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Markdown from "@/components/Markdown.vue";

export default Vue.extend({
  /* eslint-disable */
  components: { Markdown },
  data: () => {
    return {
      items: [
        {
          text: "GuOJ",
          disabled: false,
          to: { path: "/" }
        },
        {
          text: "评测",
          disabled: false,
          to: { name: "ProblemSet" }
        },
        {
          text: "任务",
          disabled: true
        }
      ],
      ProblemID: "P1000",
      ProblemName: "A+B Problem",
      TimeLimit:"1000ms",
      Time:"0ms",
      MemoryLimit:"128MB",
      Memory:"10KB",
    };
  }
});
</script>

<style>
</style>
 