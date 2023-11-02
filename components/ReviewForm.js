app.component('review-form', {
    template:
        /*html*/
        `
        <div class="border">
            <form class="reviewform" @submit.prevent="onSubmit">
            <h2>Leave a review</h2>
            <label for="name">Name: </label>
            <input id="name" v-model="name">
            <label for="review">Review: </label>
            <textarea id="review" v-model="review"></textarea>
            <br/><br/>
            <label for="rating">Rating: </label>
            <select id="rating" v-model.nummber="rating" style="height: 2rem; width: 20.5rem">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
            <br/><br/>
            <input type="submit" class="button" value="Submit">
            </form>
        </div>
        `,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null) {
                alert('Please fill out all the fields.');
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            };
            this.$emit('review-submitted', productReview);

            this.name = '';
            this.review = '';
            this.rating = null;
        }
    }
});