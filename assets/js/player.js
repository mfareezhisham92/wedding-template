const Player = {

    moments: [],
    current: 0,
    timer: null,

    start(){

        this.moments = JSON.parse(
            localStorage.getItem("luminaScenes") || "[]"
        );

        if(!this.moments.length){

            document.getElementById("stage").innerHTML =
            "<h2>No experience found.</h2>";

            return;

        }

        this.show();

    },

    show(){

        const moment = this.moments[this.current];

        const stage = document.getElementById("stage");

        stage.innerHTML = `
            <section class="moment active">

                <div class="label">
                    ${moment.label}
                </div>

                <h1>
                    ${moment.title}
                </h1>

                <p>
                    ${moment.text}
                </p>

            </section>
        `;

        clearTimeout(this.timer);

        this.timer = setTimeout(()=>{

    this.next();

}, moment.duration || 5000);

    },

    next(){

        this.current++;

        if(this.current >= this.moments.length){

            this.finish();

            return;

        }

        this.show();

    },

    finish(){

        document.getElementById("stage").innerHTML = `

        <section class="moment active">

            <h1>
            Thank You
            </h1>

            <p>

            We hope this small experience
            reminded you how meaningful
            your relationship already is.

            </p>

        </section>

        `;

    }

};

window.onload=()=>{

    Player.start();

};
