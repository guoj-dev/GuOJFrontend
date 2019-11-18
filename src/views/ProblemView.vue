<template>
  <v-container>
    <v-card color="primary" dark>
      <v-container style="padding: 12px 12px 0px">
        <v-chip label style="padding:4px 4px 4px 4px;" small="true" color="white">
          <v-breadcrumbs style="padding:12px ;" light :items="items"></v-breadcrumbs>
        </v-chip>
      </v-container>
      <v-card-title>{{$route.params.ProblemID}} A+B Problem</v-card-title>
      <v-container style="padding: 0px 12px 12px">
        <v-chip small="true" outlined elevation="12">
          <v-rating v-model="rate" readonly="true" half-increments="true" color="yellow"></v-rating>
        </v-chip>
      </v-container>
      <v-divider></v-divider>
      <v-card-text>
        <markdown :Markdown="MarkdownData">{{MarkdownData}}</markdown>
      </v-card-text>
    </v-card>
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
          text: "题库",
          disabled: false,
          to: { name: "ProblemSet" }
        },
        {
          text: "题目",
          disabled: true
        }
      ],
      rate: "1",
      hardcolor: "green",
      MarkdownData:"# 这里是题面",
    };
  }
});
</script>

<style>
</style>
 