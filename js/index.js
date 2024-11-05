const categoriaLista = document.getElementById("lista-categorias");

async function fetchCategoria() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories");
    const categoria = await response.json();

    categoria.forEach(categoria => {
      const categoriaCard = document.createElement("div");
      categoriaCard.classList.add("col-md-4", "mb-4");

      categoriaCard.innerHTML = `
        <div class="card h-100">
          <img src="${categoria.image}" class="card-img-top" alt="${categoria.name}">
          <div class="card-body">
            <h5 class="card-title">${categoria.name}</h5>
          </div>
        </div>
      `;
      categoriaLista.appendChild(categoriaCard);
    });
  } catch (error) {
    console.error("Error al obtener la información:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchCategoria();
});
