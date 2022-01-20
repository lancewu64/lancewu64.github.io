
const show_header = Vue.createApp({
    template:
        `<div class="container" id="header_bar">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 ">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span class="fs-4"><button style="background-color:transparent; border: none;"><span class="text-light">LW</span></button></span>
                </a>

                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="/index.html" :class="current_page == 'index'? 'nav-link active':'nav-link'" :aria-current="current_page == 'index'? 'page':''">Home</a></li>
                    <li class="nav-item"><a href="/portfolio.html" :class="current_page == 'portfolio'? 'nav-link active':'nav-link'" :aria-current="current_page == 'portfolio'? 'page':''">Portfolio</a></li>
                    <li class="nav-item"><a href="/experience.html" :class="current_page == 'experience'? 'nav-link active':'nav-link'" :aria-current="current_page == 'experience'? 'page':''">Experience</a></li>
                    <li class="nav-item"><a href="/aboutme.html" :class="current_page == 'aboutme'? 'nav-link active':'nav-link'" :aria-current="current_page == 'aboutme'? 'page':''">About Me</a></li>
                </ul>
            </header>
        </div>`,

    data() {

        return {
            current_page: "index",
        }
    },
});

const info_area = Vue.createApp({
    template:
        `<div class="container">
            <div class="card mb-3" style="background-color:transparent; border: 0">
                <div class="row g-0">
                    <div>
                        <div class="card-body">
                            <h5 class="card-title text-light">{{info_area.msg}}</h5>
                            <p class="card-text text-light" style="white-space: pre-line;">{{info_area.description}}</p>
                            <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
    data() {
        return {
            info_area: { msg: "" }
        }
    },

});