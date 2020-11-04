<template>
    <v-container class="pb-0">
        <v-row>
            <v-col>
                <v-card elevation="12" class="animated fadeIn">
                    <v-carousel>
                        <v-carousel-item
                            v-for="(Slide, i) in Slides"
                            :key="i"
                            :src="Slide.Background"
                        >
                            <v-sheet :color="Slide.Color" height="100%" tile>
                                <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                >
                                    <div class="display-3">
                                        {{ Slide.Title }}
                                    </div>
                                </v-row>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </v-card>
            </v-col>
        </v-row>
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" lg="3">
                    <material-stats-card
                        :color="Theme.Cards.Color"
                        icon="mdi-calendar-check-outline"
                        title="签到"
                        value="365Days"
                        sub-icon="mdi-check-circle-outline"
                        sub-text="今日已签到"
                        class="animated fadeInUp"
                        :dark="Theme.Cards.Dark"
                    ></material-stats-card>
                </v-col>
                <v-col cols="12" sm="6" lg="3">
                    <material-stats-card
                        :color="Theme.Cards.Color"
                        sheetcolor="yellow darken-2"
                        class="animated fadeInUp"
                        style="animation-delay: 0.1s"
                        icon="mdi-new-box"
                        title="今日新题"
                        smallValue="0题"
                        sub-icon="mdi-checkbox-multiple-marked-circle"
                        sub-text="今天也是充满干劲的一天"
                        :dark="Theme.Cards.Dark"
                    ></material-stats-card>
                </v-col>
                <v-col cols="12" sm="6" lg="3">
                    <material-stats-card
                        :color="Theme.Cards.Color"
                        sheetcolor="red"
                        class="animated fadeInUp"
                        style="animation-delay: 0.2s"
                        icon="mdi-calendar-blank"
                        title="今日比赛"
                        value="0场"
                        sub-icon="mdi-card-bulleted"
                        sub-text="今日无事可做"
                        :dark="Theme.Cards.Dark"
                    ></material-stats-card>
                </v-col>
                <v-col cols="12" sm="6" lg="3">
                    <material-stats-card
                        :color="Theme.Cards.Color"
                        class="animated fadeInUp"
                        style="animation-delay: 0.3s"
                        icon="mdi-checkbox-marked-circle-outline"
                        title="To-Do"
                        value="0题"
                        sub-icon="mdi-format-list-checks"
                        sub-text="任务完成了"
                        :dark="Theme.Cards.Dark"
                    ></material-stats-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MaterialStatsCard from '../components/MaterialStatsCard.vue';

@Component({
    components: {
        MaterialStatsCard,
    },
})
export default class Home extends Vue {
    FortuneColor = 'green';

    get Slides() {
        return this.$store.getters['Slides/SlidesObject'];
    }

    get Theme() {
        return this.$store.getters['Theme/Home'];
    }

    mounted() {
        this.$store.dispatch('Slides/UpdateSlides');
    }
}
</script>

<style>
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
.ps {
    height: 100%;
}
</style>
