const show_carousel = Vue.createApp({
    template:
        `<div id="carouselExampleCaptions" class="container carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" v-for="(item,key) in carousel_data" :data-bs-slide-to="key" :class="key==0? 'active':''" :aria-current="key==0? 'true':'false'" :aria-label="'Slide ' + key"></button>
            </div>
            <div class="carousel-inner">
                <div v-for=" (item,key) in carousel_data" :class="key==0? 'carousel-item active':'carousel-item'" >
                    <img :src="item.src" class="d-block" style="margin: auto;" :alt="item.name">
                    <!--<div class="carousel-caption d-none d-md-block">
                        <h5>{{item.name}}</h5>
                        <p>{{item.description}}</p>
                    </div>-->
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>`,

    data() {
        return {
            carousel_data: []
        }
    },

});