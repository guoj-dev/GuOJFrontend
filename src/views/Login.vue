<template>
    <v-container
        class="d-flex flex-column fill-height justify-center align-center"
    >
        <v-row class="my-6">
            <v-card color="primary" dark style="min-width: 450px;" class="pa-3">
                <div class="d-flex grow flex-wrap">
                    <v-sheet
                        class="text-start v-card--material__heading mb-n6 pa-7"
                        dark
                        width="auto"
                        max-height="90"
                        elevation="6"
                        color="success"
                    >
                        <v-icon size="32">mdi-login</v-icon>
                    </v-sheet>
                    <v-card-title>
                        <span>登录</span>
                    </v-card-title>
                    <div class="flex-grow-1"></div>
                </div>
                <v-divider></v-divider>
                <v-container>
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
                                    :append-icon="
                                        show ? 'visibility' : 'visibility_off'
                                    "
                                    :rules="[rules.required, rules.min]"
                                    :type="show ? 'text' : 'password'"
                                    label="密码"
                                    hint="至少8个字符"
                                    :loading="login_button_loading"
                                    :value="password"
                                    v-model="password"
                                    class="input-group--focused"
                                    @click:append="show = !show"
                                    @click="login_button_loading = true"
                                ></v-text-field>
                            </v-row>
                        </v-form>
                        <v-row>
                            <v-col>
                                <v-btn
                                    block
                                    :disabled="!valid"
                                    color="success"
                                    @click="Login"
                                    >登录</v-btn
                                >
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-divider></v-divider>
                        </v-row>
                        <v-row class="d-flex">
                            <v-col>
                                <v-btn color="black" class="me-4">
                                    <v-icon left>mdi-github</v-icon>GitHub
                                </v-btn>
                                <v-btn color="blue" class="me-4">
                                    <v-icon left>mdi-microsoft</v-icon>Microsoft
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-container>
            </v-card>
        </v-row>
        <v-row class="my-2">
            <v-card color="primary" dark style="min-width: 450px;">
                <v-container>
                    <v-container class="d-flex justify-space-between pa-0">
                        <v-col>
                            <v-btn block color="blue">忘记密码</v-btn>
                        </v-col>
                        <v-col>
                            <v-btn block color="blue" to="/Register"
                                >注册</v-btn
                            >
                        </v-col>
                    </v-container>
                </v-container>
            </v-card>
        </v-row>
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
                min: (value: String) => value.length >= 8 || "至少8个字符",
            },
        };
    },
    methods: {
        Login() {
            this.login_button_loading = true;
            const username = this.username;
            const password = this.password;
            const Payload: AuthData = {
                Username: username,
                Password: password,
            };
            this.$store
                .dispatch("Auth/Login", { username, password })
                .then(() => this.$router.push("/"));
        },
    },
    created() {
        if (this.$store.getters["Auth/isLogin"]) this.$router.push("/");
    },
});
</script>

<style lang="css">
.v-card--material__heading 
{
    position: relative;
    top: -40px;
    transition: 0.3s ease;
    z-index: 1;
}
</style>
