<template>
    <v-container>
        <v-card
            dark
            elevation="12"
            color="light-blue light-1"
            transition="slide-y-reverse-transition"
        >
            <v-card-title>
                <span>评测列表</span>
            </v-card-title>
            <v-container>
                <v-row v-for="key in Judges" :key="key">
                    <v-col>
                        <v-card dark color="primary" elevation="3" :to="'/JudgeStatus/'+key[0]">
                            <v-container style="padding: 0 4px 0 0;">
                                <v-row>
                                    <v-col>
                                        <v-card-title style="padding:0 0 0 12px;">
                                            <user-card-public></user-card-public>
                                            #{{key[0]}} {{key[1]}}
                                            <v-chip
                                                style="margin:0px 8px"
                                                :color="key[2][0]"
                                            >{{key[2][1]}}</v-chip>
                                        </v-card-title>
                                    </v-col>
                                    <v-col></v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
                <div class="text-center">
                    <v-pagination v-model="page" :length="4" light circle></v-pagination>
                </div>
            </v-container>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import UserCardPublic from '../components/UserCardPublic.vue';

export default Vue.extend({
    components: { UserCardPublic },
    data: () => {
        return {
            Judges: [
                ['1', 'A+B Problem', ['green', 'Accepted']],
                ['2', 'A+B Problem', ['green', 'Accepted']],
                ['3', 'A+B Problem', ['green', 'Accepted']],
                ['4', 'A+B Problem', ['green', 'Accepted']],
                ['5', 'A+B Problem', ['green', 'Accepted']],
                ['6', 'A+B Problem', ['green', 'Accepted']],
                ['7', 'A+B Problem', ['green', 'Accepted']],
                ['8', 'A+B Problem', ['green', 'Accepted']],
                ['9', 'A+B Problem', ['green', 'Accepted']]
            ],
            items: [
                {
                    text: 'GuOJ',
                    disabled: true,
                    href: '/'
                },
                {
                    text: 'ProblemSet',
                    disabled: true,
                    href: '/ProblemSet'
                }
            ]
        };
    }
});
</script>

<style>
.mainpage {
    height: 100%;
}
</style>
 