const Conversation = {
  step: 0,
  answers: {},

  start(config) {
    this.config = config.creatorJourney;
    this.render();
  },

  render() {
    const current = this.config[this.step];

    document.getElementById("questionTitle").innerText = current.title;
    document.getElementById("questionSubtitle").innerText = current.subtitle || "";
    document.getElementById("answerInput").placeholder = current.placeholder || "";
    document.getElementById("answerInput").value = this.answers[current.id] || "";

    document.getElementById("progressText").innerText =
      `Step ${this.step + 1} of ${this.config.length}`;

    document.getElementById("nextBtn").innerText =
      this.step === this.config.length - 1 ? "Build Experience" : "Continue";
  },

  next() {
    const current = this.config[this.step];
    const value = document.getElementById("answerInput").value.trim();

    if (!value) {
      alert("Take your time. This part matters.");
      return;
    }

    this.answers[current.id] = value;

    if (this.step < this.config.length - 1) {
      this.step++;
      this.render();
    } else {
      this.finish();
    }
  },

  finish() {
    const story = {
      collection: "royal",
      createdAt: new Date().toISOString(),
      answers: this.answers
    };

    localStorage.setItem("luminaStory", JSON.stringify(story));
    SceneEngine.saveScenes(story);

    document.getElementById("creatorArea").style.display = "none";
    document.getElementById("resultArea").style.display = "block";
    document.getElementById("storyOutput").innerText =
      JSON.stringify(story, null, 2);
  }
};

document.getElementById("nextBtn").addEventListener("click", () => {
  Conversation.next();
});

Conversation.start(LUMINA);
