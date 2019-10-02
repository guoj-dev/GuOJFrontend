<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-card color="primary">
          <v-container style="padding: 12px 12px 0px">
            <v-chip label style="padding:4px 4px 4px 4px;" small="true" color="white">
              <v-breadcrumbs style="padding:12px ;" light :items="items"></v-breadcrumbs>
            </v-chip>
          </v-container>
          <v-card-title>{{Username}}</v-card-title>
          <v-divider></v-divider>
          <v-card-text></v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card color="primary">
          <v-card-text>
            <v-row>
              <v-col cols="2" justify="start">
                <v-avatar height="64" width="64">
                  <img
                    src="https://cdn.v2ex.com/gravatar/275f907fb8dbf72131b4867378b1c707?s=1000&d=mm"
                    alt="avatar"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="1" justify="end"></v-col>
              <v-col cols="8" justify="end">
                <div style="color:#fff;font-size: 32px;">{{Username}} <v-icon style="height:32px;width:32px;" color="purple">check_circle</v-icon><i class="fas fa-medal" style="color:grey;height:32px;width:32px;"></i></div>
                <div style="color:#fff;font-size: 32px;"><v-progress-linear value="75" dark color="blue"></v-progress-linear></div>
                
              </v-col>
            </v-row>
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
      items: [
        {
          text: "GuOJ",
          disabled: false,
          to: { path: "/" }
        },
        {
          text: "用户",
          disabled: true
        }
      ],
      Username: "Quank"
    };
  }
});
</script>

<style>
.mainpage {
  height: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
