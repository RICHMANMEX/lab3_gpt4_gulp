export const createFooterLinksTemplate = (items) => {
  return items.map((item) => `<li><a href="#">${item}</a></li>`).join("");
};

export const footerTemplate = (data) => {
  const linksTemplate = createFooterLinksTemplate(data.links.items);
  const companyTemplate = createFooterLinksTemplate(data.company.items);

  return `
    <div class="footer_container">
      <div class="footer_column">
        <h3 class="footer_logo">${data.logo}</h3>

        <p class="footer_address">
          ${data.address}
        </p>

        <p class="footer_rights">${data.rights}</p>
      </div>

      <div class="footer_column">
        <h4 class="footer_title">${data.links.title}</h4>

        <ul class="footer_links">
          ${linksTemplate}
        </ul>
      </div>

      <div class="footer_column">
        <h4 class="footer_title">${data.company.title}</h4>

        <ul class="footer_links">
          ${companyTemplate}
        </ul>
      </div>

      <div class="footer_column">
        <h4 class="footer_title">${data.contacts.title}</h4>

        <p class="footer_address">${data.contacts.address}</p>

        <p class="footer_phone">
          <a href="${data.contacts.phoneHref}">${data.contacts.phone}</a>
        </p>

        <p class="footer_email">
          <a href="${data.contacts.emailHref}">${data.contacts.email}</a>
        </p>
      </div>
    </div>

    <div class="footer_bottom">
      <p>${data.copyright}</p>
    </div>
  `;
};
