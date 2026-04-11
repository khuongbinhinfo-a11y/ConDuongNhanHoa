function postCard(post) {
  return `
    <article class="post-card">
      <div class="post-card__media">
        <img src="${post.image}" alt="${post.alt}" loading="lazy" />
      </div>
      <div class="post-card__body">
        <h3 class="post-card__title">${post.title}</h3>
        <p class="post-card__description">${post.description}</p>
        <a class="button button--ghost" href="${post.href}">Xem thêm</a>
      </div>
    </article>
  `;
}

export function FeaturedPostsSection(posts) {
  return `
    <section class="featured-posts section-space" id="featured-posts">
      <div class="container">
        <header class="section-heading section-heading--center">
          <h2>Bài Viết Nổi Bật</h2>
        </header>
        <div class="featured-posts__grid">
          ${posts.map(postCard).join("")}
        </div>
      </div>
    </section>
  `;
}
