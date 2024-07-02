import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer
        className="js-footer js-hide-footer-while-scrolling footer container-fluid footer-colors display-when-content-ready"
        data-store="footer"
      >
        <div className="row">
          <div className="col-md-6 mb-4 pb-2 mb-md-5 pb-md-0 pb-md-0 pr-md-5">
            <ul className="list pr-md-5">
              <li className="footer-menu-item">
                <a
                  className="h4-huge h2-huge-md footer-menu-link"
                  href="https://barnesindustries.com.ar/politica-de-cambios/"
                >
                  CAMBIOS
                </a>
              </li>
              <li className="footer-menu-item">
                <a
                  className="h4-huge h2-huge-md footer-menu-link"
                  href="https://barnesindustries.com.ar/cuidado-de-prenda/"
                >
                  CUIDADOS
                </a>
              </li>
              <li className="footer-menu-item">
                <a
                  className="h4-huge h2-huge-md footer-menu-link"
                  href="https://barnesindustries.com.ar/showroom/"
                >
                  VISITANOS
                </a>
              </li>
              <li className="footer-menu-item">
                <a
                  className="h4-huge h2-huge-md footer-menu-link"
                  href="https://barnesindustries.com.ar/ventas-mayoristas/"
                >
                  MAYORISTA
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 mb-4 pb-2 mb-md-5 pb-md-0 pr-0 pl-md-5 pr-md-3">
            <div className="js-footer-col-sticky col-sticky-md" style={{ top: 220 }}>
              <div className="mb-4 pb-2 mb-md-5 pb-md-0">
                <img
                  src='../barnes-banner.jpg'
                  className="img-fluid lazyloaded"
                />
              </div>
              <div className="list-horizontal mb-4 pb-md-3 pb-1">
                <a
                  className="btn-link text-transform text-capitalize mr-3"
                  href="https://instagram.com/barnesindustries"
                  target="_blank"
                  aria-label="instagram Barnes Industries"
                >
                  instagram
                </a>
                <a
                  className="btn-link text-transform text-capitalize mr-3"
                  href="https://www.tiktok.com/@barnes.industries"
                  target="_blank"
                  aria-label="tiktok Barnes Industries"
                >
                  tiktok
                </a>
              </div>
              <div className="divider d-md-none mb-4 pb-1 mr-3 mr-md-0" />
              <div className="mb-4 pb-3 pr-3 pr-md-0">
                <div className="contact-info row no-gutters">
                  <div className="col-md-auto">
                    <div className="contact-info-item mb-3 d-md-inline-block mr-md-3">
                      <div className="font-small text-transform mb-1 opacity-80">
                        Whatsapp
                      </div>
                      <a
                        href="https://wa.me/5491138249498"
                        className="btn-link text-transform"
                      >
                        5491138249498
                      </a>
                    </div>
                  </div>
                  <div className="col-md-auto">
                    <div className="contact-info-item mb-3 d-md-inline-block mr-md-3">
                      <div className="font-small text-transform mb-1 opacity-80">
                        Teléfono
                      </div>
                      <a href="tel:1170173648" className="btn-link text-transform">
                        1170173648
                      </a>
                    </div>
                  </div>
                  <div className="col-md-auto">
                    <div className="contact-info-item mb-3 d-md-inline-block mr-md-3">
                      <div className="font-small text-transform mb-1 opacity-80">
                        Email
                      </div>
                      <a
                        href="mailto:ventas.barnesindustries@gmail.com"
                        className="btn-link text-transform"
                      >
                        ventas.barnesindustries@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="col-md-auto">
                    <div className="text-transform mb-3 contact-info-item mb-3 d-md-inline-block mr-md-3">
                      <div className="font-small text-transform mb-1 opacity-80">
                        Dirección
                      </div>
                      Marcelo T de Alvear 1261 piso 3 Oficina 39
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-left text-md-center">
          <div className="powered-by-logo">
            <a
              target="_blank"
              title="Tiendanube"
              rel="nofollow"
              href="https://www.tiendanube.com/?utm_source=store&utm_medium=referral&utm_campaign=footerSlogan"
            >
              <svg
                title="Tiendanube"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1080 120"
                id="svg_brand"
              >
                <path d="M37.2 42.8c4.6 0 8.8 1.3 12.5 3.8v7.9c-3.9-3-7.9-4.4-12.2-4.4-9 0-15.5 6.9-15.5 15.8 0 8.8 6.5 15.8 15.5 15.8 4.6 0 8.9-2.1 12.4-4.4v7.9c-3.9 2.5-8.1 3.7-12.7 3.7-13.8 0-23.1-10.1-23.1-23.1 0-12.9 9.5-23 23.1-23zM80.5 51c-.1 0-.3 0-.5-.1-.4 0-1-.1-1.6-.1-8.3 0-13.2 6.5-13.2 16.1v21h-7.7V43.8H65v7.8c1.9-5.1 7.8-8.5 13.5-8.5.6 0 1 .1 1.4.1.3.1.5.1.5.1l.1 7.7zm1 14.8c0-13.1 9.4-23.1 22-23.1 12.4 0 21.4 10.1 21.4 22.7 0 1-.1 1.6-.1 2.1v.7H89.3c.5 7.7 7.2 13.6 14.8 13.6 6.6 0 10-3.2 12.8-7.5l6.4 3.3c-3.6 6.6-10.3 11.3-19.2 11.3-13.2 0-22.6-9.7-22.6-23.1zm35.4-4c-.7-6.9-6.5-12.3-13.7-12.3s-13.1 6.3-13.8 12.3h27.5zm27.9.3l13.2-1.6v-2.3c0-5.4-3.5-8.5-9.3-8.5-5.3 0-8.7 2.6-10.3 7.8l-7.4-2.1c2.2-7.7 8.9-12.6 17.5-12.6 10.8 0 17 6.1 17 16v29.1h-7.4v-5.8c-3.5 4.4-8.9 6.8-14.8 6.8-8.3 0-13.9-5.4-13.9-12.6.2-7.9 5.2-12.8 15.4-14.2zm.1 19.9c7.6 0 13.2-4.9 13.2-11.7v-3.2l-12 1.5c-5.5.7-8.6 3.4-8.6 7.2 0 3.7 3 6.2 7.4 6.2zm73.3-57.7v63.5h-7.7v-7c-3.2 4.8-9.1 8-15.6 8-12.6 0-22.2-10-22.2-23.1 0-13 9.5-23.1 22.2-23.1 6.5 0 12.3 2.8 15.6 7.6V24.3h7.7zm-22.5 25.6c-8.7 0-15.2 6.9-15.2 15.9s6.4 15.9 15.2 15.9 15.2-6.9 15.2-15.9-6.5-15.9-15.2-15.9zM272 65.8c0 12.7-9.7 23.1-23.1 23.1-13.3 0-23.1-10.3-23.1-23.1s9.7-23.1 23.1-23.1c13.4.1 23.1 10.4 23.1 23.1zm-38.2 0c0 8.8 6.4 15.9 15.2 15.9 8.8 0 15.2-7.1 15.2-15.9s-6.4-15.9-15.2-15.9-15.2 7.1-15.2 15.9zm77.7-23c4.6 0 8.8 1.3 12.5 3.8v7.9c-3.9-3-7.9-4.4-12.2-4.4-9 0-15.5 6.9-15.5 15.8 0 8.8 6.5 15.8 15.5 15.8 4.6 0 8.9-2.1 12.4-4.4v7.9c-3.9 2.5-8.1 3.7-12.7 3.7-13.8 0-23.1-10.1-23.1-23.1 0-12.9 9.6-23 23.1-23zm63.2 23c0 12.7-9.7 23.1-23.1 23.1-13.3 0-23.1-10.3-23.1-23.1s9.7-23.1 23.1-23.1c13.4.1 23.1 10.4 23.1 23.1zm-38.2 0c0 8.8 6.4 15.9 15.2 15.9s15.2-7.1 15.2-15.9-6.4-15.9-15.2-15.9-15.2 7.1-15.2 15.9zm53.7 22.1h-7.8V43.8h7.8v6.4c2.8-4.4 7.4-7.4 14.1-7.4 11.3 0 17.8 7.5 17.8 19.2v25.9h-7.8v-25c0-8-4-12.9-11.6-12.9s-12.4 5.7-12.4 14.8v23.1h-.1zM541.3 10s-.1 0 0 0c-13.1 0-25.6 5.1-34.9 14.2-4.7-2-9.9-3.1-15.2-3.1-21.4 0-38.9 17.4-38.9 38.9s17.4 38.9 38.9 38.9c5.2 0 10.4-1.1 15.1-3.1 9 8.8 21.3 14.2 34.8 14.2 27.6 0 50-22.4 50-50 .1-27.5-22.3-50-49.8-50zm-.1 88.9c-21.4 0-38.9-17.4-38.9-38.9h-11.1c0 9.8 2.8 19 7.7 26.7-2.5.7-5.1 1.1-7.7 1.1-15.3 0-27.8-12.5-27.8-27.8s12.5-27.8 27.8-27.8c6.1 0 11.8 1.9 16.7 5.6C515 43.1 519 51.2 519 60h11.1c0-11.6-5-22.4-13.9-29.8 7-5.8 15.8-9.1 25-9.1 21.4 0 38.9 17.5 38.9 38.9s-17.5 38.9-38.9 38.9zm78.2-11V52.3h-7.5v-8.9h7.5V30.2h10.5v13.2h7.5v8.9h-7.5v35.6h-10.5zm28.9-51c-3.5 0-6.4-2.9-6.4-6.4 0-3.6 2.9-6.5 6.4-6.5 3.7 0 6.5 3 6.5 6.5s-2.8 6.4-6.5 6.4zm-5.2 51V43.4h10.5v44.5h-10.5zm59.8-10.5c-3.7 7-10.6 11.5-20.1 11.5-13.5 0-23.1-9.6-23.1-23.3 0-13.3 9.8-23.3 22.6-23.3 13 0 22.1 10 22.1 23.3 0 .8 0 1.9-.1 3.2h-34.2c.5 6.4 6.2 11.3 12.8 11.3 5.8 0 8.8-2.8 11.3-6.7l8.7 4zm-8.8-16.2c-.7-5.9-5.4-10.3-11.9-10.3-6.3 0-11.2 5.2-11.9 10.3h23.8zm26.5 26.7h-10.5V43.4h10.5v5.9c2.8-4.3 7.4-7 13.6-7 10.9 0 17.2 7.2 17.2 18.8v26.8H741V63.1c0-6.9-3.4-11.1-9.9-11.1-6.3 0-10.4 4.8-10.4 12.4l-.1 23.5zm73.2 0v-6.4c-3.3 4.6-8.9 7.4-15.1 7.4C766.5 89 757 79 757 65.6c0-13.1 9.4-23.3 21.7-23.3 6.2 0 11.8 2.5 15.1 7.2V26.7h10.4v61.2h-10.4zm-12.9-8.5c7.5 0 13.3-6.2 13.3-13.8 0-7.6-5.8-13.8-13.3-13.8s-13.3 6.2-13.3 13.8c-.1 7.7 5.8 13.8 13.3 13.8zm45.3-17.8l12.1-1.5v-1.9c0-4.4-3.1-7.3-7.9-7.3-4.5 0-7.4 2.3-8.8 6.7l-9.6-2.5c2.2-8 9.3-12.9 18.4-12.9 11.6 0 18.1 6.1 18.1 16.6v28.9h-9.8l-.1-5.4c-3 4.3-8.1 6.5-13.9 6.5-8.4 0-14.3-5.4-14.3-12.9 0-7.9 5.2-12.7 15.8-14.3zm1 18.9c6.5 0 11.2-4.2 11.2-10.1v-2.5l-10.1 1.4c-5 .6-7.4 2.9-7.4 6.1s2.5 5.1 6.3 5.1zm40.2 7.4h-10.5V43.4h10.5v5.9c2.8-4.3 7.4-7 13.6-7 10.9 0 17.2 7.2 17.2 18.8v26.8h-10.5V63.1c0-6.9-3.4-11.1-9.9-11.1-6.3 0-10.4 4.8-10.4 12.4v23.5zm38.5-19.2V43.4h10.5v24.7c0 7 3.4 11.2 9.3 11.2s9.3-4.2 9.3-11.2V43.4h10.5v25.3c0 12.8-7.4 20.2-19.8 20.2-12.3.1-19.8-7.4-19.8-20.2zm48 19.2V26.7h10.4v23.1c3.3-4.6 8.9-7.4 15.1-7.4 12.3 0 21.7 10 21.7 23.3 0 13.1-9.4 23.3-21.7 23.3-6.2 0-11.8-2.5-15.1-7.2v6.1h-10.4zm23.3-36.1c-7.5 0-13.3 6.2-13.3 13.8s5.8 13.8 13.3 13.8 13.3-6.2 13.3-13.8c.1-7.6-5.7-13.8-13.3-13.8zm70.6 25.6c-3.7 7-10.6 11.5-20.1 11.5-13.5 0-23.1-9.6-23.1-23.3 0-13.3 9.8-23.3 22.6-23.3 13 0 22.1 10 22.1 23.3 0 .8 0 1.9-.1 3.2H1015c.5 6.4 6.2 11.3 12.8 11.3 5.8 0 8.8-2.8 11.3-6.7l8.7 4zm-8.9-16.2c-.7-5.9-5.4-10.3-11.9-10.3-6.3 0-11.2 5.2-11.9 10.3h23.8z"></path>
              </svg>
            </a>
          </div>
          <div className="my-3 my-md-2 font-small">
            Copyright Barnes Industries - 2024. Todos los derechos reservados.
          </div>
          <div className="claim-link font-small">
            <span className="d-inline-block mb-1">
              Defensa de las y los consumidores. Para reclamos
            </span>
            <a
              className="btn-link font-small"
              href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario"
              target="_blank"
              data-component="consumer-defense"
            >
              ingresá acá.
            </a>
            <span className="mx-1">/</span>
            <a
              className="btn-link font-small"
              href="https://barnesindustries.com.ar/contacto/?order_cancellation_without_id=true"
              data-component="order-cancellation"
            >
              Botón de arrepentimiento
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer