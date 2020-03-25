<template>
    <div>
        <div v-if="islogin">
            <v-card light color="white">
                <v-container no-gutters style="padding:2px 8px 2px 8px">
                    <v-row no-gutters justify="space-between">
                        <v-col no-gutters cols="auto">
                            <v-avatar size="40" style="margin:4px 0px 4px 0px;">
                                <img :src="Avatar" />
                            </v-avatar>
                        </v-col>
                        <v-col no-gutters cols="auto" style="margin:0px 4px 0px 4px;">
                            <v-row no-gutters justify="center" class="flex-column ma-0">
                                <v-col>
                                    {{Username}}
                                    <v-chip
                                        v-if="Nameplate"
                                        x-small
                                        label
                                        :color="NameplateColor"
                                        style="padding:4px;"
                                    >{{Nameplate}}</v-chip>
                                </v-col>
                                <v-col>
                                    <v-chip x-small color="grey lighten-3">
                                        <v-icon
                                            left
                                            color="yellow lighten-2"
                                            small
                                        >mdi-alpha-c-circle-outline</v-icon>
                                        {{Coins}}
                                    </v-chip>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn flat icon small v-on="on">
                                        <v-icon size="40px">mdi-chevron-down</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item @click="logout">
                                        <v-list-item-title>Logout</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </div>
        <div v-else>
            <v-btn color="white" to="/Login">登录</v-btn>
            <v-btn style="margin:12px;" color="white" to="/Register">注册</v-btn>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Axios from "axios";
export default Vue.extend({
    props: {},
    data() {
        return {
            expand: Boolean,
            avatar: String,
            items: [
                { title: "Click Me" },
                { title: "Click Me" },
                { title: "Click Me" },
                { title: "Click Me 2" }
            ]
        };
    },
    methods: {
        logout() {
            this.$store.dispatch("Auth/Logout");
        }
    },
    computed: {
        Username(): String {
            return this.$store.getters["User/Username"];
        },
        Avatar(): String {
            return this.$store.getters["User/Avatar"];
        },
        Coins(): Number {
            return this.$store.getters["User/Coins"];
        },
        islogin(): Boolean {
            return this.$store.getters["Auth/isLogin"];
        },
        NameColor(): String {
            return this.$store.getters["User/NameColor"];
        },
        Nameplate(): String {
            return this.$store.getters["User/Nameplate"];
        },
        NameplateColor(): String {
            return this.$store.getters["User/NameplateColor"];
        }
    },
    watch: {
        async islogin(val) {
            if (this.$store.getters["Auth/isLogin"]) {
                await this.$store.dispatch("User/Update");
                await this.$store.dispatch("User/UpdateUserData");
            }
        }
    },
    mounted() {
        //alert(this.$store.getters)
    }
});
</script>

<style>
</style>