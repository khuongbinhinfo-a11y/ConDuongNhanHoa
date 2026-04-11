function journeyChoice(choice) {
  return `
    <a class="journey-choice" href="${choice.href}">
      ${choice.label}
    </a>
  `;
}

export function JourneyStartSection(content) {
  return `
    <section class="journey-start section-space" id="journey-start">
      <div class="container">
        <div class="journey-start__grid">
          <div class="journey-start__copy">
            <h2>${content.title}</h2>
            <p>${content.description}</p>
            <a class="button button--navy" href="${content.cta.href}">${content.cta.label}</a>
          </div>
          <div class="journey-start__media">
            <img src="${content.image.src}" alt="${content.image.alt}" loading="lazy" />
          </div>
        </div>
        <div class="journey-start__choices">
          ${content.choices.map(journeyChoice).join("")}
        </div>
      </div>
    </section>
  `;
}
