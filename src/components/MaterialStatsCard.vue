 
<template>
    <card
        :icon="icon"
        class="v-card--material-stats"
        v-bind="$attrs"
        v-on="$listeners"
        :color="color"
        :sheetcolor="sheetcolor"
    >
        <template v-slot:after-heading>
            <div class="ml-auto text-left">
                <div class="body-3 font-weight-light" v-text="title" />

                <h3 class="display-1 font-weight-light">
                    {{ value }}
                    <small>{{ smallValue }}</small>
                </h3>
            </div>
        </template>

        <v-col cols="12" class="px-0" v-if="subIcon&&subText">
            <v-divider />
        </v-col>

        <v-icon :color="subIconColor" size="16" class="ml-2 mr-1">{{ subIcon }}</v-icon>

        <span :class="subTextColor" class="caption font-weight-light" v-text="subText" />
    </card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Card from './MaterialCard.vue';

@Component({
    components: {
        Card,
    },
    inheritAttrs: false,
})
export default class MaterialStatsCard extends Vue {
    @Prop({ type: String, required: true }) readonly icon: string;
    @Prop(String) readonly subIcon?: string;
    @Prop(String) readonly subIconColor?: string;
    @Prop(String) readonly subTextColor?: string;
    @Prop(String) readonly subText?: string;
    @Prop(String) readonly title?: string;
    @Prop(String) readonly value?: string;
    @Prop(String) readonly smallValue?: string;
    @Prop({ type: String, default: 'primary' }) readonly color: string;
    @Prop({ type: String, default: 'success' }) readonly sheetcolor: string;
}
</script>

<style lang="sass">
.v-card--material-stats
    display: flex
    flex-wrap: wrap
    position: relative
> div:first-child
    justify-content: space-between
.v-card
    border-radius: 4px
    flex: 0 1 auto
.v-card__text
    display: inline-block
    flex: 1 0 calc(100% - 120px)
    position: absolute
    top: 0
    right: 0
    width: 100%
.v-card__actions
    flex: 1 0 100%
</style>
