const Atmosphere = {
  selected: "nostalgic",

  options: {
    calm: {
      label: "Calm",
      description: "A quiet moment to reflect."
    },
    nostalgic: {
      label: "Nostalgic",
      description: "For memories that still make you smile."
    },
    romantic: {
      label: "Romantic",
      description: "For the moments that changed your life."
    },
    hopeful: {
      label: "Hopeful",
      description: "For stories that deserve another beginning."
    }
  },

  set(type) {
    this.selected = type;
    localStorage.setItem("luminaAtmosphere", type);
  },

  get() {
    return localStorage.getItem("luminaAtmosphere") || this.selected;
  }
};
function chooseAtmosphere(type){
  Atmosphere.set(type);

  const messages = {
    nostalgic: {
      title: "Memories have a quiet way of staying with us.",
      text: "Today, let’s revisit one together."
    },
    romantic: {
      title: "I’m glad you’re here.",
      text: "Some thoughts stay in our hearts for years. Let’s turn them into something meaningful."
    },
    calm: {
      title: "What a wonderful reason to be here.",
      text: "Let’s create something worthy of this moment."
    },
    hopeful: {
      title: "Every new chapter deserves a meaningful beginning.",
      text: "Let’s take the first step together."
    }
  };

  const selected = messages[type];

  document.getElementById("atmosphereArea").innerHTML = `
    <div class="small">Lumina</div>
    <h1>${selected.title}</h1>
    <p style="color:#d8c7a5; line-height:1.7; margin-top:20px;">
      ${selected.text}
    </p>
  `;

  setTimeout(() => {
    document.getElementById("atmosphereArea").style.display = "none";
    document.getElementById("creatorArea").style.display = "block";
    Conversation.start(LUMINA);
  }, 4500);
}
