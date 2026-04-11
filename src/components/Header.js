export function Header({ brandName, headerMenu }) {
  const menuMarkup = headerMenu
    .map(
      (item) =>
        `<li class="header__item"><a class="header__link" href="${item.href}">${item.label}</a></li>`
    )
    .join("");

  return `
    <header class="site-header" id="site-header">
      <div class="container header__inner">
        <a href="#top" class="brand">${brandName}</a>
        <button class="header__menu-button" type="button" aria-expanded="false" aria-controls="main-nav">
          Menu
        </button>
        <nav class="header__nav" id="main-nav" aria-label="Main menu">
          <ul class="header__list">
            ${menuMarkup}
          </ul>
        </nav>
      </div>
    </header>
  `;
}
