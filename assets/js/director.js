const Director = {
  journeys: {
    romantic: EXPRESS,
    nostalgic: REMEMBER,
    calm: CELEBRATE,
    hopeful: HOPE
  },

  blueprints: {
    romantic: EXPRESS_BLUEPRINT,
    nostalgic: EXPRESS_BLUEPRINT,
    calm: EXPRESS_BLUEPRINT,
    hopeful: EXPRESS_BLUEPRINT
  },

  collections: {
    romantic: ROYAL,
    nostalgic: ROYAL,
    calm: ROYAL,
    hopeful: ROYAL
  },

  getJourney(type){
    return this.journeys[type] || EXPRESS;
  },

  getBlueprint(type){
    return this.blueprints[type] || EXPRESS_BLUEPRINT;
  },

  getCollection(type){
    return this.collections[type] || ROYAL;
  }
};
