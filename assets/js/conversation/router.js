const ConversationRouter = {
  routes: {
    "wedding:couple": WEDDING_COUPLE,
    "wedding:guest": WEDDING_GUEST
  },

  getJourney(experienceId, roleId, atmosphereType) {
    const routeKey = `${experienceId}:${roleId}`;
    const routedJourney = this.routes[routeKey];

    if(routedJourney){
      return routedJourney;
    }

    // All occasions without a special role route
    // continue using the existing Director mapping.
    return Director.getJourney(atmosphereType);
  }
};
