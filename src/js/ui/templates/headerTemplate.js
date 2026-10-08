export const createLogoTemplate = ({ alt, src, href }) => {
  return `
    <div class="header__logo">
      <a href="${href}" class="logo__link">
        <img class="link__name" src="${src}" alt="${alt}" />
      </a>
    </div>
  `;
};

export const burgerTemplate = `
  <div class="header__burger_menu">
    <div class="burger_menu__line"></div>
    <div class="burger_menu__line"></div>
    <div class="burger_menu__line"></div>
  </div>
`;

export const createMenuItemTemplate = ({ title, href, active }) => {
  return `
    <li class="menu__item${active ? " active" : ""}">
      <a href="${href}" class="item__link">${title}</a>
    </li>
  `;
};

export const createButtonTemplate = ({ title, href, isPrimary }) => {
  return `
    <a href="${href}">
      <button class="cta_buttons__signin btn${isPrimary ? " primary-btn" : ""}">
        ${title}
      </button>
    </a>
  `;
};

export const createRightHeaderTemplate = ({
  menuItemsTemplate,
  ctaButtonsTemplate,
}) => {
  return `
    <div class="header__right hidden">
      <aside class="header__menu">
        <div class="menu__close">
          <div class="menu__line"></div>
          <div class="menu__line"></div>
        </div>
        <ul class="menu">
          ${menuItemsTemplate}
        </ul>
      </aside>

      <div class="cta_buttons">
        ${ctaButtonsTemplate}
      </div>
    </div>
  `;
};

export const headerTemplate = ({ logoData, menuData, buttonsData }) => {
  const logoItemsTemplate = createLogoTemplate(logoData);

  const menuItemsTemplate = menuData
    .map((menuItem) => createMenuItemTemplate(menuItem))
    .join("");

  const ctaButtonsTemplate = buttonsData
    .map((button) => createButtonTemplate(button))
    .join("");

  const rightHeaderTemplate = createRightHeaderTemplate({
    menuItemsTemplate,
    ctaButtonsTemplate,
  });

  return logoItemsTemplate + burgerTemplate + rightHeaderTemplate;
};
