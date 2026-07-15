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
  }
};
