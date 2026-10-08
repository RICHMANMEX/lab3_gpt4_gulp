import vrData from "../../mockData/vrData.js";
import { vrTemplate } from "../templates/vrTemplate.js";

const initVr = (vrNode) => {
  vrNode.insertAdjacentHTML("beforeend", vrTemplate(vrData));
};

export default initVr;
