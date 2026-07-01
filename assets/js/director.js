const Director = {

  arrange(story){

    const atmosphere = story.atmosphere;

    switch(atmosphere){

      case "romantic":
        return "romantic";

      case "nostalgic":
        return "nostalgic";

      case "hopeful":
        return "hopeful";

      default:
        return "calm";

    }

  }

};
