<template>
    <v-app id="inspire">
        <notification />
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant.sync="mini"
            clipped="true"
            app
            :dark="SideBar.Dark"
            :light="!SideBar.Dark"
            permanent
            expand-on-hover
            mini-variant-width="56"
            elevation="12"
            :color="SideBar.Color"
        >
            <v-list dense>
                <template v-for="item in items">
                    <v-list-item :key="item.text" :to="item.to">
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title class="font-weight-black mr-2">{{
                                item.text
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            :clipped-left="true"
            app
            :color="TopBar.Color"
            :dark="TopBar.Dark"
            :light="!TopBar.Dark"
            fixed
            :src="TopBar.BackgroundImage"
            elevation="5"
        >
            <v-menu offset-y transition="slide-y-transition" nudge-bottom="4px">
                <template v-slot:activator="{ on }">
                    <v-btn
                        flat
                        rounded
                        icon
                        x-large
                        style="margin-left: -12px;"
                        v-on="on"
                    >
                        <v-icon size="40px">mdi-alpha-g</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-subheader>主题</v-subheader>
                    <v-list-item @click="SwitchClassicTheme">
                        <v-list-item-title>GuOJ Classic</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="SwitchDarkTheme">
                        <v-list-item-title>GuOJ Dark</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="SwitchLightTheme">
                        <v-list-item-title>GuOJ Light</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-toolbar-title class="ml-0 pl-4" flat>
                <span class="hidden-sm-and-down font-weight-black">GuOJ</span>
            </v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-responsive
                class="mx-4 flex-shrink-1 transition-swing"
                style="max-width:360px;"
            >
                <v-autocomplete
                    label="搜索"
                    light
                    flat
                    rounded
                    hide-details
                    solo
                    dense
                    prepend-inner-icon="mdi-magnify"
                    class="flex-shrink-1 align-center py-auto mx-6"
                    background-color="grey lighten-3"
                    clearable
                ></v-autocomplete>
            </v-responsive>
            <user-card />
        </v-app-bar>
        <v-content style="height: 100vh;">
            <v-container class="fill-height d-flex px-0 py-0" fluid>
                <v-card
                    style="background-attachment: fixed; width: 100%; border-radius:0px;"
                    class="fill-height inline-flex"
                    tile
                    flat
                    :dark="Global.Dark"
                    :light="!Global.Dark"
                    :color="Global.Color"
                    :img="Global.BackgroundImage"
                    >
                    <vue-scroll :ops="ops">
                        <transition
                            mode="out-in"
                            enter-active-class="animated fadeIn"
                            leave-active-class="animated fadeOut faster"
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
import Notification from './components/Notification.vue';

export default {
    components: {
        UserCard,
        Notification,
    },
    props: {
        source: String,
    },
    computed: {
        TopBar() {
            return this.$store.getters['Theme/TopBar'];
        },
        SideBar() {
            return this.$store.getters['Theme/SideBar'];
        },
        Global() {
            return this.$store.getters['Theme/Global'];
        },
    },
    data: () => ({
        ops: {
            vuescroll: { wheelScrollDuration: 200 },
            scrollPanel: {},
            rail: { background: '#000000' },
            bar: { background: '#888888', opacity: 0.6 , size:"10px"},
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
                to: '/JudgeStatus',
            },
            { icon: 'stars', text: '比赛',to:'/ContestList' },
            { icon: 'people', text: '社区' },
            { icon: 'chat', text: '论坛' },
        ],
    }),
    async mounted() {
        this.$store.dispatch('Auth/Init');
        if (this.$store.getters['Auth/isLogin']) {
            await this.$store.dispatch('User/Update');
            await this.$store.dispatch('User/UpdateUserData');
        }
    },
    methods: {
        SwitchClassicTheme() {
            this.$store.dispatch('Theme/SetClassic');
        },
        SwitchDarkTheme() {
            this.$store.dispatch('Theme/SetDark');
        },
        SwitchLightTheme() {
            this.$store.dispatch('Theme/SetLight');
        },
    },
    watch: {
        $route() {
            this.$refs.scroll.$el.scrollTop = 0;
        },
    },
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
