const Atmosphere = {
  selected: "nostalgic",

  options: {
    calm: {
      label: "Calm",
      description: "A quiet moment to reflect."
    },
    nostalgic: {
      label: "Nostalgic",
      description: "For memories that still make you smile."
    },
    romantic: {
      label: "Romantic",
      description: "For the moments that changed your life."
    },
    hopeful: {
      label: "Hopeful",
      description: "For stories that deserve another beginning."
    }
  },

  set(type) {
    this.selected = type;
    localStorage.setItem("luminaAtmosphere", type);
  },

  get() {
    return localStorage.getItem("luminaAtmosphere") || this.selected;
  }
};
function chooseAtmosphere(type, experience){
  Atmosphere.set(type);

  const messages = {
    nostalgic: {
      title: "Memories have a quiet way of staying with us.",
      text: "Today, let’s revisit one together."
    },
    romantic: {
      title: "I’m glad you’re here.",
      text: "Some thoughts stay in our hearts for years. Let’s turn them into something meaningful."
    },
    calm: {
      title: "What a wonderful reason to be here.",
      text: "Let’s create something worthy of this moment."
    },
    hopeful: {
      title: "Every new chapter deserves a meaningful beginning.",
      text: "Let’s take the first step together."
    }
  };

  const selected = experience?.welcome || messages[type];

  document.getElementById("atmosphereArea").innerHTML = `
    <div class="small">Lumina</div>
    <h1>${selected.title}</h1>
    <p style="color:#d8c7a5; line-height:1.7; margin-top:20px;">
      ${selected.text}
    </p>
  `;

  setTimeout(() => {
  const atmosphereArea =
    document.getElementById("atmosphereArea");

  const roleArea =
    document.getElementById("roleArea");

  const creatorArea =
    document.getElementById("creatorArea");

  try {
    const experienceId =
  localStorage.getItem("luminaExperienceId");

const roleId =
  localStorage.getItem("luminaRole");

const journey =
  ConversationRouter.getJourney(
    experienceId,
    roleId,
    type
  );

    if(!journey){
      throw new Error(`No journey found for: ${type}`);
    }

    if(!Array.isArray(journey.reflections)){
      throw new Error(
        `${journey.name || type} journey has no reflections.`
      );
    }

    if(!creatorArea){
      throw new Error("Creator area is missing from creator.html.");
    }

    // Show the Reflection area before rendering into it.
    creatorArea.style.display = "block";

    Conversation.start(journey);

    localStorage.setItem(
      "luminaJourney",
      journey.id
    );

    localStorage.setItem(
      "luminaJourneyName",
      journey.name
    );

    // Hide previous screens only after a successful render.
    atmosphereArea.style.display = "none";

    if(roleArea){
      roleArea.style.display = "none";
    }

  } catch(error) {
    console.error("Lumina journey error:", error);

    creatorArea.style.display = "none";

    if(roleArea){
      roleArea.style.display = "none";
    }

    atmosphereArea.style.display = "block";
    atmosphereArea.innerHTML = `
      <div class="small">Lumina needs attention</div>

      <h1>We couldn't begin this journey.</h1>

      <p style="color:#d8c7a5;line-height:1.7;margin-bottom:22px;">
        ${error.message}
      </p>

      <button onclick="location.reload()">
        Return to Experiences
      </button>
    `;
  }
}, 4500);
}

function chooseExperience(id){
  const selected =
    ExperienceLibrary.find(item => item.id === id);

  if(!selected) return;

  localStorage.setItem(
    "luminaExperienceId",
    selected.id
  );

  localStorage.setItem(
    "luminaExperienceName",
    selected.name
  );

  localStorage.setItem(
    "luminaExperienceIcon",
    selected.icon
  );

  localStorage.setItem(
    "luminaCollection",
    selected.collection
  );

  localStorage.removeItem("luminaRole");
  localStorage.removeItem("luminaRoleTitle");

  if(selected.roles && selected.roles.length){
    showRoles(selected);
  }else{
    chooseAtmosphere(
      selected.journey,
      selected
    );
  }
}

function showRoles(experience){
  const atmosphereArea =
    document.getElementById("atmosphereArea");

  const roleArea =
    document.getElementById("roleArea");

  const roleDescription =
    document.getElementById("roleDescription");

  const roleOptions =
    document.getElementById("roleOptions");

  if(
    !atmosphereArea ||
    !roleArea ||
    !roleDescription ||
    !roleOptions
  ){
    console.error(
      "Lumina role screen elements are missing."
    );
    return;
  }

  atmosphereArea.style.display = "none";
  roleArea.style.display = "block";

  roleDescription.innerText =
    "Help Lumina understand how you are part of this moment.";

  roleOptions.innerHTML =
    experience.roles.map(role => `
      <button
        class="role-card"
        onclick="chooseRole(
          '${experience.id}',
          '${role.id}'
        )"
      >
        <strong>${role.title}</strong>
        <span>${role.subtitle}</span>
      </button>
    `).join("");
}

function chooseRole(experienceId, roleId){
  const experience =
    getExperienceById(experienceId);

  if(!experience) return;

  const role =
    experience.roles?.find(
      item => item.id === roleId
    );

  if(!role) return;

  localStorage.setItem(
    "luminaRole",
    role.id
  );

  localStorage.setItem(
    "luminaRoleTitle",
    role.title
  );

  document.getElementById("roleArea").style.display = "none";

// Show the welcome area again before inserting its content.
document.getElementById("atmosphereArea").style.display = "block";

chooseAtmosphere(
  experience.journey,
  experience
);
}

window.addEventListener("DOMContentLoaded", () => {
  const libraryArea = document.getElementById("libraryArea");

  if(!libraryArea) return;

  libraryArea.innerHTML = ExperienceLibrary.map(item => `
  <button
    class="library-card"
    onclick="chooseExperience('${item.id}')"
  >
    <div class="experience-category">
      ${item.category}
    </div>

    <div class="experience-title">
      <span class="experience-icon">${item.icon}</span>
      ${item.name}
    </div>

    <div class="experience-description">
      ${item.description}
    </div>

    <div class="experience-arrow" aria-hidden="true">
      →
    </div>
  </button>
`).join("");
});
