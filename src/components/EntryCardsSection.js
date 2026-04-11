function entryCard(item) {
  return `
    <article class="entry-card entry-card--${item.tone}">
      <div class="entry-card__shape" aria-hidden="true"></div>
      <span class="entry-card__glyph" aria-hidden="true"></span>
      <h3 class="entry-card__title">${item.title}</h3>
      <p class="entry-card__description">${item.description}</p>
      <a href="${item.href}" class="entry-card__link">${item.cta}</a>
    </article>
  `;
}

export function EntryCardsSection(items) {
  return `
    <section class="entry-cards section-space" id="entry-cards">
      <div class="container">
        <header class="section-heading section-heading--entry">
          <p class="section-heading__kicker">3 Lối Vào Chính</p>
          <h2>Chọn cách bắt đầu phù hợp với bạn</h2>
        </header>
        <div class="entry-cards__grid">
          ${items.map(entryCard).join("")}
        </div>
      </div>
    </section>
  `;
}
