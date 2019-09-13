
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      clipped="true"
      app
      dark
      permanent
      mini-variant-width="56"
      elevation="12"
      color="blue"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item :key="item.text" :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="true" app color="blue" dark fixed src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" elevation="5">
      <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4" flat>
        <span class="hidden-sm-and-down">GuOJ</span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn light>
        <v-avatar height="36" width="36">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" />
        </v-avatar>
        <span>Quank</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid style="padding: 0 0 0 0;" color>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    drawer: null,
    mini: false,
    items: [
      { icon: "home", text: "主页", to: "/" },
      { icon: "list", text: "题库", to: "/ProblemSet" },
      { icon: "stars", text: "比赛" },
      { icon: "people", text: "小组" },
      { icon: "chat", text: "论坛" }
    ]
  })
};
</script>
<style>
</style>

