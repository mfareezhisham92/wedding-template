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
        document.getElementById("saveCelebrationBtn")
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
    }
  },

  showStep(stepName) {
    const steps = {
      family: this.elements.familyStep,
      couple: this.elements.coupleStep,
      celebration: this.elements.celebrationStep
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

    alert("Celebration details saved.");
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
