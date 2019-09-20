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
import filterXSS from 'xss'
filterXSS.whiteList['input'] = ['type', 'src', 'disabled', 'checked', 'class']
filterXSS.whiteList['img'] = ['src', 'alt', 'title', 'width', 'max-width', 'style', 'height']
filterXSS.whiteList['math'] = []
filterXSS.whiteList['semantics'] = []
filterXSS.whiteList['mrow'] = []
filterXSS.whiteList['mtext'] = []
filterXSS.whiteList['annotation'] = ['encoding']
filterXSS.whiteList['msub'] = []
filterXSS.whiteList['mi'] = []
filterXSS.whiteList['mo'] = []
filterXSS.whiteList['mn'] = []
filterXSS.whiteList['li'] = ['class']
filterXSS.whiteList['span'] = ['class', 'title', 'aria-hidden', 'style']
filterXSS.whiteList['code'] = []
filterXSS.whiteList['li'] = ['class', 'id']
filterXSS.whiteList['td'] = ['style', 'class']
filterXSS.whiteList['p'] = ['style', 'class']
filterXSS.whiteList['div'] = ['style', 'class']
filterXSS.whiteList['a'] = ['style', 'class', 'id', 'target', 'href', 'title']
filterXSS.stripIgnoreTag = true
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
            this.html=this.filterXSS(mavonEditor.markdownIt.render(this.Markdown))
        }
    }
});
</script>