const Director = {
  journeys: {
    romantic: EXPRESS,
    nostalgic: EXPRESS,
    calm: EXPRESS,
    hopeful: EXPRESS
  },

  getJourney(type){
    return this.journeys[type] || EXPRESS;
  }
};
