<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant.sync="mini"
            clipped="true"
            app
            light
            permanent
            mini-variant-width="56"
            elevation="12"
            color="grey lighten-4"
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

        <v-app-bar
            :clipped-left="true"
            app
            color="white"
            light
            fixed
            elevation="5"
        >
            <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-4" flat>
                <span class="hidden-sm-and-down">GuOJ</span>
            </v-toolbar-title>
            <div class="flex-grow-1"></div>
            <user-card/>
        </v-app-bar>
        <v-content>
            <v-container class="fill-height" fluid style="padding: 0 0 0 0;" color>
                <v-card
                    style=" width:100%; height:100%; border-radius:0px; background-attachment:fixed;"
                    color="white darken-3"
                >
                    <transition
                        mode="out-in"
                        enter-active-class="animated fadeInUp"
                        leave-active-class="animatedfadeOutDown"
                    >
                        <router-view></router-view>
                    </transition>
                </v-card>
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import UserCard from "@/components/UserCard.vue";

export default {
    components:{
        UserCard
    },
    props: {
        source: String
    },
    //computerd: {
        
    //},
    data: () => ({
        dialog: false,
        drawer: null,
        mini: false,
        items: [
            { icon: "home", text: "主页", to: "/" },
            { icon: "list", text: "题库", to: "/ProblemSet" },
            {
                icon: "playlist_add_check",
                text: "评测列表",
                to: "/JudgeStatus"
            },
            { icon: "stars", text: "比赛" },
            { icon: "people", text: "小组" },
            { icon: "chat", text: "论坛" }
        ]
    })
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>

