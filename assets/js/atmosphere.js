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

  document.getElementById("atmosphereArea").style.display = "none";
  document.getElementById("creatorArea").style.display = "block";

  Conversation.start(LUMINA);
}
