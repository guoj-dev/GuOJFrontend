<template>
    <div>
        <div v-if="islogin">
            <v-card :dark="Theme.Dark" :light="!Theme.Dark" :color="Theme.Color">
                <v-container no-gutters class="pa-1">
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col no-gutters cols="auto">
                            <v-avatar size="40" class="ma-1">
                                <img :src="Avatar" />
                            </v-avatar>
                        </v-col>
                        <v-col no-gutters cols="auto" class="mx-1">
                            <v-row no-gutters justify="center" class="flex-column ma-0">
                                <v-col>
                                    {{ Username }}
                                    <v-chip
                                        v-if="Nameplate"
                                        x-small
                                        label
                                        :color="NameplateColor"
                                        style="padding: 4px;"
                                    >{{ Nameplate }}</v-chip>
                                </v-col>
                                <v-col>
                                    <v-chip x-small color="grey darken-3">
                                        <v-icon
                                            left
                                            color="yellow darken-2"
                                            small
                                        >mdi-alpha-c-circle-outline</v-icon>
                                        {{ Coins }}
                                    </v-chip>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn flat icon x-small v-on="on">
                                        <v-icon>mdi-dots-vertical</v-icon>
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
            <v-btn
                :dark="Theme.LoginButton.Dark"
                :light="!Theme.LoginButton.Dark"
                :color="Theme.LoginButton.Color"
                :outlined="Theme.LoginButton.Outlined"
                :rounded="Theme.LoginButton.Rounded"
                to="/Login"
            >登录</v-btn>
            <v-btn
                style="margin: 12px;"
                :dark="Theme.RegisterButton.Dark"
                :light="!Theme.RegisterButton.Dark"
                :color="Theme.RegisterButton.Color"
                :outlined="Theme.RegisterButton.Outlined"
                :rounded="Theme.RegisterButton.Rounded"
                to="/Register"
            >注册</v-btn>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import Axios from 'axios';

@Component
export default class UserCard extends Vue {
    expand: Boolean;
    avatar: String;
    items = [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
    ];

    logout() {
        this.$store.dispatch('Auth/Logout');
    }

    get Username(): String {
        return this.$store.getters['User/Username'];
    }

    get Avatar(): String {
        return this.$store.getters['User/Avatar'];
    }

    get Coins(): Number {
        return this.$store.getters['User/Coins'];
    }

    get islogin(): Boolean {
        return this.$store.getters['Auth/isLogin'];
    }

    get NameColor(): String {
        return this.$store.getters['User/NameColor'];
    }

    get Nameplate(): String {
        return this.$store.getters['User/Nameplate'];
    }

    get NameplateColor(): String {
        return this.$store.getters['User/NameplateColor'];
    }

    get Theme() {
        return this.$store.getters['Theme/Usercard'];
    }

    @Watch('islogin')
    async onIsloginChanged(val) {
        if (this.$store.getters['Auth/isLogin']) {
            await this.$store.dispatch('User/Update');
            await this.$store.dispatch('User/UpdateUserData');
        }
    }

    mounted() {
        //alert(this.$store.getters)
    }
}
</script>

<style></style>
