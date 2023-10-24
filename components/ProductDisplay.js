app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="product" style="display: flex; flex-direction: row; flex-wrap: nowrap; padding: 3% 5%">            
            <div class="product-image">
                <img :src="[variantStock ? image : outOfStock]" :title="imgdesc"
                    :style="{height: imgheight, width: imgwidth}" style="transition: all 0.2s">
            </div>

            <div class="product-info">

                <h1>{{title}}</h1>
                <button class="choice-box" style="font-weight: bold;" v-on:click="toggleSale()">Toggle Sale</button>
                <h2>
                    <div v-if="onSale">
                        <span style="text-decoration: line-through">
                            ₱{{price}}
                        </span>
                        ₱{{discountPrice}}
                    </div>
                    <div v-else> ₱{{price}}</div>
                </h2>
                <h3 v-show="onSale" style="color:red">On Sale!! {{100-(discountPrice/price)*100}}% off!!</h3>

                <!-- {{productStatus}} -->
                
                <p v-if="variantStock > 10" style="color:green"> In Stock: {{variantStock}} </p>
                <p v-else-if="variantStock <=10 && variantStock > 0" style="color:orange"> Almost sold out!
                    {{variantStock}} left</p>
                <p v-else style="color:red">Out Of Stock</p>          

                <p> Shipping: {{Shipping}}</p>
                
                <product-details :details="details"/>

                <p>Sizes:</p>
                <div style="display: flex; flex-direction: row; gap: 1%">
                    <div class="choice-box" v-for="size in sizes" @mouseover="scaleImage(size.scale)" @click="scaleImage(size.scale)">
                        {{size.size}}
                    </div>
                </div>
            
                <p>Variants:</p>
                <div style="display:flex; flex-direction: column; gap: 1rem">
                    <div v-for="(variant, index) in variants">
                        <div style="display: flex; flex-direction: row; align-items: center; gap: 2%; ">
                            <div class="color-circle" @mouseover="updateVariant(index)" @click="updateVariant(index)"
                                :style="{backgroundColor: variant.color}">
                            </div>
                            <button class="choice-box" :class="{disabledButton: !inStock(index)}" @click="addToCart(index)"
                            :disabled="!inStock(index)">
                            Add to Cart <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
    data() {
        return {
            brand: 'Vue Learning',
            product: 'Socks',
            details: ['Washable and dries quickly', 'Clean af', 'Made of soft fabric'],
            selectedVariant: 0,
            outOfStock: './images/out-of-stock.png',
            imgdesc: 'This is a pair of socks.',
            sizes: [
                { size: 'XS', scale: '300px' },
                { size: 'S', scale: '350px' },
                { size: 'M', scale: '400px' },
                { size: 'L', scale: '450px' },
                { size: 'XL', scale: '500px' }
            ],
            variants: [
                { id: 1, color: 'Green', imgpath: './images/vmSocks-green.png', quantity: 50 },
                { id: 2, color: 'Blue', imgpath: './images/vmSocks-blue.png', quantity: 0 },
            ],
            imgheight: '500px',
            imgwidth: '500px',

            onSale: true,
            items: 0,
            price: 250,
            discountPrice: 200
        }
    },
    methods: {
        toggleSale(onSale) {
            this.onSale = !this.onSale;
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        scaleImage(variantScale) {
            this.imgheight = variantScale;
            this.imgwidth = variantScale;
        },
        addToCart(index) {
            const itemToAdd = { product: this.product, color: this.variants[index].color, quantity: 1 };
            this.addItemToCart(itemToAdd);
            // this.variants[this.selectedVariant].quantity--;
            // this.cart.push(variantColor, variantSize, 1);
        },
        inStock(index) {
            return (this.variants[index].quantity != 0) ? true : false;
        }
    },
    computed: {
        // selectedVariant(){

        // },
        image() {
            return this.variants[this.selectedVariant].imgpath;
        },
        variantStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        title() {
            if (this.onSale) {
                return this.brand + ' ' + this.product;
            }
            else return this.product;
        },
        Shipping() {
            if (this.premium) {
                return 'Free'
            }
            return '$2.99'
        },
        productStatus() {
            const { quantity } = this.variants[this.selectedVariant];
            if (quantity >= 10) {
                return 'In Stock: ' + quantity;
            }
            else if (quantity < 10 && quantity > 0)
                return 'Almost sold out!:' + quantity;
            else if (quantity = 0)
                return 'Out of Stock';
        }
    },
    inject: ["addItemToCart"]
});