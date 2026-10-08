export const createBlogCardTemplate = ({
  image,
  alt,
  date,
  title,
  href,
  large,
}) => {
  return `
    <article class="blog_card${large ? " blog_card_large" : ""}">
      <img src="${image}" alt="${alt}" class="blog_card_image">

      <div class="blog_card_content">
        <p class="blog_card_date">${date}</p>

        <h3 class="blog_card_title">
          ${title}
        </h3>

        <a href="${href}" class="blog_card_link">
          Читать полную статью
        </a>
      </div>
    </article>
  `;
};

export const blogTemplate = (blogData) => {
  const cardsTemplate = blogData
    .map((item) => createBlogCardTemplate(item))
    .join("");

  return `
    <h2 class="blog_section_header">
      Многое Происходит,<br>
      Мы Ведем об Этом Блог.
    </h2>

    <div class="blog_section_grid">
      ${cardsTemplate}
    </div>
  `;
};