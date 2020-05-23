 
<template>
  <card :icon="icon" class="v-card--material-stats" v-bind="$attrs" v-on="$listeners" :color="color" :sheetcolor="sheetcolor">
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

    <span :class="subTextColor" class="caption  font-weight-light" v-text="subText" />
  </card>
</template>

<script lang="ts">
import Vue from 'vue';
import Card from './MaterialCard.vue';

export default {
    name: 'MaterialStatsCard',
    inheritAttrs: false,
    components:{Card},
    props: {
        icon: {
            type: String,
            required: true
        },
        subIcon: {
            type: String,
            default: undefined
        },
        subIconColor: {
            type: String,
            default: undefined
        },
        subTextColor: {
            type: String,
            default: undefined
        },
        subText: {
            type: String,
            default: undefined
        },
        title: {
            type: String,
            default: undefined
        },
        value: {
            type: String,
            default: undefined
        },
        smallValue: {
            type: String,
            default: undefined
        },
        color: {
            type: String,
            default: 'primary'
        },
        sheetcolor: {
            type: String,
            default: 'success'
        }
    }
};
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