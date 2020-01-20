<template>
    <div>
        <div v-if="islogin">
            <v-row no-gutters>
            <v-card class="hidden-sm-and-down" dark color="blue">
                <v-row no-gutters>
                    <v-col cols="3" style="margin:2px 4px 2px 4px;">
                        <v-avatar height="36" width="36">
                            <v-img :src='avatar'></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col cols="5" style="margin:16px 4px 0px 4px;">
                        <div style="font-size:4px;">{{Username()}}</div>
                        <v-progress-linear :value="ExperincePercent"></v-progress-linear>
                        <div style="font-size:3px;">
                            <v-icon small color="yellow">monetization_on</v-icon>
                            {{Coins()}}
                        </div>
                    </v-col>
                    <v-col cols="2" style="margin:6px 4px 0px 4px;">
                        <v-menu
                v-model="expand"
                offset-y="true"
                close-on-click="true"
                close-on-content-click="true"
            >
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on" rounded icon small><v-icon color='white'>mdi-menu-down</v-icon></v-btn>
                </template>
                <v-list color='cyan' dark dense shaped>
                    <v-list-item-group v-model="item" color="primary">
                    <v-list-item inactive="false">
                        <v-icon>mdi-account-card-details-outline</v-icon>用户信息
                        
                    </v-list-item>
                    <v-list-item @click="logout" inactive="false">

                       <v-icon>mdi-logout</v-icon>注销
                        
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
                    </v-col>
                </v-row>
            </v-card>
            </v-row>
        </div>
        <div v-else>
            <v-btn color="primary" to="/Login">登录</v-btn>
            <v-btn style="margin:12px;" color="green">注册</v-btn>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import auth from '@/api/auth'
export default Vue.extend({
    props: {
        
    },
    data() {
        return {
            Username: String,
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
        Coins() {
            return -8000;
        },
        logout() {
            auth.logout();
        },
    },
    computed: {
        ExperincePercent(): Number {
            return 75;
        },
        CheckColor(): String {
            return "purple darken-5";
        },
        MedalColor(): String {
            return "color:" + "grey" + ";";
        },
        islogin(): Boolean {
            //alert(this.$store.state.auth.islogin)
            return this.$store.state.auth.islogin;
        }
    },
    async created() {
        const store = this.$store;
        var username = String;
        var _this=this;
        //alert(this.$store.state.auth.islogin)
        await axios
            .get("/auth/user")
            .then(function(response) {
                if (!store.state.islogin&&response.data.pk)
                    store.commit("Login", response.data.pk);
                username = response.data.username;
            })
            .catch(function(error) {
                store.commit("SetNotLogin");
            });
        this.Username = username;
        await axios.get('/api/users/'+this.$store.state.auth.id).then(function(response){
            _this.avatar=response.data.Avatar

        })
        //alert(store.state.auth.islogin)
    },
});
</script>

<style>
</style>