<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}}
                    <small>(Price: {{stock.price}})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger: inSufficent}">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" @click="buyStock" :disabled="quantity <= 0|| inSufficent" >
                     {{ inSufficent ? 'inSufficent' : 'Buy'}} 
                    </button>
                </div>
               
            </div>
        </div>
    </div>
</template>
<style scoped>
    .danger {
        border: 1px solid red;
    }
    .success {
        border: 1px solid orange;
    }
</style>

<script>
    export default{
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed:{
            inSufficent(){
                return this.quantity * this.stock.price > this.$store.getters.funds
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: Number(this.quantity)

                };
                console.log(order);
                this.$store.dispatch('buyStock', order)
                this.quantity = 0;

            }
        }
    }
</script>