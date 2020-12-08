export default {
    name: "Project",
    props: ["pj"],

    //data needs to be a function inside a component

    data: function(){
        return{
            removeAformat: true,
            showPjInfo: false,
            currentPjData: {},
            
            title: this.pj.title,
            thumbnail: this.pj.thumbnail,
            category: this.pj.category,
            //Inside Lightbox
            year: this.pj.year,
            team: this.pj.team,
            tools: this.pj.tools,
            objective: this.pj.objective,
            approach: this.pj.approach,
            image1: this.pj.image1,
            image2: this.pj.image2,
            image3: this.pj.image3,
            image4: this.pj.image4,
            image5: this.pj.image5,
            video: this.pj.video,
            video2: this.pj.video2,
            video3: this.pj.video3
        }
    },

    template: 
            `<div class="workDiv">
                <div class="work" >
                    <a href="" @click.prevent="showPjData(pj)" :class="{'pj-button-modifier' : removeAformat}"><img :src="'images/' + pj.thumbnail" :alt='pj.title + "image"'></a>
                    <div class="summary">
                        <h3>{{ pj.title }}</h3>
                        <h4>{{ pj.category }}</h4>
                    </div>
                </div>

                <div class="pj-data" :class="{'show-pj' : showPjInfo}">

                    <span class="close-lb" @click.prevent="showPjData(pj)" :class="{'pj-button-modifier' : removeAformat}">x</span>
      
                    <h3>{{ pj.title }}</h3>
                    <p class="category">{{ pj.category }}</p>

                    <div class="pjInfo">
                        <h4>Year</h4>
                        <p>{{ pj.year }}</p>
                    </div>
                    <div class="pjInfo">
                        <h4>Team</h4>
                        <p>{{ pj.team }}</p>
                    </div>
                    <div class="pjInfo">
                        <h4>Tools</h4>
                        <p>{{ pj.tools }}</p>
                    </div>
                    <div class="pjInfo">
                        <h4>Objective</h4>
                        <p>{{ pj.objective }}</p>
                    </div>
                    <div class="pjInfo">
                        <h4>Approach</h4>
                        <p>{{ pj.approach }}</p>
                    </div>
                    <div class="pjMedia">
                        <img :src="'images/' + pj.image1" :alt='pj.title + "image"'>
                        <img :src="'images/' + pj.image2" :alt='pj.title + "image"'>
                        <img :src="'images/' + pj.image3" :alt='pj.title + "image"'>
                        <img :src="'images/' + pj.image4" :alt='pj.title + "image"'>
                        <img :src="'images/' + pj.image5" :alt='pj.title + "image"'>
                    </div>
                    <div class="pjMedia">
                        <video controls>
                            <source :src="'video/' + pj.video" type="video/mp4">
                            <p>Sorry, your browser doesn't support the video.</p>
                        </video>
                        <video controls>
                            <source :src="'video/' + pj.video2" type="video/mp4">
                            <p>Sorry, your browser doesn't support the video.</p>
                        </video>
                        <video controls>
                            <source :src="'video/' + pj.video3" type="video/mp4">
                            <p>Sorry, your browser doesn't support the video.</p>
                        </video>
                    </div>
                </div>
            </div>
              `,
    created: function(){
        console.log(`created ${this.pj.name}'s card`);
    },

    methods: {
        logClicked(){
            console.log(`fired from inside the ${this.pj.name} component`);
        },

        closeLB(target){
            console.log("hide the Data lightbox");
            this.$delete(this.pj, target);
        },

        showPjData(target) {
            console.log('clicked to view data', target, target.name);
            this.showPjInfo = this.showPjInfo ? false : true;
            this.currentPjData = target;
        }
    }
}