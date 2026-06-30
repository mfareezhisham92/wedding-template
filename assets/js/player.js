const Renderers = {
  text(moment) {
    return `
      <section class="moment active">
        <div class="label">${moment.label || ""}</div>
        <h1>${moment.title || ""}</h1>
        <p>${moment.text || ""}</p>
      </section>
    `;
  },

  hero(moment) {
    return this.text(moment);
  },

  feeling(moment) {
    return this.text(moment);
  },

  memory(moment) {
    return this.text(moment);
  },

  message(moment) {
    return this.text(moment);
  },

  closing(moment) {
    return this.text(moment);
  },

  photo(moment) {
    return `
      <section class="moment active photo-moment">
        <img src="${moment.image}" alt="Memory photo">
      </section>
    `;
  }
};

const Player = {
  moments: [],
  current: 0,
  timer: null,

  start() {
    this.moments = JSON.parse(localStorage.getItem("luminaScenes") || "[]");

    if (!this.moments.length) {
      document.getElementById("stage").innerHTML = `
        <section class="moment active">
          <h1>No experience found</h1>
          <p>Please create a story in Lumina Creator first.</p>
        </section>
      `;
      return;
    }

    this.show();
  },

  show() {
    const moment = this.moments[this.current];
    const stage = document.getElementById("stage");
    const renderer = Renderers[moment.type] || Renderers.text;

    stage.classList.add("fade-out");

    setTimeout(() => {
      stage.innerHTML = renderer.call(Renderers, moment);
      stage.classList.remove("fade-out");
      stage.classList.add("fade-in");

      setTimeout(() => {
        stage.classList.remove("fade-in");
      }, 900);
    }, 500);

    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.next();
    }, moment.duration || 6000);
  },

  next() {
    this.current++;

    if (this.current >= this.moments.length) {
      this.finish();
      return;
    }

    this.show();
  },

  finish() {
    const stage = document.getElementById("stage");

    stage.classList.add("fade-out");

    setTimeout(() => {
      stage.innerHTML = `
        <section class="moment active">
          <div class="label">Lumina</div>
          <h1>Thank You</h1>
          <p>
            We hope this small experience reminded you how meaningful your relationship already is.
          </p>
        </section>
      `;

      stage.classList.remove("fade-out");
      stage.classList.add("fade-in");
    }, 500);
  }
};

window.onload = () => {
  Player.start();
};
