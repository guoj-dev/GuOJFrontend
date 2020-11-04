<template>
    <div class="v-snack v-snack--active v-snack--bottom">
            <transition-group name="notification-list" style="margin: 0 auto;">
                <div
                    class="ma-4 d-flex v-snack__wrapper notification-list-item"
                    v-for="(item,index) in NotificationList"
                    :key="item"
                >
                    <v-btn
                        icon
                        right
                        class="mr-2"
                        small
                        @click="NotificationList.splice(index,1)"
                    >
                        <v-icon small>
                            mdi-close
                        </v-icon>
                    </v-btn>
                    <span class="ma-2">
                        {{ item.Text }}
                    </span>
                </div>
            </transition-group>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Notification extends Vue {
    NotificationList = [];
}
</script>

<style scoped>
.notification-wrapper {
    align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    margin: 0 auto;
    z-index: inherit;
}
.notification-list-move {
    transition: transform 0.5s;
}
.notification-list-item {
  transition: all 0.5s;
  display: inline-block;
}
.notification-list-enter-active,
.notification-list-leave-active {
    transition: all 0.5s;
    position: absolute;
}
.notification-list-enter, .notification-list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
}
</style>
