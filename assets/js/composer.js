const Composer = {

  compose(story){

    const answers = story.answers;

    return {

      collection: story.collection || "royal",

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
