export function HeroSection(hero) {
  return `
    <section class="hero section-space" id="top">
      <div class="container hero__grid">
        <div class="hero__copy">
          <p class="hero__eyebrow">${hero.eyebrow}</p>
          <h1 class="hero__title">${hero.title}</h1>
          <p class="hero__description">${hero.description}</p>
          <a class="button button--navy hero__cta" href="${hero.cta.href}">${hero.cta.label}</a>
        </div>
        <div class="hero__visual">
          <img src="${hero.image.src}" alt="${hero.image.alt}" loading="eager" />
        </div>
      </div>
    </section>
  `;
}
