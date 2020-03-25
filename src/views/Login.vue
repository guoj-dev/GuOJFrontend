<template>
    <v-container class="fill-height justify-center align-center">
        <v-card light style="width:450px;">
            <v-card-title>
                <v-icon left>mdi-login</v-icon>登录
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-container class="py-0">
                    <v-form ref="form" v-model="valid">
                        <v-row>
                            <v-text-field
                                prepend-inner-icon="mdi-account-circle"
                                label="用户名/邮箱"
                                :rules="[rules.required]"
                                :value="username"
                                v-model="username"
                            ></v-text-field>
                        </v-row>
                        <v-row>
                            <v-text-field
                                prepend-inner-icon="mdi-key-outline"
                                :append-icon="show ? 'visibility' : 'visibility_off'"
                                :rules="[rules.required,rules.min]"
                                :type="show ? 'text' : 'password'"
                                label="密码"
                                hint="至少8个字符"
                                :loading="login_button_loading"
                                :value="password"
                                v-model="password"
                                class="input-group--focused"
                                @click:append="show = !show"
                            ></v-text-field>
                        </v-row>
                    </v-form>
                    <v-row>
                        <v-col>
                            <v-btn block :disabled="!valid" color="success" @click="Login">登录</v-btn>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-divider></v-divider>
                    </v-row>
                    <v-row class="d-flex">
                        <v-col>
                            <v-btn color="black" outlined class="me-4">
                                <v-icon left>mdi-github</v-icon>GitHub
                            </v-btn>
                            <v-btn color="blue" outlined class="me-4">
                                <v-icon left>mdi-microsoft</v-icon>Microsoft
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { AuthData } from "../store/modules/auth";
export default Vue.extend({
    components: {},
    data: () => {
        return {
            valid: true,
            show: false,
            login_button_loading: false,
            username: String(""),
            password: String(""),
            rules: {
                required: (value: String) => !!value || "必填",
                min: (value: String) => value.length >= 8 || "至少8个字符"
            }
        };
    },
    methods: {
        Login() {
            this.login_button_loading = true;
            const username = this.username;
            const password = this.password;
            const Payload: AuthData = {
                Username: username,
                Password: password
            };
            this.$store
                .dispatch("Auth/Login", { username, password })
                .then(() => this.$router.push("/"));
        }
    },
    created() {
        if (this.$store.getters["Auth/isLogin"]) this.$router.push("/");
    }
});
</script>

<style>
</style>
