export const vrTemplate = ({
  image,
  subtitle,
  header,
  description,
  button,
}) => {
  return `
    <div class="vr_section_left">
      <img
        src="${image.src}"
        alt="${image.alt}"
        class="vr_section_image"
      />
    </div>

    <div class="vr_section_right">
      <div class="vr_section_content">
        <p class="vr_section_subtitle">${subtitle}</p>

        <h2 class="vr_section_header">
          ${header}
        </h2>

        <p class="vr_section_description">
          ${description}
        </p>

        <a href="${button.href}" class="left_cta">${button.title}</a>
      </div>
    </div>
  `;
};
