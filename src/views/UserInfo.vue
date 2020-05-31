<template>
    <v-container>
        <v-sheet
            :dark="BreadCrumbs.Dark"
            :light="!BreadCrumbs.Dark"
            :color="BreadCrumbs.Color"
            class="d-inline-flex"
        >
            <v-breadcrumbs
                class="px-4 py-2"
                :items="items"
            ></v-breadcrumbs> </v-sheet
        ><v-card class="mx-auto align-center justify-center my-2" color="primary">
            <v-hover v-slot:default="{ hover }">
                <v-img
                    :aspect-ratio="16 / 3"
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590858935353&di=a450e4ad7048aeb4755130fefa1759cd&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F00d8ed59901d9ca801215603610a20.jpg"
                >
                    <v-expand-transition>
                        <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out grey darken-4 v-card--reveal display-3 white--text"
                            style="height: 100%;align-items: center;bottom: 0;justify-content: center;opacity: 0.5;position: absolute;width: 100%;"
                        >
                            <v-btn icon large class="mx-4"
                                ><v-icon>mdi-image-area</v-icon></v-btn
                            >
                            <v-btn icon large class="mx-4"
                                ><v-icon>mdi-account-settings</v-icon></v-btn
                            >
                            <v-btn icon large class="mx-4"
                                ><v-icon>mdi-circle-edit-outline</v-icon></v-btn
                            >
                        </div>
                    </v-expand-transition>
                </v-img>
            </v-hover>
            <v-card
                    dark
                    elevation="12"
                    color="primary"
                    class="pa-3"
                    transition="slide-y-reverse-transition"
                >
                    <div class="d-flex grow flex-wrap">
                        <v-sheet
                            class="text-start v-card--material__heading mb-n6 ml-2"
                            dark
                            width="auto"
                            max-height="200"
                            elevation="6"
                            color="warning"
                            style="top:-60px;"
                        >
                            <v-avatar color="orange" size="100" tile>
                                <v-img
                                    src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=836144167,1831801329&fm=26&gp=0.jpg"
                                />
                            </v-avatar>
                        </v-sheet>
                        <span class="display-1 px-6">Quank</span>
                        <div class="flex-grow-1"></div>
                    </div>

                    <v-divider />

                    <v-card light class="ma-2 pa-2">
                        Quank
                    </v-card>
                </v-card>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    components: {},
    data: () => {
        return {
            items: [
                {
                    text: 'GuOJ',
                    disabled: false,
                    to: { path: '/' },
                },
                {
                    text: '用户',
                    disabled: true,
                },
            ],
            Username: 'null',
        };
    },
    computed: {
        BreadCrumbs() {
            return this.$store.getters['Theme/BreadCrumbs'];
        },
    },
});
</script>

<style scoped>
.mainpage {
    height: 100%;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
