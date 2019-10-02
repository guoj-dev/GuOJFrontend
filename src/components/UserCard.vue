<template>
    <v-card class="hidden-sm-and-down" dark color="blue">
        <v-row no-gutters>
            <v-col cols="4" style="padding:2px 4px 2px 4px;">
                <v-avatar height="36" width="36">
                    <img
                        src="https://cdn.v2ex.com/gravatar/275f907fb8dbf72131b4867378b1c707?s=1000&d=mm"
                        alt="avatar"
                    />
                </v-avatar>
            </v-col>
            <v-col cols="8" style="padding:2px 8px 2px 12px;">
                <div style="font-size:4px;">
                    {{Username}}
                    <v-icon v-if="CheckColor!='Null'" small :color="CheckColor">check_circle</v-icon>
                    <i class="fas fa-medal" :style="MedalColor"></i>
                </div>
                <v-progress-linear :value="ExperincePercent"></v-progress-linear>
                <div style="font-size:4px;">
                    <v-icon small color="yellow">monetization_on</v-icon>{{Coins}}
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    computed:{
        Coins():Number{
            return -8000;
        },
        ExperincePercent():Number{
            return 75;
        },
        CheckColor():String{
            return "purple darken-5"
        },
        MedalColor():String{
            return "color:"+"grey"+";"
        }
    }
});
</script>

<style>
</style>