import {fetchData} from "./components/TheDataMiner.js";
import Project from "./components/Projects.js";

(() => {
    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app"
        data: {
        portfolio: []
        },

        mounted: function() {
            console.log("Vue is mounted!");
            fetchData("./includes/index.php")
                .then(data => {
                    data.forEach(pj => this.portfolio.push(pj));
                })
                .catch(err => console.error(err)); 
        },

        updated: function() {
            console.log('Vue just updated the DOM');
        },

        components: {
            "pj-card": Project
        }

    }).$mount("#app"); // also connects Vue to your wrapper in HTML
    
})();