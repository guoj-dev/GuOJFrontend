<template>
  <v-card style=" width:100%; height:100%;" tile flex dark grey darken-3>
    <v-carousel>
    <v-carousel-item
      v-for="Slide in Slides"
      :key="Slide"
    >
      <v-sheet
        :color="Slide[0]"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ Slide[1] }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
  data: () => {
    return {
        Slides: [
          ['primary','GuOJ'],
          ['secondary','GuOJ'],
          ['yellow darken-2','GuOJ'],
          ['red','GuOJ'],
          ['orange','GuOJ'],
        ],
    };
  }
});
</script>

<style>
.mainpage {
  height: 100%;
}
</style>
