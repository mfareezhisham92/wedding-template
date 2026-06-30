const Composer = {

  compose(story){

    return {

      recipient: story.answers.recipient,

      feeling: story.answers.feeling,

      memory: story.answers.memory,

      message: story.answers.message,

      mood: Atmosphere.get(),

      collection: story.collection || "royal"

    };

  }

};
