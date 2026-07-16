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

  photo(
  src,
  className = "photo-default",
  alt = "Memory photo",
  duration = 10000
){
  if(!src) return "";

  const safeDuration =
    Number.isFinite(Number(duration))
      ? Number(duration)
      : 10000;

  return `
    <div
      class="photo-moment ${className}"
      style="--photo-duration:${safeDuration}ms;"
    >
      <div class="photo-frame">
        <img src="${src}" alt="${alt}">
      </div>
    </div>
  `;
}
};
