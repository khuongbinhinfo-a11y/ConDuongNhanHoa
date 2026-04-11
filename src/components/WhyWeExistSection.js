export function WhyWeExistSection(content) {
  return `
    <section class="why-we-exist section-space" id="why-we-exist">
      <div class="container">
        <div class="why-we-exist__inner">
          <h2>${content.title}</h2>
          <p>${content.description}</p>
        </div>
      </div>
    </section>
  `;
}
