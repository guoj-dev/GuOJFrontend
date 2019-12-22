<template>
  <v-container>
    <v-card color="primary" dark>
      <v-container style="padding: 12px 12px 0px">
        <v-chip label style="padding:4px 4px 4px 4px;" small="true" color="white">
          <v-breadcrumbs style="padding:12px ;" light :items="items"></v-breadcrumbs>
        </v-chip>
      </v-container>
      <v-card-title>{{$route.params.ProblemID}} A+B Problem</v-card-title>
      <v-container style="padding: 0px 12px 12px"></v-container>
      <v-divider></v-divider>
      <v-card-text>
        <div style="color:#000;">
          <markdown-editor ref="markdown" :Markdown="Markdown"></markdown-editor>
          
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import MarkdownEditor from "@/components/MarkdownEditor.vue";


export default Vue.extend({
  /* eslint-disable */
  components: { MarkdownEditor },
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
        },
        {
          text: "编辑题目",
          disabled: true
        }
      ],
      Markdown:'aaa'
    };
  }
});
</script>

<style>
</style>
 