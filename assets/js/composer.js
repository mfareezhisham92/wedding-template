const Composer = {
  compose(story) {
    const answers = story.answers;

    const experienceId =
      localStorage.getItem("luminaExperienceId");

    const experience =
      getExperienceById(experienceId);

    const experienceProfile = {
      id: experience?.id || "custom",
      name: experience?.name || "Lumina Experience",
      icon: experience?.icon || "✨",
      category: experience?.category || "Meaningful Moment"
    };

    const storyIdentity = {
  purpose: experience?.id || "custom",

  role:
    localStorage.getItem("luminaRole") ||
    "default",

  emotion:
    experience?.category ||
    "Meaningful Moment",

  tone:
    experience?.journey ||
    Atmosphere.get(),

  collection:
    experience?.collection ||
    "royal"
};

    return {
      storyIdentity,

      experience: experienceProfile,

      collection: storyIdentity.collection,

      collectionProfile:
        Director.getCollection(Atmosphere.get()),

      atmosphere: Atmosphere.get(),

      media: {
  photo:
    localStorage.getItem("luminaPhoto") ||
    "assets/wife.jpg"
},
      
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
