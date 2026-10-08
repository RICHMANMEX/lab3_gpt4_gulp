import initHeader from "../components/initHeader.js";
import initHero from "../components/initHero.js";
import initBrands from "../components/initBrands.js";
import initWhatIsGpt from "../components/initWhatIsGpt.js";
import initFutureHere from "../components/initFutureHere.js";
import initBurger from "../components/initBurger.js";
import initVr from "../components/initVr.js";
import initPurpleBanner from "../components/initPurpleBanner.js";
import initBlog from "../components/initBlog.js";
import initStepFuture from "../components/initStepFuture.js";
import initFooter from "../components/initFooter.js";

const createHomePageTemplate = (rootNode) => {
  const template = `
    <div class="page">
      <section class="section header"></section>
      <section class="section hero_section"></section>
      <section class="section brands_section"></section>
      <section class="section what_is_chatgpt_section"></section>
      <section class="section future_here"></section>
      <section class="section vr_section"></section>
      <section class="section purple_banner"></section>
      <section class="section blog_section"></section>
      <section class="section step_future_section"></section>
    </div>

    <footer class="footer"></footer>
  `;

  rootNode.insertAdjacentHTML("beforeend", template);
};

const homePage = () => {
  const rootNode = document.querySelector("#root");

  createHomePageTemplate(rootNode);

  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);
  initBurger(headerNode);

  initHero(rootNode.querySelector(".hero_section"));
  initBrands(rootNode.querySelector(".brands_section"));
  initWhatIsGpt(rootNode.querySelector(".what_is_chatgpt_section"));
  initFutureHere(rootNode.querySelector(".future_here"));
  initVr(rootNode.querySelector(".vr_section"));
  initPurpleBanner(rootNode.querySelector(".purple_banner"));
  initBlog(rootNode.querySelector(".blog_section"));
  initStepFuture(rootNode.querySelector(".step_future_section"));
  initFooter(rootNode.querySelector(".footer"));
};

export default homePage;
