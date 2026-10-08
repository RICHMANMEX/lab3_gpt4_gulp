export const purpleBannerTemplate = ({
  subtitle,
  header,
  button,
}) => {
  return `
    <div class="purple_banner_content">
      <div class="purple_banner_text">
        <p class="purple_banner_subtitle">${subtitle}</p>

        <h2 class="purple_banner_header">
          ${header}
        </h2>
      </div>

      <button class="purple_banner_btn btn">${button.title}</button>
    </div>
  `;
};
