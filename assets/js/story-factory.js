const StoryFactory = {
  stories: {
    anniversary: {
      opening: {
        label: "A Love Worth Celebrating",
        title: "Before anything else...",
        text: "This is a story about two people, shared memories, and a journey that continues."
      },
      closing: {
        label: "With All My Heart",
        title: "I Would Choose You Again",
        text: "Thank you for every memory behind us and every chapter still waiting ahead."
      }
    },

    "mothers-day": {
      opening: {
        label: "For Someone Irreplaceable",
        title: "Some love shapes our entire life.",
        text: "This was created for the woman whose care, sacrifices, and presence mean more than words can hold."
      },
      closing: {
        label: "With Gratitude",
        title: "Thank You, Mom",
        text: "For everything you gave, everything you carried, and every quiet way you loved."
      }
    },

    birthday: {
      opening: {
        label: "A Life Worth Celebrating",
        title: "Today is about someone special.",
        text: "Not only because it is their birthday, but because their presence makes life brighter."
      },
      closing: {
        label: "A Birthday Wish",
        title: "May This Year Be Kind to You",
        text: "May you always remember how appreciated, valued, and celebrated you truly are."
      }
    },

    wedding: {
      opening: {
        label: "A New Chapter",
        title: "Two lives are becoming one story.",
        text: "And the people who matter most are warmly invited to share the beginning."
      },
      closing: {
        label: "With Love",
        title: "Your Presence Would Mean So Much",
        text: "Thank you for being part of a day we will remember for the rest of our lives."
      }
    },

    teacher: {
      opening: {
        label: "A Lasting Influence",
        title: "Some lessons stay with us forever.",
        text: "This was created for someone whose guidance helped shape a life beyond the classroom."
      },
      closing: {
        label: "With Appreciation",
        title: "Thank You for Believing in Me",
        text: "Your lessons became part of who I am, and your influence will continue far beyond today."
      }
    },

    farewell: {
      opening: {
        label: "A Journey Remembered",
        title: "Goodbyes reveal what truly mattered.",
        text: "Before the next chapter begins, some memories deserve one more moment."
      },
      closing: {
        label: "Until We Meet Again",
        title: "You Will Be Remembered",
        text: "Distance may change where we are, but it cannot erase what we shared."
      }
    },

    newborn: {
      opening: {
        label: "A Beautiful Beginning",
        title: "A new little life has entered the world.",
        text: "And already, this tiny person has filled so many hearts with love."
      },
      closing: {
        label: "With Love and Hope",
        title: "Welcome to the World",
        text: "May your life be surrounded by kindness, joy, courage, and people who always remind you that you are loved."
      }
    },

    hope: {
      opening: {
        label: "A Message of Hope",
        title: "Sometimes one sincere message becomes a light.",
        text: "This was created to remind someone that they do not have to face the next chapter alone."
      },
      closing: {
        label: "Keep Going",
        title: "I Believe in You",
        text: "Even when the road feels uncertain, may these words remind you that someone sees your strength."
      }
    }
  },

  get(identity) {
  return this.stories[identity?.purpose] || {
    opening: {
      label: "A Lumina Experience",
      title: "Before anything else...",
      text: "This was created for someone who matters."
    },

    closing: {
      label: "With Appreciation",
      title: "You Matter",
      text: "May this experience remind you how meaningful your presence truly is."
    }
  };
},

getRecipientReveal(identity, recipientName) {
  const name = recipientName || "someone special";
  const purpose = identity?.purpose;

  const reveals = {
    anniversary: {
      label: "For the One I Choose",
      title: `For ${name}`,
      text: "For the person who has shared the ordinary days, unforgettable memories, and every chapter in between."
    },

    "mothers-day": {
      label: "For Someone Irreplaceable",
      title: `For ${name}`,
      text: "For the woman whose love has quietly shaped more of my life than words can explain."
    },

    birthday: {
      label: "Today, We Celebrate",
      title: `For ${name}`,
      text: "For someone whose presence gives the people around them another reason to smile."
    },

    wedding: {
      label: "With Joy, We Invite",
      title: `For ${name}`,
      text: "Because this new chapter would feel more meaningful with the people we value beside us."
    },

    teacher: {
      label: "For a Lasting Influence",
      title: `For ${name}`,
      text: "For someone whose guidance reached far beyond lessons and classrooms."
    },

    farewell: {
      label: "For Someone We Will Miss",
      title: `For ${name}`,
      text: "For someone whose presence became part of the memories we will continue carrying."
    },

    newborn: {
      label: "For Our Little Miracle",
      title: `For ${name}`,
      text: "For the little one who has already brought immeasurable love into so many hearts."
    },

    hope: {
      label: "A Message Just for You",
      title: `For ${name}`,
      text: "For someone who deserves to be reminded that they are stronger, valued, and never alone."
    }
  };

  return reveals[purpose] || {
    label: "From the Heart",
    title: `For ${name}`,
    text: "Some people make life feel warmer simply by being part of it."
  };
},

  getMiddleScenes(identity) {
  const purpose = identity?.purpose;

  const middleScenes = {
    anniversary: {
      feeling: {
        label: "What I Hope You Feel",
        title: "After Everything We Have Shared"
      },
      memory: {
        label: "One Chapter of Us",
        title: "A Memory I Still Carry"
      },
      message: {
        label: "From My Heart",
        title: "What I Want You to Know"
      }
    },

    "mothers-day": {
      feeling: {
        label: "What You Deserve to Feel",
        title: "Loved, Appreciated, and Remembered"
      },
      memory: {
        label: "A Memory of Your Love",
        title: "One Moment I Will Always Carry"
      },
      message: {
        label: "Words I Should Say More Often",
        title: "What I Want You to Know, Mom"
      }
    },

    birthday: {
      feeling: {
        label: "A Wish for Today",
        title: "How I Hope This Makes You Feel"
      },
      memory: {
        label: "A Moment Worth Celebrating",
        title: "One Memory That Still Makes Me Smile"
      },
      message: {
        label: "A Birthday Message",
        title: "What I Hope You Always Remember"
      }
    },

    wedding: {
      feeling: {
        label: "The Spirit of This Day",
        title: "How We Hope You Feel"
      },
      memory: {
        label: "Our Story",
        title: "A Moment That Brought Us Here"
      },
      message: {
        label: "With Love",
        title: "What We Want to Share With You"
      }
    },

    teacher: {
      feeling: {
        label: "What Your Guidance Created",
        title: "The Feeling I Hope Stays With You"
      },
      memory: {
        label: "A Lesson Beyond the Classroom",
        title: "One Moment I Still Remember"
      },
      message: {
        label: "With Sincere Gratitude",
        title: "What I Have Always Wanted to Tell You"
      }
    },

    farewell: {
      feeling: {
        label: "What We Hope You Carry",
        title: "The Feeling We Want to Leave With You"
      },
      memory: {
        label: "Before the Next Chapter",
        title: "One Memory We Will Keep"
      },
      message: {
        label: "Before We Say Goodbye",
        title: "What We Want You to Know"
      }
    },

    newborn: {
      feeling: {
        label: "Our Wish for You",
        title: "How We Hope You Always Feel"
      },
      memory: {
        label: "The Beginning of Your Story",
        title: "A Moment We Will Never Forget"
      },
      message: {
        label: "For Our Little One",
        title: "What We Hope You Carry Through Life"
      }
    },

    hope: {
      feeling: {
        label: "A Feeling to Carry Forward",
        title: "What I Hope These Words Give You"
      },
      memory: {
        label: "A Reminder of Your Strength",
        title: "What You Have Already Overcome"
      },
      message: {
        label: "A Light for the Road Ahead",
        title: "What I Want You to Hear"
      }
    }
  };

  return middleScenes[purpose] || {
    feeling: {
      label: "What Matters",
      title: "This Was Created to Make You Feel"
    },
    memory: {
      label: "A Memory Worth Keeping",
      title: "One Moment That Still Stays With Me"
    },
    message: {
      label: "From the Heart",
      title: "What I Want You to Know"
    }
  };
},

  getTiming(identity) {
  const purpose = identity?.purpose;

  const timings = {
    anniversary: {
      opening: 7000,
      reveal: 7000,
      photo: 11000,
      feeling: 6500,
      memory: 9000,
      message: 9000,
      closing: 8000
    },

    "mothers-day": {
      opening: 7000,
      reveal: 7000,
      photo: 11000,
      feeling: 7000,
      memory: 9500,
      message: 9500,
      closing: 8500
    },

    birthday: {
      opening: 5500,
      reveal: 6000,
      photo: 8500,
      feeling: 5500,
      memory: 7000,
      message: 7000,
      closing: 6500
    },

    wedding: {
      opening: 6000,
      reveal: 6000,
      photo: 9000,
      feeling: 6000,
      memory: 7500,
      message: 7500,
      closing: 7000
    },

    teacher: {
      opening: 6500,
      reveal: 6500,
      photo: 9500,
      feeling: 6500,
      memory: 8500,
      message: 8500,
      closing: 7500
    },

    farewell: {
      opening: 7500,
      reveal: 7000,
      photo: 11500,
      feeling: 7000,
      memory: 10000,
      message: 9500,
      closing: 9000
    },

    newborn: {
      opening: 6000,
      reveal: 6500,
      photo: 10000,
      feeling: 6500,
      memory: 8000,
      message: 8000,
      closing: 7500
    },

    hope: {
      opening: 6500,
      reveal: 6500,
      photo: 9000,
      feeling: 6500,
      memory: 8000,
      message: 8500,
      closing: 7500
    }
  };

  return timings[purpose] || {
    opening: 6000,
    reveal: 6500,
    photo: 9000,
    feeling: 6000,
    memory: 8000,
    message: 8000,
    closing: 7000
  };
},

  getPhotoStyle(identity) {
  const purpose = identity?.purpose;

  const styles = {
    anniversary: {
      className: "photo-romantic",
      alt: "A shared memory"
    },

    "mothers-day": {
      className: "photo-warm",
      alt: "A cherished memory"
    },

    birthday: {
      className: "photo-bright",
      alt: "A joyful memory"
    },

    wedding: {
      className: "photo-elegant",
      alt: "A wedding memory"
    },

    teacher: {
      className: "photo-classic",
      alt: "A meaningful memory"
    },

    farewell: {
      className: "photo-nostalgic",
      alt: "A memory worth keeping"
    },

    newborn: {
      className: "photo-soft",
      alt: "A precious new beginning"
    },

    hope: {
      className: "photo-hopeful",
      alt: "A hopeful memory"
    }
  };

  return styles[purpose] || {
    className: "photo-default",
    alt: "A meaningful memory"
  };
}
};
