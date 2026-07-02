const Conversation = {
  step: 0,
  answers: {},

  start(journey) {
  this.journey = journey;
  this.config = journey.reflections;
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
  `${current.chapter || "Reflection"} · ${this.step + 1} of ${this.config.length}`;

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
document.getElementById("studioArea").style.display = "block";
document.getElementById("studioSummary").innerHTML = `
  <strong>For:</strong> ${this.answers.recipient}<br><br>
  <strong>Feeling:</strong> ${this.answers.feeling}<br><br>
  <strong>Memory:</strong><br>${this.answers.memory}<br><br>
  <strong>Message:</strong><br>${this.answers.message}
`;    
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
function openPreview(){

  document.getElementById("studioArea").style.display = "none";
  document.getElementById("craftingArea").style.display = "block";

  const title = document.getElementById("craftTitle");
  const text = document.getElementById("craftText");

  const moments = [

    {
      title:"Your words have been collected.",
      text:""
    },

    {
      title:"Every meaningful memory deserves a thoughtful presentation.",
      text:""
    },

    {
      title:"This is the first time you'll experience your own story.",
      text:""
    }

  ];

  let i = 0;

  function next(){

    title.style.opacity = 0;
    text.style.opacity = 0;

    setTimeout(()=>{

      title.innerText = moments[i].title;
      text.innerText = moments[i].text;

      title.style.opacity = 1;
      text.style.opacity = 1;

      i++;

      if(i < moments.length){

        setTimeout(next,2500);

      }else{

        setTimeout(()=>{

          window.location.href="experience.html";

        },2500);

      }

    },700);

  }

  next();

}
