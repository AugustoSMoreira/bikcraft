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