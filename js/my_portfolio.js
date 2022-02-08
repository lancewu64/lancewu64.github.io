const portfolio_area = Vue.createApp({
    template:
        `<ul class="nav nav-tabs">
            <li v-for="(item,key) in portfolio" :class="key==portfolio_key? 'nav-item active':'nav-item'">
                <a :class="key==portfolio_key? 'nav-link active':'nav-link'" aria-current="page" href="#" v-on:click="change_portfolio(key)">{{item.name}}</a>
            </li>
        </ul>
        <div class="mt-2 mb-2 d-flex flex-wrap">
            <div v-for="(item,key) in get_items(portfolio_key)" class="m-1">
                <input type="radio" class="btn-check" name="APP-options" :id="key" autocomplete="off" :checked="key==item_key" v-on:click="change_item(key)">
                <label class="btn btn-outline-info" :for="key">{{item.name}}</label>
            </div>
        </div>
        <div class=" bg-primary" id="APP_item_data" style="height: 600px;">
        </div>
        `,
    data() {

        return {
            portfolio_key: 0,
            item_key: 0,
            portfolio: []
        }
    },
    methods: {
        change_portfolio: function (index) {
            this.portfolio_key = index;
        },
        change_item: function (index) {
            this.item_key = index;
        },
        get_items: function (index) {

            if (this.portfolio.length != 0) {
                // console.log(this.portfolio);
                return this.portfolio[index].items;
            } else {
                return [];
            }
        }
    }

});