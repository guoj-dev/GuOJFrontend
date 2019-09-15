<template>
  <v-card light color="white">
      <v-card-text>
          <div v-html="html" style="color:#000;"></div>
      </v-card-text>
  </v-card>
</template>


<script lang="ts">
import Vue from "vue";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

Vue.use(mavonEditor);
export default Vue.extend({
  props: [
      "Markdown"
  ],
  data() {
    return {
      html:""
    };
  },
  mounted(){
      this.Render()
  },
    methods:{
        Render() {
            this.html=mavonEditor.markdownIt.render(this.Markdown)
        }
    }
});
</script>