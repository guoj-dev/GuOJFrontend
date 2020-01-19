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
                            :value="password"
                            v-model='password'
                            class="input-group--focused"
                            @click:append="show = !show"
                        ></v-text-field>
                    </v-row>
                </v-form>
                <v-row>
                    <v-col cols="2">
                        <v-btn :disabled="!valid" color="success" @click='Login'>登录</v-btn>
                    </v-col>
                    <v-col cols="2">
                        <v-btn color="blue">注册</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
export default Vue.extend({
    components: {},
    data: () => {
        return {
            valid: true,
            show: false,
            username: "",
            password: "",
            rules: {
                required: (value: String) => !!value || "必填",
                min: (value: String) => value.length >= 8 || "至少8个字符"
            }
        };
    },
    methods: {
        getCookie (name:String) {
      var value = '; ' + document.cookie
      var parts = value.split('; ' + name + '=')
      if (parts.length === 2) return parts.pop().split(';').shift()
    },
        async Login() {
            const username = this.username;
            const password = this.password;
            const store=this.$store
            const router=this.$router
            axios
                .post("/auth/login/", { username: username, password: password },{headers: {'X-CSRFToken': this.getCookie('csrftoken')}})
                .then(function(response) {
                  axios.get('/auth/user').then(function(response){
                    store.commit('Login',response.data.pk)
                  }).catch(function(error){})
                  router.push('/')
                })
                .catch(function(error) {
                    axios
                        .post("/auth/login/", {
                            email: username,
                            password: password
                        })
                        .then(function(response) {router.push('/')})
                        .catch(function(error) {alert(error)});
                });
        }
    }
});
</script>

<style>
</style>
