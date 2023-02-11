<template>
    <div>
    <h1>hi</h1>
    <hr>
    <p>Here is your fund : {{ funds | currency}}</p>
    </div>
</template>

<script>
    export default {
        computed:{
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>