const Composer = {
  compose(story = {}) {
    const answers = story.answers || {};

    const experienceId =
      localStorage.getItem("luminaExperienceId") ||
      story.experienceId ||
      "custom";

    const experience =
      typeof getExperienceById === "function"
        ? getExperienceById(experienceId)
        : null;

    const atmosphere =
      typeof Atmosphere !== "undefined" &&
      typeof Atmosphere.get === "function"
        ? Atmosphere.get()
        : "warm";

    const experienceProfile = {
      id: experience?.id || experienceId,
      name:
        experience?.name ||
        "Lumina Experience",
      icon:
        experience?.icon ||
        "✨",
      category:
        experience?.category ||
        "Meaningful Moment"
    };

    const storyIdentity = {
      purpose:
        experience?.id ||
        experienceId,

      role:
        localStorage.getItem("luminaRole") ||
        story.role ||
        "default",

      style:
        experience?.experienceStyle ||
        "personal",

      emotion:
        experience?.category ||
        "Meaningful Moment",

      tone:
        experience?.journey ||
        atmosphere,

      collection:
        experience?.collection ||
        "royal"
    };

    const narrative =
      this.composeNarrative({
        experienceId,
        answers,
        storyIdentity
      });

    return {
      storyIdentity,

      experience:
        experienceProfile,

      collection:
        storyIdentity.collection,

      collectionProfile:
        typeof Director !== "undefined" &&
        typeof Director.getCollection === "function"
          ? Director.getCollection(
              storyIdentity.collection
            )
          : null,

      atmosphere,

      media: {
        photo:
          localStorage.getItem("luminaPhoto") ||
          "assets/wife.jpg"
      },

      recipient: {
        name:
          answers.recipient ||
          answers.guests ||
          ""
      },

      emotion: {
        feeling:
          answers.feeling ||
          answers.celebration ||
          ""
      },

      memory: {
        text:
          answers.memory ||
          ""
      },

      message: {
        text:
          answers.message ||
          answers.welcome ||
          narrative.invitation
      },

      narrative
    };
  },

  composeNarrative({
    experienceId,
    answers,
    storyIdentity
  }) {
    if (
  experienceId === "wedding" ||
  experienceId === "wedding-couple" ||
  experienceId === "wedding-host"
) {
      return this.composeWeddingHost(
        answers,
        storyIdentity
      );
    }

    return this.composeDefaultNarrative(
      answers,
      storyIdentity
    );
  },

  composeWeddingHost(
    answers,
    storyIdentity
  ) {
    const guests =
      this.cleanText(
        answers.guests ||
        answers.recipient
      );

    const celebration =
      this.cleanText(
        answers.celebration ||
        answers.feeling
      );

    const welcome =
      this.cleanText(
        answers.welcome ||
        answers.message
      );

    const opening = guests
      ? `Some moments become more meaningful when shared with ${this.lowercaseFirst(
          guests
        )}.`
      : "Some moments become more meaningful when shared with the people who matter most.";

    const invitation = celebration
      ? `As we begin this new chapter together, we hope our celebration will feel ${this.lowercaseFirst(
          celebration
        )}.`
      : "As we begin this new chapter together, we hope to celebrate it surrounded by warmth, happiness and the people we love.";

    const closing = welcome
      ? welcome
      : "Our celebration would not be complete without you. We would be honoured to have you with us.";

    return {
      type: "wedding-host",

      coreMessage:
        "Our celebration would not be complete without you.",

      opening,
      invitation,
      closing,

      emotion:
        "welcoming",

      tone:
        storyIdentity.tone ||
        "warm and elegant",

      pace:
        "gentle"
    };
  },

  composeDefaultNarrative(
    answers,
    storyIdentity
  ) {
    const opening =
      this.cleanText(
        answers.memory
      ) ||
      "Some moments deserve to be remembered.";

    const invitation =
      this.cleanText(
        answers.message
      ) ||
      "This experience was created to express something meaningful.";

    return {
      type:
        storyIdentity.purpose ||
        "custom",

      coreMessage:
        invitation,

      opening,

      invitation,

      closing:
        invitation,

      emotion:
        this.cleanText(
          answers.feeling
        ) ||
        storyIdentity.emotion ||
        "meaningful",

      tone:
        storyIdentity.tone ||
        "personal",

      pace:
        "gentle"
    };
  },

  cleanText(value) {
    if (typeof value !== "string") {
      return "";
    }

    return value.trim();
  },

  lowercaseFirst(value) {
    const text =
      this.cleanText(value);

    if (!text) {
      return "";
    }

    return (
      text.charAt(0).toLowerCase() +
      text.slice(1)
    );
  }
};
