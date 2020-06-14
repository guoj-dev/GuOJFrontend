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
        ><v-card class="mx-auto align-center justify-center my-2" color="white">
            <v-hover v-slot:default="{ hover }">
                <v-img
                    :aspect-ratio="16 / 3"
                    src=""                    
                >
                    <v-expand-transition>
                        <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out grey darken-4 v-card--reveal display-3 white--text"
                            style="height: 100%;align-items: center;bottom: 0;justify-content: center;opacity: 0.7;position: absolute;width: 100%;"
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
                class="pa-3"
                transition="slide-y-reverse-transition"
                style="border-radius:0px;"
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
                                src=""
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
.blur {
    filter: blur(8px);
    -webkit-filter: blur(8px);
    -moz-filter: blur(8px);
    -o-filter: blur(8px);
    -ms-filter: blur(8px);
}
</style>
