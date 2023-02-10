<template>
   <div>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
   </div>
</template>

<script>
    import Stock from './Stock.vue'
    export default {
        data() {
            return {
                stocks: [
                    {id: 1, name: "BMX", price: 1200},
                    {id: 2, name: "SAIPA", price: 200},
                    {id: 3, name: "IRCO", price: 100},
                    {id: 4, name: "BENZ", price: 1300}
                ]

            }
        },
        components:{
            appStock: Stock,
        }
    }

</script>