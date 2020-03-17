<template>
    <v-card color="primary" dark style="margin: 100px 400px 100px 400px;">
        <v-card-title>登录</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-container>
                <v-form ref="form" v-model="valid">
                    <v-row>
                        <v-text-field
                            prepend-inner-icon="mdi-account-circle"
                            label="用户名/邮箱"
                            :rules="[rules.required]"
                            :value="username"
                            v-model='username'
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
                            v-model='password'
                            class="input-group--focused"
                            @click:append="show = !show"
                        ></v-text-field>
                    </v-row>
                </v-form>
                <v-row>
                    <v-col>
                        <v-btn :disabled="!valid" color="success" @click='Login'>登录</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn color="blue">注册</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import {AuthData }from '../store/modules/auth'
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
            this.login_button_loading=true;
            const username = this.username;
            const password = this.password;
            const Payload:AuthData = {Username:username,Password:password}
            this.$store.dispatch('Auth/Login',{username,password}).then(()=>this.$router.push('/'))
        }
    },
    created(){
        if(this.$store.getters["Auth/isLogin"])
            this.$router.push('/')
    }
});
</script>

<style>
</style>
