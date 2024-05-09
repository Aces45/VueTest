app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `
    <div class="border">
        <button class="button" @click="toggleReviews()" style="margin: 0">
            <span v-if="showReviews">Hide reviews</span>
            <span v-else="!showReviews">Show reviews</span>
        </button>
        <div v-if="showReviews">
            <h3>Reviews: ({{ reviews.length }})</h3>
            <!--<img v-for="item in reviews.length" :src="creamPuffs[Math.floor(Math.random() * creamPuffs.length)]">-->
            <ul style="padding-left: 0">
                <li v-for="(review, index) in reviews" :key="index" style="list-style-type:none; margin-bottom: 3rem; white-space:nowrap">
                    <div style="height: 30px; margin-bottom: 3rem; text-wrap: wrap">
                        <div style="display: flex; flex-direction: row;">{{review.name}} gave this <img v-for="index in review.rating" src="./images/star.png" style="height:20px; width: 20px; border: 0px; margin: 0 4px" :key="index"><span v-if="review.rating == 1">star!</span> <span v-else>stars!</span></div>
                    <p style="font-style:italic; font-weight: bold">"{{ review.review }}"</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    `,
    data() {
        return {
            creamPuffs: [
                './images/creampuff1.png',
                './images/creampuff2.png',
                './images/creampuff3.png',
                './images/creampuff4.png',
                './images/creampuff5.png'
            ],
            showReviews: true
        }
    },
    methods: {
        toggleReviews() {
            this.showReviews = !this.showReviews;
        }
    },
});