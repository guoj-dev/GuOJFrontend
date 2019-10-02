<template>
  <v-card light color="white">
      <v-card-text>
          <div v-html="html" style="color:#000;">
            <slot>
              
            </slot>
          </div>
      </v-card-text>
  </v-card>
</template>


<script lang="js">
import Vue from "vue";
import mavonEditor from "mavon-editor-guoj";
import filterXSS from 'xss'
import "mavon-editor-guoj/dist/css/index.css";

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
            this.html=this.filterXSS(mavonEditor.markdownIt.render(this.Markdown))
        }
    }
});
</script>