<template>
    <v-snackbar
        v-model="snackbar"
        bottom="true"
        :color="color"
        :timeout="timeout"
    >
        {{ text }}
        <v-btn dark text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue';
export default {
    data() {
        return {
            snackbar: false,
            color: 'error',
            text: 'Error',
            timeout: 5000,
        };
    },
    computed: {
        NotificationExists() {
            return this.$store.getters['Notifucation/NotificationExists'];
        },
        Color() {
            return this.$store.getters['Notification/Color'];
        },
        Text() {
            return this.$store.getters['Notification/Text'];
        },
        Timeout() {
            return this.$store.getters['Notification/Timeout'];
        },
    },
    watch: {
        snackbar(val) {
            if (val == false) {
                this.$store.dispatch('Notification/EndNotification');
                if (this.NotificationExists) {
                    this.color = this.Color;
                    this.text = this.Text;
                    this.timeout = this.Timeout;
                    this.snackbar = true;
                }
            }
        },
    },
};
</script>
