export function Footer(footer) {
  return `
    <footer class="site-footer">
      <div class="container site-footer__inner">
        <p class="site-footer__note">${footer.note}</p>
        <p class="site-footer__caption">${footer.caption}</p>
      </div>
    </footer>
  `;
}
