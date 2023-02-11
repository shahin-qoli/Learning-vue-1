const state = {
    funds: 1000,
    stocks: []

}
const mutations = {
    'BUY_STOCK' (state, {stockId, quantity, stockPrice }) {
        const record = state.stocks.find(element => element.id == stockId)
        
        if(record){
            record.quantity += quantity
        }
        else{
            state.stocks.push({id: stockId, quantity: quantity})
        }
        state.funds -= quantity * stockPrice
        
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice }){
        const record = this.stocks.find(element => element.id == stockId)
        if(record.quantity > quantity){
            record.quantity -= quantity
        }
        else{
            this.stocks.splice(this.stocks.indexOf(record),1)

        }
        this.funds += quantity * stockPrice
    }

}

const actions = {
    sellStock ({commit}, order){
        commit('SELL_STOCK', order);
    }
};

const getters ={
    stockPortfolio(state, getters){
        console.log(getters)
        return state.stocks.map(stock => {
            console.log(stock)
            console.log(getters)
            const record = getters.stocks.find( element => element.id === stock.id)
            
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            };
        });
    },
    fund(state) {
        return state.funds;
    }
};

export default{
    state,
    mutations,
    actions,
    getters
}