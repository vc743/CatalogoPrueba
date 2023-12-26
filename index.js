/*----FILTRADO----*/
/* Este código maneja la funcionalidad de filtrado de las tarjetas en la página web. */
const cardContainers = document.querySelectorAll(".col-12");
const menuLinks = document.querySelectorAll(".nav-menu-link");
const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasNavbar'));

menuLinks.forEach(link => {
  link.addEventListener("click", function() {

    // Cierra el menu lateral al hacer clic en un enlace
    offcanvas.hide();

    const filterText = this.textContent; // Obteniendo el texto del botón

    cardContainers.forEach(card => {
      const cardText = card.querySelector(".card-text").textContent;
      if (cardText.includes(filterText) || filterText === "Todos los modelos") {
        card.classList.remove("invisible");
      }else {
        card.classList.add("invisible");
      }
    });
  });
});