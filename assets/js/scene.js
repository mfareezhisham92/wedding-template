const SceneEngine = {

  build(storyData) {
    const answers = storyData.answers;

    return [
      {
        type: "hero",
        label: "A Lumina Experience",
        title: `For ${answers.recipient}`,
        text: "Some people make life feel warmer just by being part of it.",
        duration: 6000,
        transition: "fade",
        background: "royal",
        image: null
      },

{
  type: "photo",
  label: "A memory",
  title: "",
  text: "",
  duration: 7000,
  transition: "fade",
  background: "royal",
  image: "assets/wife.jpg"
},
      
      {
        type: "feeling",
        label: "What matters",
        title: "This was created to make you feel",
        text: answers.feeling,
        duration: 6000,
        transition: "fade",
        background: "royal",
        image: null
      },

      {
        type: "memory",
        label: "A memory worth keeping",
        title: "One moment that still stays with me",
        text: answers.memory,
        duration: 8000,
        transition: "fade",
        background: "royal",
        image: null
      },

      {
        type: "message",
        label: "From the heart",
        title: "What I want you to know",
        text: answers.message,
        duration: 8000,
        transition: "fade",
        background: "royal",
        image: null
      },

      {
        type: "closing",
        label: "With appreciation",
        title: "You matter",
        text: "This is not about price. This is about meaning.",
        duration: 6000,
        transition: "fade",
        background: "royal",
        image: null
      }
    ];
  },

  saveScenes(storyData) {
    const scenes = this.build(storyData);
    localStorage.setItem("luminaScenes", JSON.stringify(scenes));
    return scenes;
  }

};
