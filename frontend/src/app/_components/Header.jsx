import React from 'react'

const Header = () => {
  return (
    <div>
      <header
        className="js-head-main head-main    head-colors position-sticky position-relative-md head-logo-center head-logo-md-center   head-md-visible-nav   transition-soft"
        data-store="head"
      >
        <section className="js-adbar section-adbar section-adbar-animated section-adbar-colors adbar-with-messages ">
          <div
            className="js-adbar-animated adbar-animated"
            style={{
              animation: "80.05s linear 0s infinite normal none running marquee"
            }}
          >
            <div className="js-adbar-text-container adbar-text-container align-items-center">
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  25% OFF EFECTIVO / TRANSFERENCIA
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  6 CUOTAS SIN&nbsp;INTERÉS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/showroom/">
                  TENEMOS SHOWROOM VISITANOS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  25% OFF EFECTIVO / TRANSFERENCIA
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  6 CUOTAS SIN&nbsp;INTERÉS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/showroom/">
                  TENEMOS SHOWROOM VISITANOS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  25% OFF EFECTIVO / TRANSFERENCIA
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  6 CUOTAS SIN&nbsp;INTERÉS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/showroom/">
                  TENEMOS SHOWROOM VISITANOS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  25% OFF EFECTIVO / TRANSFERENCIA
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  6 CUOTAS SIN&nbsp;INTERÉS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/showroom/">
                  TENEMOS SHOWROOM VISITANOS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  25% OFF EFECTIVO / TRANSFERENCIA
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  6 CUOTAS SIN&nbsp;INTERÉS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/showroom/">
                  TENEMOS SHOWROOM VISITANOS
                </a>
              </span>
            </div>

          </div>
        </section>

        <div className="head-logo-row position-relative transition-soft">
          <div className="container-fluid">

            <div className="js-nav-logo-bar row no-gutters align-items-center">
              <div className="order-first col-3 order-md-first  col-md-auto col-utility d-md-none">
                <span className="utilities-container d-inline-block">
                  <a
                    href="https://barnesindustries.com.ar/#"
                    className="js-modal-open utilities-item btn btn-utility pl-0 pl-md-0"
                    data-toggle="#nav-hamburger"
                    aria-label="Menú"
                    data-component="menu-button"
                  >
                    <span className="utilities-text">Menú</span>
                  </a>
                </span>
              </div>

              <div className="js-logo-container col text-center col-md order-md-1 text-md-center ml-md-5">
                <div id="logo" className="logo-img-container ">
                  <a href="https://barnesindustries.com.ar/" title="">
                    <img
                      src="../barnes-logo.webp"
                      alt="Barnes Industries"
                      className="logo-img transition-soft logo-img-small"
                      width={474}
                      height={49}
                    />
                  </a>
                  <h1 style={{ display: "none" }}>Barnes Industries</h1>
                </div>
              </div>

              <div
                className="js-utility-col js-search-utility col-auto desktop-utility-col col-md-3 mr-md-5 col-utility  order-md-0"
                style={{ visibility: "visible", height: "auto" }}
              >
                <span className="d-none d-md-inline-block ">
                  <span className="utilities-container d-inline-block">
                    <a
                      href="https://barnesindustries.com.ar/#"
                      className="js-search-button js-modal-open js-fullscreen-modal-open btn btn-utility utilities-item pl-md-0"
                      data-modal-url="modal-fullscreen-search"
                      data-toggle="#nav-search"
                      aria-label="Buscador"
                    >
                      <span className="utilities-text">Buscar</span>
                    </a>
                  </span>
                </span>

              </div>

              <div
                className="js-utility-col col-utility desktop-utility-col text-right d-none d-md-inline-block order-md-1 col-md-3"
                style={{ visibility: "visible", height: "auto" }}
              >
                <span className="utilities-container text-transform">
                  <a
                    href="https://barnesindustries.com.ar/account/login/"
                    className="btn btn-utility"
                  >
                    <span className="utilities-text">Login</span>
                  </a>
                </span>
              </div>

              <div
                className="js-utility-col col-auto col-utility desktop-utility-col order-last"
                style={{ visibility: "visible", height: "auto" }}
              >
                <span className="utilities-container d-inline-block">
                  <div
                    id="ajax-cart"
                    className="cart-summary"
                    data-component="cart-button"
                  >
                    <a
                      href="https://barnesindustries.com.ar/#"
                      data-toggle="#modal-cart"
                      data-modal-url="modal-fullscreen-cart"
                      className="js-modal-open js-fullscreen-modal-open btn btn-utility d-flex pr-0"
                    >
                      <span className="utilities-text">Carrito</span>
                      <span className="js-cart-widget-amount badge">0</span>
                    </a>
                  </div>
                </span>
              </div>

              <div className="d-block d-md-none">
                <div
                  className="js-alert-added-to-cart notification-floating notification-cart-container notification-hidden notification-fixed position-absolute position-fixed-md"
                  style={{ display: "none", top: 93, marginTop: "-1px" }}
                >
                  <div className="notification notification-primary notification-cart p-0">
                    <div className="js-cart-notification-close notification-close">
                      <svg className="icon-inline icon-2x notification-icon">
                        <use xlinkHref="#times" />
                      </svg>
                    </div>
                    <div
                      className="js-cart-notification-item row no-gutters align-items-center"
                      data-store="cart-notification-item"
                    >
                      <div className="col-auto pr-0 notification-img">
                        <img
                          src="https://barnesindustries.com.ar/"
                          className="js-cart-notification-item-img img-absolute-centered-vertically"
                        />
                      </div>
                      <div className="col text-left pl-2 pr-4 font-body">
                        <div className="mb-1 mr-2 text-transform font-weight-bold">
                          <span className="js-cart-notification-item-name" />
                          <span
                            className="js-cart-notification-item-variant-container"
                            style={{ display: "none" }}
                          >
                            (<span className="js-cart-notification-item-variant" />)
                          </span>
                        </div>
                        <div className="mb-1">
                          <span className="js-cart-notification-item-quantity" />
                          <span> x </span>
                          <span className="js-cart-notification-item-price" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="head-nav d-none d-md-block">
          <div className="container-fluid text-center">
            <div className="nav-desktop">

              <ul
                className="js-nav-desktop-list nav-desktop-list"
                data-store="navigation"
                data-component="menu"
              >
                <span
                  className="js-nav-desktop-list-arrow js-nav-desktop-list-arrow-left nav-desktop-list-arrow nav-desktop-list-arrow-left disable"
                  style={{ display: "none" }}
                >
                  <svg className="icon-inline icon-lg icon-flip-horizontal">
                    <use xlinkHref="#chevron" />
                  </svg>
                </span>

                <li
                  className="js-desktop-nav-item js-nav-main-item nav-main-item nav-item-desktop nav-item"
                  data-component="menu.item"
                >
                  <a
                    className="nav-list-link selected"
                    href="https://barnesindustries.com.ar/"
                  >
                    INICIO
                  </a>
                </li>

                <li
                  className="js-desktop-nav-item js-nav-main-item nav-main-item nav-item-desktop nav-item"
                  data-component="menu.item"
                >
                  <a
                    className="nav-list-link "
                    href="https://barnesindustries.com.ar/new-collection/"
                  >
                    NEW COLLECTION
                  </a>
                </li>

                <li
                  className="js-desktop-nav-item js-item-subitems-desktop nav-item-desktop js-nav-main-item nav-dropdown nav-main-item nav-item item-with-subitems"
                  data-component="menu.item"
                >
                  <div className="nav-item-container">
                    <a
                      className=" nav-list-link position-relative "
                      href="https://barnesindustries.com.ar/productos/"
                    >
                      PRODUCTOS
                    </a>
                  </div>
                  <div
                    className="js-desktop-dropdown nav-dropdown-content desktop-dropdown"
                    style={{ maxHeight: 398, pointerEvents: "initial" }}
                  >
                    <div className="container-fluid desktop-dropdown-container">
                      <ul className="desktop-list-subitems  list-subitems">
                        <li
                          className="js-desktop-nav-item  nav-item-desktop nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/new-collection/"
                          >
                            NEW COLLECTION
                          </a>
                        </li>
                        <li
                          className="js-desktop-nav-item js-item-subitems-desktop nav-item-desktop  nav-item item-with-subitems"
                          data-component="menu.item"
                        >
                          <div className="nav-item-container">
                            <a
                              className=" nav-list-link position-relative "
                              href="https://barnesindustries.com.ar/abrigos/"
                            >
                              Abrigos
                            </a>
                          </div>
                          <ul className="  list-subitems">
                            <li
                              className="js-desktop-nav-item  nav-item-desktop nav-item"
                              data-component="menu.item"
                            >
                              <a
                                className="nav-list-link "
                                href="https://barnesindustries.com.ar/abrigos/sweaters/"
                              >
                                Sweaters
                              </a>
                            </li>
                            <li
                              className="js-desktop-nav-item  nav-item-desktop nav-item"
                              data-component="menu.item"
                            >
                              <a
                                className="nav-list-link "
                                href="https://barnesindustries.com.ar/abrigos/jackets/"
                              >
                                Jackets
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="js-desktop-nav-item js-item-subitems-desktop nav-item-desktop  nav-item item-with-subitems"
                          data-component="menu.item"
                        >
                          <div className="nav-item-container">
                            <a
                              className=" nav-list-link position-relative "
                              href="https://barnesindustries.com.ar/remeras-oversize/"
                            >
                              Remeras
                            </a>
                          </div>
                          <ul className="  list-subitems">
                            <li
                              className="js-desktop-nav-item  nav-item-desktop nav-item"
                              data-component="menu.item"
                            >
                              <a
                                className="nav-list-link "
                                href="https://barnesindustries.com.ar/remeras-oversize/boxy/"
                              >
                                Boxy
                              </a>
                            </li>
                            <li
                              className="js-desktop-nav-item  nav-item-desktop nav-item"
                              data-component="menu.item"
                            >
                              <a
                                className="nav-list-link "
                                href="https://barnesindustries.com.ar/remeras-oversize/oversize/"
                              >
                                Oversize
                              </a>
                            </li>
                            <li
                              className="js-desktop-nav-item  nav-item-desktop nav-item"
                              data-component="menu.item"
                            >
                              <a
                                className="nav-list-link "
                                href="https://barnesindustries.com.ar/remeras-oversize/heavyweight/"
                              >
                                Heavyweight
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item-desktop nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/pants/"
                          >
                            Pants
                          </a>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item-desktop nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/shorts/"
                          >
                            Shorts
                          </a>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item-desktop nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/sale/"
                          >
                            SALE
                          </a>
                        </li>
                        <li
                          className="js-desktop-nav-item js-item-subitems-desktop nav-item-desktop  nav-item item-with-subitems"
                          data-component="menu.item"
                        >
                          <div className="nav-item-container">
                            <a
                              className=" nav-list-link position-relative "
                              href="https://barnesindustries.com.ar/accesorios/"
                            >
                              Accesorios
                            </a>
                          </div>
                          <ul className="  list-subitems">
                            <li
                              className="js-desktop-nav-item  nav-item-desktop nav-item"
                              data-component="menu.item"
                            >
                              <a
                                className="nav-list-link "
                                href="https://barnesindustries.com.ar/accesorios/beanies/"
                              >
                                Beanies
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item-desktop nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/ver-todo/"
                          >
                            Ver Todo
                          </a>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item-desktop nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/gift-card1/"
                          >
                            Gift Cards
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li
                  className="js-desktop-nav-item js-nav-main-item nav-main-item nav-item-desktop nav-item"
                  data-component="menu.item"
                >
                  <a
                    className="nav-list-link "
                    href="https://barnesindustries.com.ar/sale/"
                  >
                    SALE
                  </a>
                </li>

                <span
                  className="js-nav-desktop-list-arrow js-nav-desktop-list-arrow-right nav-desktop-list-arrow nav-desktop-list-arrow-right"
                  style={{ display: "none" }}
                >
                  <svg className="icon-inline icon-lg">
                    <use xlinkHref="#chevron" />
                  </svg>
                </span>
              </ul>

            </div>
          </div>
        </div>

      </header>
    </div>
  )
}

export default Header