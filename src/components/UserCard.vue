<template>
    <div>
        <div v-if="islogin">
            <v-card dark color="blue">
                <v-container no-gutters style="padding:4px 12px 10px 12px">
                    <v-row no-gutters justify="space-between">
                        <v-col no-gutters cols="auto" >
                            <v-badge overlap bottom color="deep-purple accent-4" icon="mdi-vuetify">
                                <v-avatar size="40">
                                    <img :src="Avatar" />
                                </v-avatar>
                            </v-badge>
                        </v-col>
                        <v-col no-gutters cols="auto" style="margin:0px 8px 0px 8px;">
                            <v-row no-gutters justify="center"  class="flex-column ma-0 " >
                                <v-col>
                                    {{Username}}
                                    <v-chip v-if="Nameplate" small label :color="NameplateColor">{{Nameplate}}</v-chip>
                                </v-col>
                                <v-col>
                                    <v-chip small >
                                        <v-icon left color="yellow darken-2" small>mdi-alpha-c-circle-outline</v-icon>{{Coins}}
                                    </v-chip>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </div>
        <div v-else>
            <v-btn color="primary" to="/Login">登录</v-btn>
            <v-btn style="margin:12px;" color="green" to="/Register">注册</v-btn>
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
        NameColor(): String{
            return this.$store.getters["User/NameColor"];
        },
        Nameplate(): String{
            return this.$store.getters["User/Nameplate"];
        },
        NameplateColor(): String{
            return this.$store.getters["User/NameplateColor"];
        },
    },
    mounted() {
        //alert(this.$store.getters)
    }
});
</script>

<style>
</style>