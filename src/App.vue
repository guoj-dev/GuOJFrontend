<template>
    <v-app id="inspire">
        <warn />
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant.sync="mini"
            clipped="true"
            app
            dark
            permanent
            expand-on-hover
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

        <v-app-bar
            :clipped-left="true"
            app
            color="blue"
            dark
            fixed
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            elevation="5"
        >
            <v-btn flat rounded icon x-large style="margin-left:-12px">
                <v-icon size="40px">mdi-alpha-g</v-icon>
            </v-btn>
            <v-toolbar-title class="ml-0 pl-4" flat>
                <span class="hidden-sm-and-down">GuOJ</span>
            </v-toolbar-title>
            <div class="flex-grow-1"></div>
            <user-card />
        </v-app-bar>
        <v-content style="height:100%-64px;">
            <v-container class="fill-height d-flex px-0 py-0" fluid>
                <v-card
                    style="background-attachment:fixed; width:100%;"
                    class="fill-height inline-flex"
                    dark
                    tile
                    color="white darken-3"
                    img="https://s2.ax1x.com/2019/09/12/nBc7FO.jpg"
                >
                    <vue-scroll :ops="ops">
                        <transition
                            mode="out-in"
                            enter-active-class="animated fadeIn"
                            leave-active-class="animated fadeOut"
                        >
                            <router-view></router-view>
                        </transition>
                    </vue-scroll>
                </v-card>
            </v-container>
        </v-content>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import UserCard from './components/UserCard.vue';
import Warn from './components/Warn.vue';

export default {
    components: {
        UserCard,
        Warn
    },
    props: {
        source: String
    },
    //computerd: {

    //},
    data: () => ({
        ops: {
            vuescroll: { wheelScrollDuration: 200 },
            scrollPanel: {},
            rail: { background: '#000' },
            bar: { background: '#888', opacity: 0.6 }
        },
        dialog: false,
        drawer: null,
        mini: false,
        items: [
            { icon: 'home', text: '主页', to: '/' },
            { icon: 'list', text: '题库', to: '/ProblemSet' },
            {
                icon: 'playlist_add_check',
                text: '评测列表',
                to: '/JudgeStatus'
            },
            { icon: 'stars', text: '比赛' },
            { icon: 'people', text: '小组' },
            { icon: 'chat', text: '论坛' }
        ]
    }),
    async mounted() {
        this.$store.dispatch('Auth/Init');
        if (this.$store.getters['Auth/isLogin']) {
            await this.$store.dispatch('User/Update');
            await this.$store.dispatch('User/UpdateUserData');
        }
    },
    watch: {
        $route() {
            this.$refs.scroll.$el.scrollTop = 0;
        }
    }
};
</script>
<style>
html,
body {
    height: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
#inspire,
.v-content {
    height: 100%;
}
</style>

