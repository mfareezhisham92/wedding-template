const Renderers = {
  text(moment) {
    return Components.moment(
      Components.label(moment.label) +
      Components.title(moment.title) +
      Components.paragraph(moment.text)
    );
  },

  hero(moment) { return this.text(moment); },
  feeling(moment) { return this.text(moment); },
  memory(moment) { return this.text(moment); },
  message(moment) { return this.text(moment); },
  closing(moment) { return this.text(moment); },

  photo(moment) {
  return Components.moment(
    Components.photo(
      moment.image,
      moment.photoClass,
      moment.imageAlt,
      moment.duration
    )
  );
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

    this.showMoment();
  },

  showMoment() {
    const stage = document.getElementById("stage");
    const moment = this.moments[this.current];
    const renderer = Renderers[moment.type] || Renderers.text;

    stage.classList.remove("fade-out", "fade-in");
    stage.innerHTML = renderer.call(Renderers, moment);

    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.nextMoment();
    }, moment.duration || 6000);
  },

  nextMoment() {
    const stage = document.getElementById("stage");

    stage.classList.add("fade-out");

    setTimeout(() => {
      this.current++;

      if (this.current >= this.moments.length) {
        this.finish();
        return;
      }

      stage.classList.remove("fade-out");
      this.showMoment();
    }, 800);
  },

  finish() {
    const stage = document.getElementById("stage");

    stage.classList.remove("fade-out", "fade-in");

    stage.innerHTML = `
      <section class="moment active">
        <div class="label">Lumina</div>
        <h1>Thank You</h1>
        <p>
          We hope this small experience reminded you how meaningful your relationship already is.
        </p>
      </section>
    `;
  }
};

window.onload = () => {
  Player.start();
};
