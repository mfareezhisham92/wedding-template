const Components = {
  moment(content){
    return `
      <section class="moment active">
        ${content}
      </section>
    `;
  },

  label(text){
    if(!text) return "";
    return `<div class="label">${text}</div>`;
  },

  title(text){
    if(!text) return "";
    return `<h1>${text}</h1>`;
  },

  paragraph(text){
    if(!text) return "";
    return `<p>${text}</p>`;
  },

  photo(src){
    if(!src) return "";
    return `<img src="${src}" alt="Memory photo">`;
  }
};
