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

/* =================================================
 */

/* Clicar foto menor e colocar como principal */

const galery = document.querySelectorAll(".catalogo-img img");
const galeryBox = document.querySelector(".catalogo-img");

/**@param {MouseEvent} event */

function picMajor(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1018px)").matches;
  if (media) {
    galeryBox.prepend(img);
  }
}

function selectPic(picture) {
  picture.addEventListener("click", picMajor);
}

galery.forEach(selectPic);
