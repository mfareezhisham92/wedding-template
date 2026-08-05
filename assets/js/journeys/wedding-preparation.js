const WeddingPreparation = {
  storageKey: "luminaWeddingPreparation",

  data: {
    family: {
      fatherName: "",
      motherName: ""
    },

    couple: {
      groomName: "",
      brideName: ""
    },

    celebration: {
      date: "",
      startTime: "",
      endTime: "",
      venue: "",
      cityState: ""
    },

    optional: {
      rsvp: "",
      photo: ""
    }
  },

  reset() {
    this.data = {
      family: {
        fatherName: "",
        motherName: ""
      },

      couple: {
        groomName: "",
        brideName: ""
      },

      celebration: {
        date: "",
        startTime: "",
        endTime: "",
        venue: "",
        cityState: ""
      },

      optional: {
        rsvp: "",
        photo: ""
      }
    };

    localStorage.removeItem(this.storageKey);

    return this.data;
  },

  load() {
    try {
      const saved = localStorage.getItem(this.storageKey);

      if (!saved) {
        return this.data;
      }

      const parsed = JSON.parse(saved);

      this.data = {
        family: {
          ...this.data.family,
          ...(parsed.family || {})
        },

        couple: {
          ...this.data.couple,
          ...(parsed.couple || {})
        },

        celebration: {
          ...this.data.celebration,
          ...(parsed.celebration || {})
        },

        optional: {
          ...this.data.optional,
          ...(parsed.optional || {})
        }
      };

      return this.data;
    } catch (error) {
      console.error(
        "Lumina could not load the wedding preparation:",
        error
      );

      return this.reset();
    }
  },

  save() {
    localStorage.setItem(
      this.storageKey,
      JSON.stringify(this.data)
    );

    return this.data;
  },

  update(section, values) {
    if (!this.data[section]) {
      throw new Error(
        `Unknown wedding preparation section: ${section}`
      );
    }

    this.data[section] = {
      ...this.data[section],
      ...values
    };

    return this.save();
  },

  get() {
    return this.load();
  },

  isComplete() {
    const preparation = this.get();

    return Boolean(
      preparation.family.fatherName.trim() &&
      preparation.family.motherName.trim() &&
      preparation.couple.groomName.trim() &&
      preparation.couple.brideName.trim() &&
      preparation.celebration.date.trim() &&
      preparation.celebration.startTime.trim() &&
      preparation.celebration.endTime.trim() &&
      preparation.celebration.venue.trim()
    );
  }
};

WeddingPreparation.load();

window.WeddingPreparation = WeddingPreparation;
