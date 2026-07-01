const Conversation = {
  step: 0,
  answers: {},

  start(config) {
    this.config = config.creatorJourney;
    this.render();
  },

  render() {
    const current = this.config[this.step];

    document.getElementById("reflectionText").innerText = current.reflection || "";
    document.getElementById("questionTitle").innerText = current.title;
    document.getElementById("answerInput").placeholder = current.placeholder || "";
    document.getElementById("answerInput").value = this.answers[current.id] || "";
    document.getElementById("encouragementText").innerText = current.encouragement || "";

    document.getElementById("progressText").innerText =
      `Reflection ${this.step + 1}`;

    document.getElementById("nextBtn").innerText =
      this.step === this.config.length - 1
        ? "Craft My Experience"
        : "Continue";

    this.renderDots();
  },

  renderDots() {
    const dots = document.getElementById("dots");
    dots.innerHTML = "";

    this.config.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.className = "dot" + (index <= this.step ? " active" : "");
      dots.appendChild(dot);
    });
  },

  next() {
    const current = this.config[this.step];
    const input = document.getElementById("answerInput");
    const value = input.value.trim();

    if (!value) {
      alert("Take your time. This part matters.");
      return;
    }

    this.answers[current.id] = value;

    if (this.step < this.config.length - 1) {
      this.step++;
      this.transition();
    } else {
      this.finish();
    }
  },

  transition() {
    const card = document.getElementById("card");
    card.classList.remove("show");
    card.classList.add("fade");

    setTimeout(() => {
      this.render();
      card.classList.remove("fade");
      card.classList.add("show");
      document.getElementById("answerInput").focus();
    }, 450);
  },

  finish() {
  const story = {
    collection: "royal",
    createdAt: new Date().toISOString(),
    answers: this.answers
  };

  localStorage.setItem("luminaStory", JSON.stringify(story));

  const composedStory = Composer.compose(story);
    composedStory.storyStyle = Director.arrange(composedStory);

  SceneEngine.saveScenes(composedStory);

  document.getElementById("creatorArea").style.display = "none";
  document.getElementById("craftingArea").style.display = "block";

  setTimeout(() => {
    window.location.href = "experience.html";
  }, 3500);
}
};

document.getElementById("nextBtn").addEventListener("click", () => {
  Conversation.next();
});

document.getElementById("answerInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    Conversation.next();
  }
});
