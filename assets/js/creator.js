let currentStep = 0;
const answers = {};

const titleEl = document.getElementById("questionTitle");
const subtitleEl = document.getElementById("questionSubtitle");
const inputEl = document.getElementById("answerInput");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progressText");

function loadStep(){
  const step = LUMINA.creatorJourney[currentStep];

  titleEl.innerText = step.title;
  subtitleEl.innerText = step.subtitle || "";
  inputEl.placeholder = step.placeholder || "";
  inputEl.value = answers[step.id] || "";

  progressEl.innerText = `Step ${currentStep + 1} of ${LUMINA.creatorJourney.length}`;
  nextBtn.innerText =
    currentStep === LUMINA.creatorJourney.length - 1
      ? "Build Experience"
      : "Continue";
}

function nextStep(){
  const step = LUMINA.creatorJourney[currentStep];
  answers[step.id] = inputEl.value.trim();

  if(!answers[step.id]){
    alert("Take your time. This part matters.");
    return;
  }

  if(currentStep < LUMINA.creatorJourney.length - 1){
    currentStep++;
    loadStep();
  }else{
    buildStory();
  }
}

function buildStory(){
  const storyData = {
    company: LUMINA.company.name,
    collection: "royal",
    createdAt: new Date().toISOString(),
    answers
  };

  localStorage.setItem("luminaStory", JSON.stringify(storyData, null, 2));

  document.getElementById("creatorArea").style.display = "none";
  document.getElementById("resultArea").style.display = "block";
  document.getElementById("storyOutput").innerText =
    JSON.stringify(storyData, null, 2);
}

nextBtn.addEventListener("click", nextStep);
loadStep();
