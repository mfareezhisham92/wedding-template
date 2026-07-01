const SceneEngine = {

  build(storyData) {
    const story = storyData;

    return [
      {
  type: "hero",
  label: "",
  title: "Before anything else...",
  text: "",
  duration: 4500,
  transition: "fade",
  background: "royal",
  image: null
},

{
  type: "hero",
  label: "",
  title: "This was created<br>for someone<br>who matters.",
  text: "",
  duration: 6000,
  transition: "fade",
  background: "royal",
  image: null
},

{
  type: "hero",
  label: "From the heart",
  title: `For ${story.recipient.name}`,
  text: "Some people make life feel warmer just by being part of it.",
  duration: 6500,
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
        text: story.emotion.feeling,
        duration: 6000,
        transition: "fade",
        background: "royal",
        image: null
      },

      {
        type: "memory",
        label: "A memory worth keeping",
        title: "One moment that still stays with me",
        text: story.memory.text,
        duration: 8000,
        transition: "fade",
        background: "royal",
        image: null
      },

      {
        type: "message",
        label: "From the heart",
        title: "What I want you to know",
        text: story.message.text,
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
