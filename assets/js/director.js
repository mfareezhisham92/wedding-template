const Director = {
  journeys: {
    romantic: EXPRESS,
    nostalgic: REMEMBER,
    calm: CELEBRATE,
    hopeful: EXPRESS
  },

  getJourney(type){
    return this.journeys[type] || EXPRESS;
  }
};
