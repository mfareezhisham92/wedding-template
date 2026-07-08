const Director = {
  journeys: {
    romantic: EXPRESS,
    nostalgic: REMEMBER,
    calm: EXPRESS,
    hopeful: EXPRESS
  },

  getJourney(type){
    return this.journeys[type] || EXPRESS;
  }
};
