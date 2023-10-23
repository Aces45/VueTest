app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template:
        /*html */
        `<ul>
            <li v-for="item in details"> {{item}} </li>
        </ul>`
});