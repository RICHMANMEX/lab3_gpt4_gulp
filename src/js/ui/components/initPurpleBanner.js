import purpleBannerData from "../../mockData/purpleBannerData.js";
import { purpleBannerTemplate } from "../templates/purpleBannerTemplate.js";

const initPurpleBanner = (node) => {
  node.insertAdjacentHTML(
    "beforeend",
    purpleBannerTemplate(purpleBannerData)
  );
};

export default initPurpleBanner;
