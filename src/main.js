import { homeData } from "./data/homeData.js";
import {
  EntryCardsSection,
  FeaturedPostsSection,
  Footer,
  Header,
  HeroSection,
  JourneyStartSection,
  WhyWeExistSection
} from "./components/index.js";

function renderPage() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    ${Header(homeData)}
    <main>
      ${HeroSection(homeData.hero)}
      ${EntryCardsSection(homeData.entryHighlights)}
      ${FeaturedPostsSection(homeData.featuredPosts)}
      ${WhyWeExistSection(homeData.whySection)}
      ${JourneyStartSection(homeData.journeySection)}
    </main>
    ${Footer(homeData.footer)}
  `;
}

function setupHeaderInteractions() {
  const header = document.querySelector("#site-header");
  const menuButton = header.querySelector(".header__menu-button");

  const syncScrollHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  const closeMenu = () => {
    header.classList.remove("is-menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  syncScrollHeader();
  window.addEventListener("scroll", syncScrollHeader, { passive: true });

  menuButton.addEventListener("click", () => {
    const willOpen = !header.classList.contains("is-menu-open");
    header.classList.toggle("is-menu-open", willOpen);
    menuButton.setAttribute("aria-expanded", String(willOpen));
  });

  header.querySelectorAll(".header__link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
}

renderPage();
setupHeaderInteractions();
