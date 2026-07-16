const SceneEngine = {
  build(storyData) {
    const story = storyData;

    const storyCopy =
      StoryFactory.get(story.storyIdentity);

    const recipientReveal =
      StoryFactory.getRecipientReveal(
        story.storyIdentity,
        story.recipient.name
      );

    const middleCopy =
      StoryFactory.getMiddleScenes(
        story.storyIdentity
      );

    const timing =
      StoryFactory.getTiming(
        story.storyIdentity
      );

    const photoStyle =
      StoryFactory.getPhotoStyle(
        story.storyIdentity
      );

    return [
      {
  type: "hero",
  label: storyCopy.opening.label,
  title: storyCopy.opening.title,
  text: storyCopy.opening.text,
  duration: timing.opening,
  transition: "fade",
  background: "royal",
  image: null
},

{
  type: "hero",
  label: recipientReveal.label,
  title: recipientReveal.title,
  text: recipientReveal.text,
  duration: timing.reveal,
  transition: "fade",
  background: "royal",
  image: null
},

{
  type: "photo",
  label: "A Memory",
  title: "",
  text: "",
  duration: timing.photo,
  transition: "fade",
  background: "royal",
  image: "assets/wife.jpg",
  photoClass: photoStyle.className,
  imageAlt: photoStyle.alt
},
      
      {
  type: "feeling",
  label: middleCopy.feeling.label,
  title: middleCopy.feeling.title,
  text: story.emotion.feeling,
  duration: timing.feeling,
  transition: "fade",
  background: "royal",
  image: null
},

      {
  type: "memory",
  label: middleCopy.memory.label,
  title: middleCopy.memory.title,
  text: story.memory.text,
  duration: timing.memory,
  transition: "fade",
  background: "royal",
  image: null
},

      {
  type: "message",
  label: middleCopy.message.label,
  title: middleCopy.message.title,
  text: story.message.text,
  duration: timing.message,
  transition: "fade",
  background: "royal",
  image: null
},

      {
  type: "closing",
  label: storyCopy.closing.label,
  title: storyCopy.closing.title,
  text: storyCopy.closing.text,
  duration: timing.closing,
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
