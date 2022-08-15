/* Permanecer marcação de link/menu de acordo com a página
 */

const pinLink = document.querySelectorAll(".header-menu a");

function stayLink(link) {
  const page = location.href;
  const href = link.href;

  if (page.includes(href)) {
    link.classList.add("ativar");
  }
}

pinLink.forEach(stayLink);

/* ============================================ */

/* Marcar items do orçamento */

const parameter = new URLSearchParams(location.search);

function checkParameter(param) {
  const element = document.getElementById(param);
  if (element) {
    element.checked = true;
  }
}

parameter.forEach(checkParameter);
