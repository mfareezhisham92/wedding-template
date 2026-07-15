const SceneEngine = {

  build(storyData) {
    const story = storyData;

    const storyCopy = StoryFactory.get(story.storyIdentity);

    const recipientReveal =
  StoryFactory.getRecipientReveal(
    story.storyIdentity,
    story.recipient.name
  );

    const middleCopy =
  StoryFactory.getMiddleScenes(
    story.storyIdentity
  );

    return [
      {
  type: "hero",
  label: storyCopy.opening.label,
  title: storyCopy.opening.title,
  text: storyCopy.opening.text,
  duration: 6500,
  transition: "fade",
  background: "royal",
  image: null
},

{
  type: "hero",
  label: recipientReveal.label,
  title: recipientReveal.title,
  text: recipientReveal.text,
  duration: 6500,
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
  label: middleCopy.feeling.label,
  title: middleCopy.feeling.title,
  text: story.emotion.feeling,
  duration: 6000,
  transition: "fade",
  background: "royal",
  image: null
},

      {
  type: "memory",
  label: middleCopy.memory.label,
  title: middleCopy.memory.title,
  text: story.memory.text,
  duration: 8000,
  transition: "fade",
  background: "royal",
  image: null
},

      {
  type: "message",
  label: middleCopy.message.label,
  title: middleCopy.message.title,
  text: story.message.text,
  duration: 8000,
  transition: "fade",
  background: "royal",
  image: null
},

      {
  type: "closing",
  label: storyCopy.closing.label,
  title: storyCopy.closing.title,
  text: storyCopy.closing.text,
  duration: 7000,
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
