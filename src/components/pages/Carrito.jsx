import React from 'react'

export const Carrito = () => {
  return (
    <>
      <section id="carritovacio" className="esconder-carritoo container-md ventana-carrito">
          <div className="d-flex flex-column justify-content-center align-items-center gap-4 mt-5 py-2">
              <p className="fs-1 fw-bold text-primary">Upss!! Tu carrito está vacío..!!</p>
              <a className="edit-boton-comprar btn btn-primary fs-4 fw-bold" to="/ofertas">Ver Ofertas</a>
          </div>
      </section>
      <section id="pintarproducto" className="container-md">         

      </section>
      {/* <section id="totales" className="container-md">
          <div className="d-flex flex-column justify-content-center align-items-center">
              <p>Cantidad: <span id="unidades">0</span></p>
              <p>Total a Pagar: S/. <span id="precio">0</span></p>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-4 my-2 py-2">
              <button disabled className="edit-boton-comprar btn btn-primary fs-4 fw-bold">Comprar <i className="bi bi-currency-dollar"></i></button>
              <button id="vaciarcarrito" className="edit-boton-comprar btn btn-primary fs-4 fw-bold">Vaciar Carrito <i className="bi bi-cart4"></i></button>
          </div>
      </section> */}
    </>
  )
}
