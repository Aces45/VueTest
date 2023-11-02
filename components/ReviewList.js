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
    <h3>Reviews: ({{ reviews.length }})</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index" style="list-style-type:none; margin-bottom: 3rem">
                <div style="height: 30px; margin-bottom: 2rem; text-wrap: wrap">
                    <div style="display: flex; flex-direction: row">{{review.name}} gave this <img v-for="index in 5" src="./images/star.png" style="height:20px; width: 20px; border: 0px; margin: 0 4px" :key="index"> stars!</div>
                    <p>"{{ review.review }}"</p>
                </div>
            </li>
        </ul>
    </div>
    `
});