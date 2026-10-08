export const stepFutureTemplate = ({ header, button }) => {
  return `
    <h2 class="step_future_section_header">
      ${header}
    </h2>

    <button class="step_future_section_btn btn">
      ${button.title}
    </button>
  `;
};
