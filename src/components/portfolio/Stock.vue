<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}}
                    <small>(Price: {{stock.price}}) | Quantity: {{ stock.quantity }}</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" @click="sellStock" :disabled="quantity <= 0 || inSuffQuan" >{{inSuffQuan ? 'insufff' : 'sell'}}</button>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>
// import { mapActions } from 'vuex'
    export default{
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed:{
            inSuffQuan(){
                return this.quantity > this.stock.quantity
            }
        },
        methods: {
            // ...mapActions([
            //         'sellStock'
            //         ]),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    quantity: this.quantity,
                    stockPrice: this.stock.price

                }
                // this.sellStock(order)
                this.$store.dispatch('sellStock', order)
                this.quantity = 0;

            }
        }
    }
</script>