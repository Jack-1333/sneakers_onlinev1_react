import { React } from "react"
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import carousel_01 from "../image/carousel_01/carousel_01";
import categoria from "../image/categoria/categoria";
import iconicoAdidas from "../image/iconico_adidas/iconicoAdidas";
import iconicoNike from "../image/iconico_nike/iconicoNike";
import video from "../video/video";
import libro from "../image/libro.png"



export const HeaderApp = () => {
    return (
        <>
        <div className="row p-2 bg-dark">
            <div className="col-12 d-flex align-items-center justify-content-center gap-2 information">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><radialGradient id="IconifyId18bd0b4c54a43466d0" cx="68.884" cy="124.296" r="70.587" gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)" gradientUnits="userSpaceOnUse"><stop offset=".314" stop-color="#FF9800"/><stop offset=".662" stop-color="#FF6D00"/><stop offset=".972" stop-color="#F44336"/></radialGradient><path fill="url(#IconifyId18bd0b4c54a43466d0)" d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5z"/><radialGradient id="IconifyId18bd0b4c54a43466d1" cx="64.921" cy="54.062" r="73.86" gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)" gradientUnits="userSpaceOnUse"><stop offset=".214" stop-color="#FFF176"/><stop offset=".328" stop-color="#FFF27D"/><stop offset=".487" stop-color="#FFF48F"/><stop offset=".672" stop-color="#FFF7AD"/><stop offset=".793" stop-color="#FFF9C4"/><stop offset=".822" stop-color="#FFF8BD" stop-opacity=".804"/><stop offset=".863" stop-color="#FFF6AB" stop-opacity=".529"/><stop offset=".91" stop-color="#FFF38D" stop-opacity=".209"/><stop offset=".941" stop-color="#FFF176" stop-opacity="0"/></radialGradient><path fill="url(#IconifyId18bd0b4c54a43466d1)" d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.09 16.09 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88z"/></svg>
                <p className="m-0 information__text text-white">Sneakers Online - Envio Gratis Para Todo Lima</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><radialGradient id="IconifyId18bd0b4c54a43466d0" cx="68.884" cy="124.296" r="70.587" gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)" gradientUnits="userSpaceOnUse"><stop offset=".314" stop-color="#FF9800"/><stop offset=".662" stop-color="#FF6D00"/><stop offset=".972" stop-color="#F44336"/></radialGradient><path fill="url(#IconifyId18bd0b4c54a43466d0)" d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5z"/><radialGradient id="IconifyId18bd0b4c54a43466d1" cx="64.921" cy="54.062" r="73.86" gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)" gradientUnits="userSpaceOnUse"><stop offset=".214" stop-color="#FFF176"/><stop offset=".328" stop-color="#FFF27D"/><stop offset=".487" stop-color="#FFF48F"/><stop offset=".672" stop-color="#FFF7AD"/><stop offset=".793" stop-color="#FFF9C4"/><stop offset=".822" stop-color="#FFF8BD" stop-opacity=".804"/><stop offset=".863" stop-color="#FFF6AB" stop-opacity=".529"/><stop offset=".91" stop-color="#FFF38D" stop-opacity=".209"/><stop offset=".941" stop-color="#FFF176" stop-opacity="0"/></radialGradient><path fill="url(#IconifyId18bd0b4c54a43466d1)" d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.09 16.09 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88z"/></svg>
            </div>
        </div>

        <header className="container-sm header">
            <div className="row">
                <div className="col-8 col-lg-5">
                    <Link className="text-danger marca" to="/">Sneakers <span className="text-warning">Online</span></Link>
                </div>
                <div className="col-4 col-lg-6 d-flex justify-content-end align-items-center">
                    <a id="open" className="open-menu"><i className="bi bi-list icons-menu"></i></a>
                    <nav id="content-navb" className="content-nav">
                        <a id="close" className="close-menu icons"><i className="bi bi-x-lg icons-menu"></i></a>
                        <ul className="list-nav">
                            <li><Link className="text_nav" to="/">Inicio</Link></li>
                            <li><Link className="text_nav" to="/hombres">Hombres</Link></li>
                            <li><Link className="text_nav" to="/mujeres">Mujeres</Link></li>
                            <li><Link className="text_nav" to="/niños">Niños</Link></li>
                            <li><Link className="text_nav" to="/ofertas">Oferta</Link></li>
                        </ul>
                    </nav>
                
                </div>
                <div className="col-lg-1 d-flex justify-content-end align-items-center gap-4">
                    {/* <a className="d-none d-lg-block" href="src/eleccion/eleccion_ofertas.html"><i className="bi bi-search icons"></i></a>   */}
                    <Link className="d-none d-lg-block" to="/carrito"><i id="vercarrito" className="bi bi-bag icons"></i><span id="cantidadcarrito" className="cantidad-carrito">0</span></Link>
                    
                </div>
            </div>
        </header>
        </>
        
        
    );
}

export const MainApp = () => {
    return (
        <>
        <section className="carousel-up">
            <div id="carouselExampleInterval" className="carousel slide container-md" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={carousel_01.img01} className="d-block w-100" alt="image01" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={carousel_01.img02} className="d-block w-100" alt="image02" />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel_01.img03} className="d-block w-100" alt="image03" />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel_01.img04} className="d-block w-100" alt="image04" />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel_01.img05} className="d-block w-100" alt="image04" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        <section className="categoria container-md">
            <div className="row my-3">
                <div className="col-12">
                    <h2 className="categoria_title">Comprar por Grupo</h2>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                    <img className="categoria_image" src={categoria.men}  alt="Hombre" />
                    <Link className="btn btn-danger categoria_boton man" to="/hombres" role="button">Hombre</Link>
    
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                    <img className="categoria_image" src={categoria.women}  alt="Mujer" />
                    <Link className="btn btn-danger categoria_boton women" to="/mujeres" role="button">Mujer</Link>
    
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                    <img className="categoria_image" src={categoria.child}  alt="Niño" />
                    <Link className="btn btn-danger categoria_boton boy" to="/niños" role="button">Niño</Link>
                </div>
            </div>
        </section>
        <section className="multimedia container-md">
            <div className="row">
                <h2 className="multimedia__title">Nike Dance</h2>
                <div className="col-12 video">
                    <div className="overlay">
                        <div id="animation" className="text-video">
                            <h2>Sneakers Online</h2>
                        </div>
                    </div>
                    <div className="video__property">
                    <ReactPlayer url={video.video1} playing loop muted width='100%' height='100%'/>
                    </div>
                </div>
            </div>
            <div className="row my-4">
                <h2 className="multimedia__title">Poducto Original</h2>
                <div className="col-12 col-md-6 logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 24 24">
                        <path fill="#923a3a"
                            d="M11.936 17.952c0-.644.517-1.16 1.162-1.16c.644 0 1.16.516 1.16 1.16a1.157 1.157 0 0 1-1.16 1.161a1.157 1.157 0 0 1-1.162-1.16m4.724 0c0-.645.517-1.162 1.161-1.162s1.161.517 1.161 1.161s-.517 1.161-1.16 1.161a1.157 1.157 0 0 1-1.162-1.16m-10.95 0c0-.645.517-1.162 1.161-1.162s1.16.517 1.16 1.161s-.516 1.161-1.16 1.161a1.157 1.157 0 0 1-1.161-1.16m-4.724 0c0-.645.517-1.162 1.161-1.162s1.161.517 1.161 1.161a1.157 1.157 0 0 1-1.161 1.161a1.157 1.157 0 0 1-1.16-1.16m9.55-2.052h-1.01v4.063h1.01v-4.063zM3.3 19.964h1.01v-4.063H3.3v.326a2.087 2.087 0 0 0-1.2-.374c-1.162 0-2.1.938-2.1 2.1c0 1.168.938 2.099 2.1 2.099c.445 0 .858-.135 1.2-.374v.286zm15.674 0h1.01v-4.063h-1.01v.326a2.087 2.087 0 0 0-1.2-.374c-1.162 0-2.1.938-2.1 2.1a2.092 2.092 0 0 0 2.1 2.099c.445 0 .858-.135 1.2-.374v.286zm1.384-1.32c.032.82.732 1.4 1.9 1.4c.955 0 1.742-.414 1.742-1.328c0-.636-.358-1.01-1.185-1.17l-.644-.126c-.414-.08-.7-.16-.7-.406c0-.27.278-.39.628-.39c.51 0 .716.255.732.557h1.018c-.056-.795-.692-1.328-1.718-1.328c-1.057 0-1.686.58-1.686 1.336c0 .922.748 1.073 1.392 1.193l.533.095c.382.072.549.183.549.406c0 .199-.191.397-.645.397c-.66 0-.874-.342-.882-.636h-1.034zM8.024 14.517v1.71a2.087 2.087 0 0 0-1.2-.374c-1.162 0-2.1.938-2.1 2.1c0 1.168.938 2.099 2.1 2.099c.444 0 .858-.135 1.2-.374v.286h1.01v-5.447h-1.01zm6.226 0v1.71a2.087 2.087 0 0 0-1.2-.374c-1.161 0-2.1.938-2.1 2.1a2.092 2.092 0 0 0 2.1 2.099c.445 0 .858-.135 1.2-.374v.286h1.01v-5.447h-1.01zm-11.626-1.2l.684 1.2h4.716l-1.869-3.229l-3.53 2.028zm7.913 2.21v-1.01h3.713l-3.96-6.855L6.751 9.69l2.776 4.827v1.01h1.01zm5.217-1.01h4.723L14.37 3.948l-3.531 2.036l4.915 8.533z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 24 24">
                        <path fill="#923a3a"
                            d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925c-1.12 0-1.933-.392-2.437-1.177c-.317-.504-.41-1.143-.28-1.918c.13-.775.476-1.6 1.036-2.478c.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 0 0-.784 1.848c-.28 1.195-.028 2.072.756 2.632c.373.261.886.392 1.54.392c.522 0 1.11-.084 1.764-.252L24 7.8z" />
                    </svg>
                </div>
                <div className="col-12 col-md-6 video">
                    <div className="overlay">
                        <div id="animation" className="text-video">
                            <h2>Sneakers Online</h2>
                        </div>
                    </div>
                    <div className="video__property">
                    <ReactPlayer url={video.video2} playing loop muted width='100%' height='100%'/>
                    </div>
                    
                </div>
            </div>
        </section>
        <section className="carousel-down container-md">
            <h2>Iconicos</h2>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="bg-dark"
                        aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-3">
                                <div className="card my-3 border-0">
                                    <img src={iconicoNike.img01} className="d-block w-100" alt="image01" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Air Force</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card my-3 border-0">
                                    <img src={iconicoNike.img02}  className="d-block w-100" alt="image01" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Dunk</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card my-3 border-0">
                                    <img src={iconicoNike.img03}  className="d-block w-100" alt="image01" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Airmax</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card my-3 border-0">
                                    <img src={iconicoNike.img04}  className="d-block w-100" alt="image01" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Jordan</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-3">
                                <div className="card my-3 border-0">
                                    <img src={iconicoAdidas.img01} className="d-block w-100" alt="image01" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Rekive Blanco</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card my-3 border-0">
                                    <img src={iconicoAdidas.img02} className="d-block w-100" alt="image01" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Rekive Negro</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card my-3 border-0">
                                    <img src={iconicoAdidas.img03} className="d-block w-100" alt="image01" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Duramo Negro</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card my-3 border-0">
                                    <img src={iconicoAdidas.img04} className="d-block w-100" alt="image01" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Duramo Verde</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        </>
        
        
    );
}

export const FooterApp = () => {
    return (
        <>
        <section className="footer bg-dark px-4 pt-4">
    <div className="row px-4 py-2">
        <div className="col-12 col-md-3 d-flex flex-column">
            <a className="heading_footer" href="#">Buscar Tienda</a>
            <a className="sub-heading_footer" href="#">Registrarse para recibir correo</a>
            <a className="sub-heading_footer" href="#">Hazte Miembro</a>
        </div>
        <div className="col-12 col-md-2 d-flex flex-column">
            <h2 className="heading_footer">Obtener Ayuda</h2>
            <a className="text_footer" href="#">Estado del Pedido</a>
            <a className="text_footer" href="#">Envío y entrega</a>
            <a className="text_footer" href="#">Cambios, devoluciones y garantías</a>
            <a className="text_footer" href="#">Opciones de pago</a>
            <a className="text_footer" href="#">Preguntas frecuentes</a>
            <a className="text_footer" href="#">Comunícate con nosotros</a>
        </div>
        <div className="col-12 col-md-2 d-flex flex-column">
            <h2 className="heading_footer">Sneakers Online</h2>
            <a className="text_footer" href="#">Empleo</a>
        </div>
        <div className="col-12 col-md-5">
            <div className="row">
                <div className="col-12 d-flex justify-content-start justify-content-md-end gap-3">
                    <svg className="icons_footer" xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                        viewBox="0 0 24 24">
                        <path fill="#FFFFFF"
                            d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z" />
                    </svg>
                    <svg className="icons_footer" xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                        viewBox="0 0 24 24">
                        <path fill="#FFFFFF"
                            d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                    </svg>
                    <svg className="icons_footer" xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                        viewBox="0 0 24 24">
                        <path fill="#FFFFFF"
                            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" />
                    </svg>
                    <svg className="icons_footer" xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                        viewBox="0 0 16 16">
                        <path fill="#FFFFFF"
                            d="M6.6 0h-.9l-.6 2.3L4.5 0h-1c.2.6.4 1.1.6 1.7c.3.8.5 1.5.5 1.9V6h.9V3.6L6.6 0zM9 4.5V3c0-.5-.1-.8-.3-1.1s-.5-.4-.9-.4s-.7.2-.9.5c-.2.2-.3.5-.3 1v1.6c0 .5.1.8.3 1c.2.3.5.4.9.4s.7-.2.9-.5c.2-.1.3-.5.3-1zm-.8.2c0 .4-.1.6-.4.6s-.4-.2-.4-.6V2.8c0-.4.1-.6.4-.6s.4.2.4.6v1.9zM12 6V1.5h-.8v3.4c-.2.3-.3.4-.5.4c-.1 0-.2-.1-.2-.2V1.5h-.8V5c0 .3 0 .5.1.7c0 .2.2.3.5.3s.6-.2.9-.5V6h.8zm.4 4.5c-.3 0-.4.2-.4.6v.4h.8v-.4c0-.4-.1-.6-.4-.6zm-2.9 0c-.1 0-.3.1-.4.2v2.7c.1.1.3.2.4.2c.2 0 .3-.2.3-.6v-1.9c0-.4-.1-.6-.3-.6z" />
                        <path fill="#000000"
                            d="M14.4 8.3C14.2 7.6 13.6 7 13 7c-1.6-.2-3.3-.2-5-.2s-3.3 0-5 .2c-.6 0-1.2.6-1.4 1.3c-.2 1-.2 2.1-.2 3.1s0 2.1.2 3.1c.2.7.7 1.2 1.4 1.3c1.7.2 3.3.2 5 .2s3.3 0 5-.2c.7-.1 1.3-.6 1.4-1.3c.2-1 .2-2.1.2-3.1s0-2.1-.2-3.1zm-9.2.9h-1v5.1h-.9V9.2h-.9v-.9h2.8v.9zm2.4 5.1h-.8v-.5c-.3.4-.6.5-.9.5s-.4-.1-.5-.3c0-.1-.1-.3-.1-.7V9.8h.8v3.5c0 .1.1.2.2.2c.2 0 .3-.1.5-.4V9.8h.8v4.5zm3-1.4c0 .4 0 .7-.1.9c-.1.3-.3.5-.6.5s-.6-.2-.8-.5v.4h-.8V8.3h.8v1.9c.3-.3.5-.5.8-.5s.5.2.6.5c.1.2.1.5.1.9v1.8zm3-.7H12v.8c0 .4.1.6.4.6c.2 0 .3-.1.4-.3v-.5h.8v.6c0 .2-.1.3-.2.5c-.2.3-.5.5-1 .5c-.4 0-.7-.2-1-.5c-.2-.2-.3-.6-.3-1v-1.5c0-.5.1-.8.2-1c.2-.3.5-.5 1-.5c.4 0 .7.2.9.5c.2.2.2.6.2 1v.8z" />
                    </svg>
                </div>
                <div className="col-12 d-flex justify-content-start justify-content-md-end mt-3">
                    <img className="l-reclamaciones" src={libro} alt="libro" />
                </div>
            </div>
        </div>
    </div>
    <div className="col-12 pt-5">
        <p className="text-white text-center text_footer">2023 Sneakers Online. Todos los derechos reservados.</p>
    </div>
</section>

        </>
        
        
    );
}
