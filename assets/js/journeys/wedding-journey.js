const WeddingJourney = {
  elements: {},

  init() {
    this.elements = {
      preparationArea:
        document.getElementById("weddingPreparationArea"),

      familyStep:
        document.getElementById("familyPreparationStep"),

      coupleStep:
        document.getElementById("couplePreparationStep"),

      celebrationStep:
        document.getElementById("celebrationPreparationStep"),

      fatherInput:
        document.getElementById("fatherName"),

      motherInput:
        document.getElementById("motherName"),

      groomInput:
        document.getElementById("groomName"),

      brideInput:
        document.getElementById("brideName"),

      dateInput:
        document.getElementById("weddingDate"),

      startTimeInput:
        document.getElementById("weddingStartTime"),

      endTimeInput:
        document.getElementById("weddingEndTime"),

      venueInput:
        document.getElementById("weddingVenue"),

      cityStateInput:
        document.getElementById("weddingCityState"),

      saveFamilyButton:
        document.getElementById("saveFamilyBtn"),

      saveCoupleButton:
        document.getElementById("saveCoupleBtn"),

      saveCelebrationButton:
        document.getElementById("saveCelebrationBtn"),

      createExperienceButton:
        document.getElementById("createExperienceBtn")
    };

    if (!this.hasRequiredElements()) {
      console.error(
        "Lumina Wedding Journey could not initialize because some elements are missing."
      );
      return;
    }

    this.loadSavedValues();
    this.bindEvents();

    console.log("Wedding Journey initialized.");
  },

  hasRequiredElements() {
    const required = [
      "preparationArea",
      "familyStep",
      "coupleStep",
      "fatherInput",
      "motherInput",
      "groomInput",
      "brideInput",
      "saveFamilyButton",
      "saveCoupleButton"
    ];

    return required.every(
      key => Boolean(this.elements[key])
    );
  },

  loadSavedValues() {
    const saved = WeddingPreparation.get();

    this.elements.fatherInput.value =
      saved.family.fatherName || "";

    this.elements.motherInput.value =
      saved.family.motherName || "";

    this.elements.groomInput.value =
      saved.couple.groomName || "";

    this.elements.brideInput.value =
      saved.couple.brideName || "";

    if (this.elements.dateInput) {
      this.elements.dateInput.value =
        saved.celebration.date || "";
    }

    if (this.elements.startTimeInput) {
      this.elements.startTimeInput.value =
        saved.celebration.startTime || "";
    }

    if (this.elements.endTimeInput) {
      this.elements.endTimeInput.value =
        saved.celebration.endTime || "";
    }

    if (this.elements.venueInput) {
      this.elements.venueInput.value =
        saved.celebration.venue || "";
    }

    if (this.elements.cityStateInput) {
      this.elements.cityStateInput.value =
        saved.celebration.cityState || "";
    }
  },

  bindEvents() {
    this.elements.saveFamilyButton.addEventListener(
      "click",
      () => this.saveFamily()
    );

    this.elements.saveCoupleButton.addEventListener(
      "click",
      () => this.saveCouple()
    );

    if (this.elements.saveCelebrationButton) {
      this.elements.saveCelebrationButton.addEventListener(
        "click",
        () => this.saveCelebration()
      );

      if (this.elements.createExperienceButton) {
  this.elements.createExperienceButton.addEventListener(
    "click",
    () => this.createExperience()
  );
}
    }
  },

  showStep(stepName) {
    const steps = {

    family: this.elements.familyStep,

    couple: this.elements.coupleStep,

    celebration: this.elements.celebrationStep,

    review: document.getElementById("reviewPreparationStep")

};

    Object.values(steps).forEach(step => {
      if (step) {
        step.style.display = "none";
      }
    });

    const selectedStep = steps[stepName];

    if (selectedStep) {
      selectedStep.style.display = "block";
    }
  },

  saveFamily() {
    const fatherName =
      this.elements.fatherInput.value.trim();

    const motherName =
      this.elements.motherInput.value.trim();

    if (!fatherName || !motherName) {
      alert("Please enter both parents’ names.");
      return;
    }

    WeddingPreparation.update("family", {
      fatherName,
      motherName
    });

    this.showStep("couple");
    this.elements.groomInput.focus();
  },

  saveCouple() {
    const groomName =
      this.elements.groomInput.value.trim();

    const brideName =
      this.elements.brideInput.value.trim();

    if (!groomName || !brideName) {
      alert("Please enter both names.");
      return;
    }

    WeddingPreparation.update("couple", {
      groomName,
      brideName
    });

    if (this.elements.celebrationStep) {
      this.showStep("celebration");
      this.elements.dateInput?.focus();
    } else {
      alert("Celebration screen is missing.");
    }
  },

  saveCelebration() {
    const date =
      this.elements.dateInput?.value.trim() || "";

    const startTime =
      this.elements.startTimeInput?.value.trim() || "";

    const endTime =
      this.elements.endTimeInput?.value.trim() || "";

    const venue =
      this.elements.venueInput?.value.trim() || "";

    const cityState =
      this.elements.cityStateInput?.value.trim() || "";

    if (
      !date ||
      !startTime ||
      !endTime ||
      !venue ||
      !cityState
    ) {
      alert("Please complete all celebration details.");
      return;
    }

    WeddingPreparation.update("celebration", {
      date,
      startTime,
      endTime,
      venue,
      cityState
    });

    this.showReview();
  },
    
    showReview() {

    const saved = WeddingPreparation.get();

    const reviewContent =
        document.getElementById("reviewContent");

    reviewContent.innerHTML = `
        <h3>Hosted By</h3>

        <p>
            ${saved.family.fatherName}
            <br>
            &
            <br>
            ${saved.family.motherName}
        </p>

        <hr>

        <h3>Celebrating</h3>

        <p>
            ${saved.couple.groomName}
            <br>
            ❤️
            <br>
            ${saved.couple.brideName}
        </p>

        <hr>

        <h3>Celebration</h3>

        <p>
            ${saved.celebration.date}
            <br><br>

            ${saved.celebration.startTime}
            —
            ${saved.celebration.endTime}

            <br><br>

            ${saved.celebration.venue}

            <br>

            ${saved.celebration.cityState}
        </p>
    `;

    this.showStep("review");

},

createExperience() {
  try {
    const preparation =
      WeddingPreparation.get();

    const weddingStory = {
      storyIdentity: {
        purpose: "wedding",
        role: "couple",
        style: "celebration",
        emotion: "love",
        tone: "calm",
        collection: "royal"
      },

      collection: "royal",

      recipient: {
  name: "Tetamu Yang Dihargai"
},

emotion: {
  feeling:
    "Kehadiran anda amat bermakna buat kami sekeluarga."
},

memory: {
  text:
    "Setiap permulaan yang indah menjadi lebih bermakna apabila diraikan bersama insan yang tersayang."
},

message: {
  text:
    "Doa dan kehadiran anda amat kami hargai."
},

narrative: {
  opening:
    "Setiap permulaan yang indah menjadi lebih bermakna apabila diraikan bersama insan yang tersayang.",

  invitation:
    "Doa dan kehadiran anda amat kami hargai, kerana andalah yang akan menjadikan hari ini lebih bermakna.",

  closing:
    "Semoga Allah SWT memberkati majlis ini dan mengurniakan rahmat-Nya kepada kita semua."
},
      
      family: {
        fatherName:
          preparation.family.fatherName,

        motherName:
          preparation.family.motherName
      },

      couple: {
        groomName:
          preparation.couple.groomName,

        brideName:
          preparation.couple.brideName
      },

      celebration: {
        date:
          preparation.celebration.date,

        startTime:
          preparation.celebration.startTime,

        endTime:
          preparation.celebration.endTime,

        venue:
          preparation.celebration.venue,

        cityState:
          preparation.celebration.cityState
      },

      optional: {
        rsvp:
          preparation.optional.rsvp || "",

        photo:
          preparation.optional.photo || ""
      },

      media: {
        photo:
          preparation.optional.photo ||
          "assets/wife.jpg"
      }
    };

    localStorage.setItem(
      "luminaWeddingStory",
      JSON.stringify(weddingStory)
    );

    SceneEngine.saveScenes(weddingStory);

    window.location.href =
      "transition.html";
  } catch (error) {
    console.error(
      "Lumina could not create the wedding experience:",
      error
    );

    alert(
      "Lumina could not create the experience. Please try again."
    );
  }
},
  
  start() {
    this.elements.preparationArea.style.display = "block";
    this.showStep("family");
  }
};

window.WeddingJourney = WeddingJourney;

document.addEventListener("DOMContentLoaded", () => {
  WeddingJourney.init();
});
