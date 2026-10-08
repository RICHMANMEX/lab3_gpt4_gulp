import stepFutureData from "../../mockData/stepFutureData.js";
import { stepFutureTemplate } from "../templates/stepFutureTemplate.js";

const initStepFuture = (node) => {
  node.insertAdjacentHTML("beforeend", stepFutureTemplate(stepFutureData));
};

export default initStepFuture;
