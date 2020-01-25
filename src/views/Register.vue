<template>
    <v-card color="primary" dark style="margin: 100px 400px 100px 400px;">
        <v-card-title>注册</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-container>
                <v-form ref="form" v-model="valid">
                    <v-row>
                        <v-text-field
                            prepend-inner-icon="mdi-account-circle"
                            label="用户名"
                            :rules="[rules.required]"
                            :value="username"
                            v-model='username'
                        ></v-text-field>
                    </v-row>
                    <v-row>
                        <v-text-field
                            prepend-inner-icon="mdi-email"
                            label="邮箱"
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
                            :value="password"
                            v-model='password'
                            class="input-group--focused"
                            @click:append="show = !show"
                        ></v-text-field>
                        <v-text-field
                            prepend-inner-icon="mdi-key-outline"
                            :rules="[rules.required,rules.min]"
                            type="false"
                            label="重复密码"
                            hint="至少8个字符"
                            :value="password"
                            v-model='password'
                            class="input-group--focused"
                        ></v-text-field>
                    </v-row>
                    <v-row>
                        
                    </v-row>
                </v-form>
                <v-row>
                    <v-col cols="2">
                        <v-btn :disabled="!valid" color="success" @click='Register'>注册</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "@/api/session";
import auth from '@/api/auth'
export default Vue.extend({
    components: {},
    data: () => {
        return {
            valid: true,
            show: false,
            email: "",
            username: "",
            password: "",
            password_repeat: "",
            rules: {
                required: (value: String) => !!value || "必填",
                min: (value: String) => value.length >= 8 || "至少8个字符"
            }
        };
    },
    methods: {
        Register() {
            const email = this.email
            const username = this.username;
            const password = this.password;
            const password_repeat = this.password_repeat
            //this.$store.dispatch('Login',{username,password}).then(()=>this.$router.push('/'))
        }
    }
});
</script>

<style>
</style>
