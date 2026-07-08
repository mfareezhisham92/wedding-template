const Director = {
  journeys: {
    romantic: EXPRESS,
    nostalgic: REMEMBER,
    calm: CELEBRATE,
    hopeful: HOPE
  },

  collections: {
    romantic: ROYAL,
    nostalgic: ROYAL,
    calm: ROYAL,
    hopeful: ROYAL
},

getCollection(type){
    return this.collections[type] || ROYAL;
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
