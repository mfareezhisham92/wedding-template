const SceneEngine = {

  build(storyData) {
    const answers = storyData.answers;

    return [
      {
        type: "opening",
        label: "A Lumina Experience",
        title: `For ${answers.recipient}`,
        text: "Some people make life feel warmer just by being part of it."
      },

      {
        type: "feeling",
        label: "What matters",
        title: "This was created to make you feel",
        text: answers.feeling
      },

      {
        type: "memory",
        label: "A memory worth keeping",
        title: "One moment that still stays with me",
        text: answers.memory
      },

      {
        type: "message",
        label: "From the heart",
        title: "What I want you to know",
        text: answers.message
      },

      {
        type: "closing",
        label: "With appreciation",
        title: "You matter",
        text: "This is not about price. This is about meaning."
      }
    ];
  },

  saveScenes(storyData) {
    const scenes = this.build(storyData);
    localStorage.setItem("luminaScenes", JSON.stringify(scenes));
    return scenes;
  }

};
