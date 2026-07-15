const Composer = {
  compose(story){

    const answers = story.answers;

    const experienceId =
      localStorage.getItem("luminaExperienceId");

    const experience =
      getExperienceById(experienceId);

    return {
      experience: {
        id: experience?.id || "custom",
        name: experience?.name || "Lumina Experience",
        icon: experience?.icon || "✨",
        category: experience?.category || "Meaningful Moment"
      },

      collection: story.collection || "royal",

      collectionProfile:
        Director.getCollection(Atmosphere.get()),

      atmosphere: Atmosphere.get(),

      recipient: {
        name: answers.recipient
      },

      emotion: {
        feeling: answers.feeling
      },

      memory: {
        text: answers.memory
      },

      message: {
        text: answers.message
      }
    };
  }
};
