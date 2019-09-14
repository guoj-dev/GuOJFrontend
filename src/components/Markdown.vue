<template>
    <mavon-editor v-model="value"/>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"Markdown",
    data: ()=>{
        value:"#GuOJ"
    }
})
</script>

<style lang="sass">

</style>