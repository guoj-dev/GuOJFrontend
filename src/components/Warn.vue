<template>
    <v-snackbar v-model="snackbar" bottom="true" :color="color" :timeout="timeout">
        {{ text }}
        <v-btn dark text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
</template>

<script lang="ts">
import Vue from "vue";
export default {
    data() {
        return {
            snackbar: false,
            color: "error",
            text: "Error",
            timeout: 5000
        };
    },
    computed: {
        SnackbarEvent() {
            return this.$store.getters["Warn/SnackbarEvent"];
        },
        Color() {
            return this.$store.getters["Warn/Color"];
        },
        Text() {
            return this.$store.getters["Warn/Text"];
        },
        Timeout() {
            return this.$store.getters["Warn/Timeout"];
        }
    },
    watch: {
        SnackbarEvent(val) {
            if (val == true) {
                this.color = this.Color;
                this.text = this.Text;
                this.timeout = this.Timeout;
                this.snackbar = val;
            }
        },
        snackbar(val) {
            if (val == false) {
                this.$store.dispatch("Warn/EndWarn");
            }
        }
    }
};
</script>