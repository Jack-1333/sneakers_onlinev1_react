import React from 'react'
import productsListMenData from '../products/productsListMen.json'
export const ProductsMen = () => {
  return (
    <>
    <section className='container-md'>
      <div className='row'>
          <div className="col-5 col-md-6 d-flex align-items-center justify-content-start product">
              <h2 className="product_title">Zapatillas Hombre</h2>
          </div>
          <div className="col-7 col-md-6 d-flex align-items-center justify-content-end gap-4">
              <p id="openfiltro" className="mb-0 filtro-title">Mostrar Filtros<svg width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#000000" stroke-linecap="round"><path d="M10 8h10M4 16h10"/><circle cx="7" cy="8" r="3" transform="rotate(90 7 8)"/><circle cx="17" cy="16" r="3" transform="rotate(90 17 16)"/></g></svg></p>
              <p id="closefiltro" className="close-filtro mb-0 filtro-title">Ocultar Filtros<svg width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#000000" stroke-linecap="round"><path d="M10 8h10M4 16h10"/><circle cx="7" cy="8" r="3" transform="rotate(90 7 8)"/><circle cx="17" cy="16" r="3" transform="rotate(90 17 16)"/></g></svg></p>
              <a className="d-lg-none text-dark filtro-title" href="/src/producto/1_carrito.html">Ir a Carrito</a>
          </div>
          <div className='col-12'>
            <div className='row'>
              <div id="content-aside" className="col-2 content-asidee">
                <hr />
                  <div className="row">
                      <div className="col-12 select">
                          <h2 className="select_title">Marca</h2>
                          <div className="form-check py-2">
                              <input className="form-check-input checkadidas" type="checkbox" value="Adidas" id="flexCheckIndeterminate" />
                              <label className="form-check-label" for="flexCheckIndeterminate">Adidas</label>
                          </div>
                          <div className="form-check py-2">
                              <input className="form-check-input checknike" type="checkbox" value="Nike" id="flexCheckIndeterminate" />
                              <label className="form-check-label" for="flexCheckIndeterminate">Nike</label>
                          </div>
                      </div>
                  </div>
                <hr />
                  <div className="row">
                    <div className="col-12 select">
                        <h2 className="select_title">Género</h2>
                        <div className="form-check py-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                            <label className="form-check-label" for="flexCheckIndeterminate">Hombre</label>
                        </div>
                        <div className="form-check py-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                            <label className="form-check-label" for="flexCheckIndeterminate">Mujer</label>
                        </div>
                        <div className="form-check py-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                            <label className="form-check-label" for="flexCheckIndeterminate">Niño</label>
                        </div>
                        <div className="form-check py-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                            <label className="form-check-label" for="flexCheckIndeterminate">Ofertas</label>
                        </div>
                    </div>
                  </div>
                <hr />
                  <div className="row">
                    <div className="col-12 select">
                        <h2 className="select_title">Precio</h2>
                        <div className="form-check py-2">
                            <input className="form-check-input checkprecio1" type="checkbox" value="" min="109" max="320" id="flexCheckIndeterminate" />
                            <label className="form-check-label" for="flexCheckIndeterminate">S/.109.90 - S/.319.90</label>
                        </div>
                        <div className="form-check py-2">
                            <input className="form-check-input checkprecio2" type="checkbox" value="" min="329" max="520" id="flexCheckIndeterminate" />
                            <label className="form-check-label" for="flexCheckIndeterminate">S/.329.90 - S/.519.90</label>
                        </div>
                        <div className="form-check py-2">
                            <input className="form-check-input checkprecio3" type="checkbox" value="" min="539" max="740" id="flexCheckIndeterminate" />
                            <label className="form-check-label" for="flexCheckIndeterminate">S/.539.90 - S/.739.90</label>
                        </div>
                    </div>
                  </div>
                <hr />
                  <div className="row">
                    <div className="col-12 select">
                        <h2 className="select_title">Talla</h2>
                        <ul className="content">
                            <li className="content_talla"><button id="talla1" value="7" type="button" class="edit-boton btn btn-outline-primary">7</button></li>
                            <li className="content_talla"><button id="talla2" value="7.5" type="button" class="edit-boton btn btn-outline-primary">7.5</button></li>
                            <li className="content_talla"><button id="talla3" value="8" type="button" class="edit-boton btn btn-outline-primary">8</button></li>
                            <li className="content_talla"><button id="talla4" value="8.5" type="button" class="edit-boton btn btn-outline-primary">8.5</button></li>
                            <li className="content_talla"><button id="talla5" value="9" type="button" class="edit-boton btn btn-outline-primary">9</button></li>
                            <li className="content_talla"><button id="talla6" value="9.5" type="button" class="edit-boton btn btn-outline-primary">9.5</button></li>
                            <li className="content_talla"><button id="talla7" value="10" type="button" class="edit-boton btn btn-outline-primary">10</button></li>
                            <li className="content_talla"><button id="talla8" value="10.5" type="button" class="edit-boton btn btn-outline-primary">10.5</button></li>
                            <li className="content_talla"><button id="talla9" value="11" type="button" class="edit-boton btn btn-outline-primary">11</button></li>
                            <li className="content_talla"><button id="talla10" value="11.5" type="button" class="edit-boton btn btn-outline-primary">11.5</button></li>
                            <li className="content_talla"><button id="talla11" value="12" type="button" class="edit-boton btn btn-outline-primary">12</button></li>
                            <li className="content_talla"><button id="talla12" value="13" type="button" class="edit-boton btn btn-outline-primary">13</button></li>
                        </ul>
                    </div>
                  </div>
              </div>
              <div id="zoom" className="col-10">
                <div id="contenidohombre" className="row">
                    {productsListMenData.map(producto => 
                      <div className="col-6 col-md-4 col-xl-3 card my-3 py-3">
                        <img src={producto.imagen} alt={producto.imagen} />
                        <div className="card-body">
                            <h3 className="card-title">{producto.modelo}</h3>
                            <p className="card-text">{producto.marca}</p>
                            <p className="card-text">S/. {producto.precio}</p>
                        </div>
                        <button className="btn btn-primary d-block fs-2 fw-bold text-uppercase rounded-pill">Comprar <i class="bi bi-cart4"></i></button>
                      </div>
                      )}
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    </>
  )
}
