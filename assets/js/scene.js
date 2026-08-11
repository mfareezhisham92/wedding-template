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
  type: "opening-lumina",

  label: "Walimatul Urus",

  lines: [
    "Setiap permulaan yang indah",
    "akan menjadi lebih bermakna",
    "apabila diraikan bersama insan yang tersayang."
  ],

  duration: 10000,
  transition: "fade",
  background: story.collection || "royal",
  image: null
},

{
  type: "welcome-lumina",

  label: "Buat insan-insan yang dihargai,",

  lines: [
    "Doa dan kehadiran anda",
    "amat kami hargai,",
    "kerana andalah yang akan menjadikan hari ini lebih bermakna."
  ],

  duration: 9000,
  transition: "fade",
  background: story.collection || "royal",
  image: null
},

{
  type: "hero",
  label: recipientReveal.label,
  title: recipientReveal.title,
  text: recipientReveal.text,
  duration: timing.reveal,
  transition: "fade",
  background:   story.collection || "royal",
  image: null
},

{
  type: "formal-invitation",

  basmala:
    "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",

  label:
    "Majlis Walimatul Urus",

  introduction:
    "Dengan penuh kesyukuran ke hadrat Allah SWT, kami dengan segala hormatnya menjemput Dato’ / Datin / Tuan / Puan / Encik / Cik / Saudara / Saudari ke majlis perkahwinan putera kami",

  hosts:
  `${story.family?.fatherName || ""} & ${story.family?.motherName || ""}`,

groom:
  story.couple?.groomName || "",

bride:
  story.couple?.brideName || "",

date:
  story.celebration?.date || "",

time:
  `${story.celebration?.startTime || ""} – ${story.celebration?.endTime || ""}`,

venue:
  [
    story.celebration?.venue,
    story.celebration?.cityState
  ]
    .filter(Boolean)
    .join(", "),

rsvp:
  story.optional?.rsvp || "",

  duration:
    14000,

  transition:
    "fade",

  background:
    story.collection || "royal",

  image:
    null
},
      
{
  type: "photo",
  label: "A Memory",
  title: "",
  text: "",
  duration: timing.photo,
  transition: "fade",
  background:   story.collection || "royal",
  image:
  story.media?.photo ||
  "assets/wife.jpg",
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
  background:   story.collection || "royal",
  image: null
},

      {
  type: "memory",
  label: middleCopy.memory.label,
  title: middleCopy.memory.title,
  text:
  story.narrative?.opening ||
  story.memory.text,
  duration: timing.memory,
  transition: "fade",
  background:   story.collection || "royal",
  image: null
},

      {
  type: "message",
  label: middleCopy.message.label,
  title: middleCopy.message.title,
  text:
  story.narrative?.invitation ||
  story.message.text,
  duration: timing.message,
  transition: "fade",
  background:   story.collection || "royal",
  image: null
},

      {
  type: "closing",
  label: storyCopy.closing.label,
  title: storyCopy.closing.title,
  text:
  story.narrative?.closing ||
  storyCopy.closing.text,
  duration: timing.closing,
  transition: "fade",
  background:   story.collection || "royal",
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
