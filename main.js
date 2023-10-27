const app = Vue.createApp({
    data() {
        return {
            cart: 1,
            premium: true,
        }
    },
    methods: {
        // checkCart() {
        //     this.cart.find(())
        // },
        addItemToCart(item) {
            this.cart.push(item);
        },
        updateCart(){
            this.cart += 1;
        }
    },
    provide() {
        return {
            addItemToCart: this.addItemToCart
        }
    }
});
