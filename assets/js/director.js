const Director = {
  journeys: {
    romantic: EXPRESS,
    nostalgic: REMEMBER,
    calm: CELEBRATE,
    hopeful: HOPE
  },

  getJourney(type){
    return this.journeys[type] || EXPRESS;
  }
};
