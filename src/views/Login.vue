<template>
    <v-card color="primary" light style="margin: 100px 400px 100px 400px;">
        <v-card-title>登录</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-form
            ref="form"
      v-model="valid">
            <v-row>
              <v-text-field
            label="用户名/邮箱"
            :rules="[rules.required]"
            :value="username"
          ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :rules="[rules.required,rules.min]"
            :type="show ? 'text' : 'password'"
            label="密码"
            hint="至少8个字符"
            :value="password"
            class="input-group--focused"
            @click:append="show = !show"
          ></v-text-field>
            </v-row>
            </v-form>
            <v-row>
              <v-col cols="2">
              <v-btn :disabled="!valid" color="success">登录</v-btn>
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

export default Vue.extend({
  components: {},
  data: () => {
    return {
      valid: true,
      show: false,
      username:"",
      password:"",
      rules: {
        required: (value:String) => !!value || '必填',
        min: (value:String) => value.length>=8 || '至少8个字符',
      }
    };
  },
});
</script>

<style>

</style>
