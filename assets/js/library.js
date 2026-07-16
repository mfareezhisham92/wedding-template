const ExperienceLibrary = [
  {
    id: "anniversary",
    name: "Anniversary",
    icon: "❤️",
    category: "Love",
    journey: "romantic",
    collection: "royal",
    description: "Celebrate the journey you have shared together.",
    welcome: {
      title: "Every love story is built from moments.",
      text: "Let’s revisit the journey you have shared and turn it into something they can feel."
    }
  },

  {
    id: "mothers-day",
    name: "Mother's Day",
    icon: "🌷",
    category: "Gratitude",
    journey: "nostalgic",
    collection: "royal",
    description: "Say thank you for a lifetime of love and care.",
    welcome: {
      title: "Some love quietly shapes our entire life.",
      text: "Today, let’s remember the moments, sacrifices, and care that deserve to be appreciated."
    }
  },

  {
    id: "birthday",
    name: "Birthday",
    icon: "🎂",
    category: "Celebration",
    journey: "calm",
    collection: "royal",
    description: "Make their special day feel even more meaningful.",
    welcome: {
      title: "Today is about someone worth celebrating.",
      text: "Let’s create something that reminds them how much joy their presence brings."
    }
  },

  {
  id: "wedding",
  name: "Wedding",
  icon: "💍",
  category: "Love",
  journey: "calm",
  collection: "royal",
  description: "Celebrate your union with the people who matter most.",

  roles: [
    {
      id: "couple",
      title: "We're getting married",
      subtitle: "Create a beautiful invitation for your guests."
    },
    {
      id: "guest",
      title: "I'm celebrating the couple",
      subtitle: "Create a heartfelt blessing or congratulatory message."
    }
  ],

  welcome: {
    title: "A beautiful new chapter is beginning.",
    text: "Let's create an experience that honours your story and welcomes the people who matter most."
  }
},

  {
    id: "teacher",
    name: "Teacher Appreciation",
    icon: "📚",
    category: "Gratitude",
    journey: "nostalgic",
    collection: "royal",
    description: "Thank someone who helped shape your journey.",
    welcome: {
      title: "Some lessons stay with us long after class ends.",
      text: "Let’s remember the person who guided, encouraged, and helped shape your journey."
    }
  },

  {
    id: "farewell",
    name: "Farewell",
    icon: "✈️",
    category: "Memories",
    journey: "nostalgic",
    collection: "royal",
    description: "Honour the memories before beginning a new chapter.",
    welcome: {
      title: "Goodbyes often reveal how much someone mattered.",
      text: "Let’s honour the memories you shared before the next chapter begins."
    }
  },

  {
    id: "newborn",
    name: "Newborn",
    icon: "👶",
    category: "Celebration",
    journey: "calm",
    collection: "royal",
    description: "Welcome a beautiful new life with love and joy.",
    welcome: {
      title: "A beautiful new life has entered the world.",
      text: "Let’s welcome this little one with a story filled with love, hope, and joy."
    }
  },

  {
    id: "hope",
    name: "Encouragement",
    icon: "🌱",
    category: "Hope",
    journey: "hopeful",
    collection: "royal",
    description: "Offer strength, reassurance, and belief in tomorrow.",
    welcome: {
      title: "Sometimes one sincere message can become a light.",
      text: "Let’s create something that reminds them they are not walking forward alone."
    }
  }
];

function getExperienceById(id){
  return ExperienceLibrary.find(item => item.id === id) || null;
}
