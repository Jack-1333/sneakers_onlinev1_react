const contenidoHombre = document.querySelector('#contenidohombre');
const checkAdidas = document.querySelector('.checkadidas');
const checkNike = document.querySelector('.checknike');
const checkPrecio1 = document.querySelector('.checkprecio1')
const checkPrecio2 = document.querySelector('.checkprecio2')
const checkPrecio3 = document.querySelector('.checkprecio3')
const talla1 = document.querySelector('#talla1')
const talla2 = document.querySelector('#talla2')
const talla3 = document.querySelector('#talla3')
const talla4 = document.querySelector('#talla4')
const talla5 = document.querySelector('#talla5')
const talla6 = document.querySelector('#talla6')
const talla7 = document.querySelector('#talla7')
const talla8 = document.querySelector('#talla8')
const talla9 = document.querySelector('#talla9')
const talla10 = document.querySelector('#talla10')
const talla11 = document.querySelector('#talla11')
const talla12 = document.querySelector('#talla12')

export const getProductosH = async() => {
    const listaProductosH = await fetch ("/src/products/productsListMen.json");
    const dataProductosH = await listaProductosH.json();
    const body = document.querySelector('body');

    dataProductosH.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
}