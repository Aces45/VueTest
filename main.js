const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,            
        }
    },
    methods: {
        // checkCart() {
        //     this.cart.find(())
        // },
        // addItemToCart(item) {
        //     this.cart.push(item);
        // },
        updateCart(item) {
            const variantExists = this.cart.some(item =>
                this.cart.product == item.product
                && this.cart.color == item.color
                && this.cart.size == item.size);
            // const existingVariant = this.cart.filter((cartItem) => cartItem.indexOf(item.product));            

            // let variantExists = (existingVariant.length != 0);            
            //alert(existingVariant.length);

            if (variantExists) {
                const index = this.cart.findIndex(item =>
                    this.cart.product == item.product
                    && this.cart.color == item.color
                    && this.cart.size == item.size);
                alert("This is an existing cart item");
                this.cart[index].cartQuantity++;
            }
            else {
                alert("This is a new cart item");
                item.cartQuantity = 1;
            }
            item.cartQuantity = 1;
            this.cart.push(item);
        }        
    },
    computed: {

    },
    provide() {
        return {
            addItemToCart: this.addItemToCart
        }
    }
});
