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

  getJourney(type){
    return this.journeys[type] || EXPRESS;
  },

  getBlueprint(type){
    return this.blueprints[type] || EXPRESS_BLUEPRINT;
  }
};
