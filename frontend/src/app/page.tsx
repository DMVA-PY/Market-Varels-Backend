import React from 'react'

const page = () => {
  return (
    <div>

        {/* 1 */}
        <section
          className="section-home-color is-inViewport"
          data-store="home-slider"
          data-transition="fade-in"
        >
          <div className="js-home-main-slider-container ">
            <div className="js-home-main-slider-visibility d-none d-md-block">
              <div className="section-slider position-relative">
                <div className="js-home-slider h-100 swiper-container swiper-container-horizontal swiper-container-initialized">
                  <div
                    className="swiper-wrapper"
                    style={{
                      transition: "all 0ms ease 0s",
                      transform: "translate3d(0px, 0px, 0px)"
                    }}
                  >
                    <div
                      className="swiper-slide slide-container swiper- swiper-slide-active"
                    >
                      <div className="slider-slide">
                        <img
                          className="slider-image swiper-lazy fade-in swiper-lazy-loaded"
                          alt="Carrusel 1"
                          src="../barnes-main.webp"
                        />
                        <div className="placeholder-fade" />
                      </div>
                    </div>
                  </div>
                  <div className="js-swiper-home-arrows swiper-buttons"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="js-home-mobile-slider-visibility d-md-none">
            <div className="section-slider position-relative">
              <div className="js-home-slider-mobile h-100 swiper-container swiper-container-horizontal swiper-container-initialized">
                <div
                  className="swiper-wrapper"
                  style={{
                    transition: "all 0ms ease 0s",
                    transform: "translate3d(0px, 0px, 0px)"
                  }}
                >
                  <div
                    className="swiper-slide slide-container swiper- swiper-slide-active"
                  >
                    <a
                      href="https://barnesindustries.com.ar/new-collection/"
                      aria-label="Carrusel 1"
                    >
                      <div className="slider-slide">
                        <img
                          width={1080}
                          height={1920}
                          src="./Barnes Industries_files/2-slide-1718723545458-1785893221-8668d1a990cb4848075f14357a82729e1718723549-480-0.webp"
                          srcSet="//acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718723545458-1785893221-8668d1a990cb4848075f14357a82729e1718723549-480-0.webp?125514776 480w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718723545458-1785893221-8668d1a990cb4848075f14357a82729e1718723549-640-0.webp?125514776 640w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718723545458-1785893221-8668d1a990cb4848075f14357a82729e1718723549-1024-1024.webp?125514776 1024w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718723545458-1785893221-8668d1a990cb4848075f14357a82729e1718723549-1920-1920.webp?125514776 1920w"
                          className="slider-image  "
                          alt="Carrusel 1"
                        />
                        <div className="placeholder-fade" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="js-swiper-home-arrows swiper-buttons"></div>
              </div>
            </div>
          </div>
        </section>
        {/* 2 */}
        <section
          className="section-home section-banners-home position-relative overflow-none section-home-color p-0"
          data-store="home-banner-promotional"
        >
          <div className="container-fluid px-md-3 position-relative"></div>

          <div className="container-fluid p-0 overflow-none">
            <div className="row no-gutters">
              <div className="col-grid col-md-6">
                <div className="textbanner m-0">
                  <a
                    href="https://barnesindustries.com.ar/remeras-oversize/?sort_by=created-descending"
                    className="textbanner-link"
                    aria-label="Carrusel 1"
                  >
                    <div className="textbanner-image p-0 overlay overflow-none">
                      <img
                        width={1080}
                        height={1080}
                        src="./Barnes Industries_files/empty-placeholder.png"
                        data-sizes="auto"
                        data-expand={-10}
                        data-srcset="//acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718726169236-3796139484-0fc0bc77cb19fa9828816192eb8990f41718726174-480-0.webp?125514776 480w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718726169236-3796139484-0fc0bc77cb19fa9828816192eb8990f41718726174-640-0.webp?125514776 640w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718726169236-3796139484-0fc0bc77cb19fa9828816192eb8990f41718726174-1024-1024.webp?125514776 1024w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718726169236-3796139484-0fc0bc77cb19fa9828816192eb8990f41718726174-1920-1920.webp?125514776 1920w"
                        className="textbanner-image-effect img-fluid d-block w-100 lazyautosizes fade-in lazyloaded"
                        alt=""
                        sizes="676px"
                        srcSet="//acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718726169236-3796139484-0fc0bc77cb19fa9828816192eb8990f41718726174-480-0.webp?125514776 480w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718726169236-3796139484-0fc0bc77cb19fa9828816192eb8990f41718726174-640-0.webp?125514776 640w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718726169236-3796139484-0fc0bc77cb19fa9828816192eb8990f41718726174-1024-1024.webp?125514776 1024w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718726169236-3796139484-0fc0bc77cb19fa9828816192eb8990f41718726174-1920-1920.webp?125514776 1920w"
                      />
                      <div className="placeholder-fade placeholder-banner" />
                      <div className="textbanner-text text-left over-image over-image-invert">
                        <div className="mb-1 mb-md-2">1 / 2</div>
                        <h3 className="h2-huge h1-huge-md mb-2">Remeras</h3>
                        <div className="btn btn-link d-inline-block mt-1 mt-md-2 mb-2">
                          Ver remeras
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-grid col-md-6">
                <div className="textbanner m-0">
                  <a
                    href="https://barnesindustries.com.ar/abrigos/"
                    className="textbanner-link"
                    aria-label="Carrusel 2"
                  >
                    <div className="textbanner-image p-0 overlay overflow-none">
                      <img
                        width={1080}
                        height={1080}
                        src="./Barnes Industries_files/empty-placeholder.png"
                        data-sizes="auto"
                        data-expand={-10}
                        data-srcset="//acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718724523861-1303000546-78dfee91abce5ee6049bdec9c2ab90181718724527-480-0.webp?125514776 480w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718724523861-1303000546-78dfee91abce5ee6049bdec9c2ab90181718724527-640-0.webp?125514776 640w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718724523861-1303000546-78dfee91abce5ee6049bdec9c2ab90181718724527-1024-1024.webp?125514776 1024w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718724523861-1303000546-78dfee91abce5ee6049bdec9c2ab90181718724527-1920-1920.webp?125514776 1920w"
                        className="textbanner-image-effect img-fluid d-block w-100 lazyautosizes fade-in lazyloaded"
                        alt=""
                        sizes="676px"
                        srcSet="//acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718724523861-1303000546-78dfee91abce5ee6049bdec9c2ab90181718724527-480-0.webp?125514776 480w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718724523861-1303000546-78dfee91abce5ee6049bdec9c2ab90181718724527-640-0.webp?125514776 640w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718724523861-1303000546-78dfee91abce5ee6049bdec9c2ab90181718724527-1024-1024.webp?125514776 1024w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718724523861-1303000546-78dfee91abce5ee6049bdec9c2ab90181718724527-1920-1920.webp?125514776 1920w"
                      />
                      <div className="placeholder-fade placeholder-banner" />
                      <div className="textbanner-text text-left over-image over-image-invert">
                        <div className="mb-1 mb-md-2">2 / 2</div>
                        <h3 className="h2-huge h1-huge-md mb-2">Abrigos</h3>
                        <div className="btn btn-link d-inline-block mt-1 mt-md-2 mb-2">
                          Ver abrigos
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/* 3 */}
        <section
          className="section-home section-featured-home section-featured-products-home"
          data-store="home-products-featured"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div className="js-swiper-featured-pagination swiper-pagination-fraction d-block d-md-none" />
                <h2 className="section-title mb-0 h4-huge h3-huge-md">
                  NUEVOS INGRESOS
                </h2>
                <div className="swiper-buttons position-relative p-0 ml-neg-2 pl-1 d-block d-md-none">
                  <div className="js-swiper-featured-prev swiper-button-prev svg-icon-text">
                    <svg className="icon-inline icon-lg icon-flip-horizontal">
                      <use xlinkHref="#arrow-long" />
                    </svg>
                  </div>
                  <div className="js-swiper-featured-next swiper-button-next svg-icon-text">
                    <svg className="icon-inline icon-lg">
                      <use xlinkHref="#arrow-long" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="js-swiper-featured swiper-container">
                  <div className="swiper-wrapper swiper-mobile-only flex-nowrap flex-md-wrap row row-grid">
                    <div
                      className="js-item-product js-item-slide swiper-slide col-12 col-md-4 item-product col-grid"
                      data-product-type="list"
                      data-product-id={211050206}
                      data-store="product-item-211050206"
                      data-component="product-list-item"
                      data-component-value={211050206}
                    >
                      <div className="item">
                        <div
                          className="js-product-container js-quickshop-container js-quickshop-has-variants position-relative"
                          data-variants='[{"product_id":211050206,"price_short":"$74.200,00","price_long":"$74.200,00 ARS","price_number":74200,"price_number_raw":7420000,"price_with_payment_discount_short":"$55.650,00","compare_at_price_short":"$87.500,00","compare_at_price_long":"$87.500,00 ARS","compare_at_price_number":87500,"stock":4,"sku":null,"available":true,"contact":false,"option0":"talle 1","option1":null,"option2":null,"id":901412924,"image":644767812,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-068-39cb54e610e5f109ed17146624668919-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":24733.333333333,\"installment_value_cents\":2473333.3333333,\"interest\":0,\"total_value\":74200,\"without_interests\":true},\"6\":{\"installment_value\":12366.666666667,\"installment_value_cents\":1236666.6666667,\"interest\":0,\"total_value\":74200,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":74200,\"installment_value_cents\":7420000,\"interest\":0,\"total_value\":74200,\"without_interests\":true}}}"},{"product_id":211050206,"price_short":"$74.200,00","price_long":"$74.200,00 ARS","price_number":74200,"price_number_raw":7420000,"price_with_payment_discount_short":"$55.650,00","compare_at_price_short":"$87.500,00","compare_at_price_long":"$87.500,00 ARS","compare_at_price_number":87500,"stock":0,"sku":null,"available":false,"contact":false,"option0":"talle 2","option1":null,"option2":null,"id":901412925,"image":644767812,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-068-39cb54e610e5f109ed17146624668919-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":24733.333333333,\"installment_value_cents\":2473333.3333333,\"interest\":0,\"total_value\":74200,\"without_interests\":true},\"6\":{\"installment_value\":12366.666666667,\"installment_value_cents\":1236666.6666667,\"interest\":0,\"total_value\":74200,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":74200,\"installment_value_cents\":7420000,\"interest\":0,\"total_value\":74200,\"without_interests\":true}}}"},{"product_id":211050206,"price_short":"$74.200,00","price_long":"$74.200,00 ARS","price_number":74200,"price_number_raw":7420000,"price_with_payment_discount_short":"$55.650,00","compare_at_price_short":"$87.500,00","compare_at_price_long":"$87.500,00 ARS","compare_at_price_number":87500,"stock":2,"sku":null,"available":true,"contact":false,"option0":"talle 3","option1":null,"option2":null,"id":901412926,"image":644767812,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-068-39cb54e610e5f109ed17146624668919-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":24733.333333333,\"installment_value_cents\":2473333.3333333,\"interest\":0,\"total_value\":74200,\"without_interests\":true},\"6\":{\"installment_value\":12366.666666667,\"installment_value_cents\":1236666.6666667,\"interest\":0,\"total_value\":74200,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":74200,\"installment_value_cents\":7420000,\"interest\":0,\"total_value\":74200,\"without_interests\":true}}}"}]'
                          data-quickshop-id="quick211050206"
                        >
                          <div className="js-item-with-secondary-image item-image item-with-two-images">
                            <div
                              style={{ paddingBottom: "125.03052503053%" }}
                              className="js-item-image-padding position-relative"
                              data-store="product-item-image-211050206"
                            >
                              <a
                                href="https://barnesindustries.com.ar/productos/proximamente-08-05-new-collection13/"
                                title="DRILL CREWNECK"
                                aria-label="DRILL CREWNECK"
                              >
                                <img
                                  alt="DRILL CREWNECK"
                                  data-expand={-10}
                                  src="./Barnes Industries_files/empty-placeholder.png"
                                  data-srcset="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-068-39cb54e610e5f109ed17146624668919-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-068-39cb54e610e5f109ed17146624668919-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-068-39cb54e610e5f109ed17146624668919-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-068-39cb54e610e5f109ed17146624668919-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-068-39cb54e610e5f109ed17146624668919-1024-1024.webp 1024w"
                                  className="js-item-image lazyautosizes img-absolute img-absolute-centered fade-in item-image-primary lazyloaded"
                                  width={1638}
                                  height={2048}
                                  sizes="310px"
                                  srcSet="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-068-39cb54e610e5f109ed17146624668919-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-068-39cb54e610e5f109ed17146624668919-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-068-39cb54e610e5f109ed17146624668919-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-068-39cb54e610e5f109ed17146624668919-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-068-39cb54e610e5f109ed17146624668919-1024-1024.webp 1024w"
                                />
                                <div className="placeholder-fade"></div>
                                <img
                                  alt="DRILL CREWNECK"
                                  data-sizes="auto"
                                  src="./Barnes Industries_files/empty-placeholder.png"
                                  data-srcset="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-071-ff631b7f0a08a89d1617146624700152-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-071-ff631b7f0a08a89d1617146624700152-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-071-ff631b7f0a08a89d1617146624700152-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-071-ff631b7f0a08a89d1617146624700152-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-071-ff631b7f0a08a89d1617146624700152-1024-1024.webp 1024w"
                                  className="js-item-image js-item-image-secondary lazyautosizes img-absolute img-absolute-centered fade-in item-image-secondary lazyloaded"
                                  sizes="310px"
                                  style={{}}
                                  srcSet="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-071-ff631b7f0a08a89d1617146624700152-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-071-ff631b7f0a08a89d1617146624700152-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-071-ff631b7f0a08a89d1617146624700152-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-071-ff631b7f0a08a89d1617146624700152-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-071-ff631b7f0a08a89d1617146624700152-1024-1024.webp 1024w"
                                />
                              </a>
                            </div>
                            <div className=" labels " data-store="product-item-labels">
                              <div
                                className="js-stock-label label label-default mb-2"
                                style={{ display: "none" }}
                              >
                                Sin stock
                              </div>
                              <div
                                className="js-offer-label label label-accent mb-2"
                                data-store="product-item-offer-label"
                              >
                                -<span className="js-offer-percentage">15</span>% OFF
                              </div>
                            </div>
                            <span
                              className="hidden"
                              data-store="stock-product-211050206-6"
                            />
                          </div>
                          <div className="js-item-variants hidden">
                            <form
                              className="js-product-form"
                              method="post"
                              action="https://barnesindustries.com.ar/comprar/"
                            >
                              <input
                                type="hidden"
                                name="add_to_cart"
                                defaultValue={211050206}
                              />
                              <div className="js-product-variants js-product-quickshop-variants form-row mb-1">
                                <div
                                  className="js-product-variants-group  col-12 mb-2  "
                                  data-variation-id={0}
                                >
                                  <div className="form-group  d-none">
                                    <label
                                      className="form-label "
                                      htmlFor="variation_1"
                                    >
                                      Talle
                                    </label>
                                    <select
                                      id="variation_1"
                                      className="form-select js-variation-option js-refresh-installment-data "
                                      name="variation[0]"
                                    >
                                      <option value="talle 1" selected={true}>
                                        talle 1
                                      </option>
                                      <option value="talle 2">talle 2</option>
                                      <option value="talle 3">talle 3</option>
                                    </select>
                                    <div className="form-select-icon">
                                      <svg className="icon-inline icon-xs icon-w-14">
                                        <use xlinkHref="#chevron-down" />
                                      </svg>
                                    </div>
                                  </div>
                                  <label className="form-label">
                                    Talle:{" "}
                                    <strong className="js-insta-variation-label">
                                      talle 1
                                    </strong>
                                  </label>
                                  <a
                                    data-option="talle 1"
                                    className="js-insta-variant btn btn-variant selected"
                                    title="talle 1"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 1"
                                    >
                                      talle 1
                                    </span>
                                  </a>
                                  <a
                                    data-option="talle 2"
                                    className="js-insta-variant btn btn-variant"
                                    title="talle 2"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 2"
                                    >
                                      talle 2
                                    </span>
                                  </a>
                                  <a
                                    data-option="talle 3"
                                    className="js-insta-variant btn btn-variant"
                                    title="talle 3"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 3"
                                    >
                                      talle 3
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-4">
                                  <div className="form-group js-quantity form-quantity">
                                    <div
                                      className="form-row m-0 align-items-center"
                                      data-component="product.quantity"
                                    >
                                      <span
                                        className="js-quantity-down form-quantity-icon btn icon-30px ml-1"
                                        data-component="product.quantity.minus"
                                      >
                                        <svg className="icon-inline">
                                          <use xlinkHref="#minus" />
                                        </svg>
                                      </span>
                                      <div
                                        className="form-control-container col px-0"
                                        data-component="product.adding-amount"
                                      >
                                        <input
                                          type="number"
                                          className=" form-control js-quantity-input form-control-big form-control-inline"
                                          autoCorrect="off"
                                          autoCapitalize="off"
                                          pattern="\d*"
                                          name="quantity"
                                          defaultValue={1}
                                          min={1}
                                          aria-label="Cambiar cantidad"
                                          data-component="adding-amount.value"
                                        />
                                      </div>
                                      <span
                                        className="js-quantity-up form-quantity-icon btn icon-30px mr-1"
                                        data-component="product.quantity.plus"
                                      >
                                        <svg className="icon-inline">
                                          <use xlinkHref="#plus" />
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-8 pl-0">
                                  <input
                                    type="submit"
                                    className="js-addtocart js-prod-submit-form btn-add-to-cart btn btn-primary btn-big w-100 cart"
                                    defaultValue="Agregar al carrito"
                                  />
                                  <div
                                    className="js-addtocart js-addtocart-placeholder btn btn-primary btn-block btn-transition btn-big disabled"
                                    style={{ display: "none" }}
                                  >
                                    <div className="d-inline-block">
                                      <span className="js-addtocart-text">
                                        Agregar al carrito
                                      </span>
                                      <span className="js-addtocart-success transition-container">
                                        ¡Listo!
                                      </span>
                                      <div className="js-addtocart-adding transition-container">
                                        Agregando...
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div
                            className="item-description pt-3"
                            data-store="product-item-info-211050206"
                          >
                            <a
                              href="https://barnesindustries.com.ar/productos/proximamente-08-05-new-collection13/"
                              title="DRILL CREWNECK"
                              aria-label="DRILL CREWNECK"
                              className="item-link"
                            >
                              <div
                                className="js-item-name item-name mb-2 font-weight-bold"
                                data-store="product-item-name-211050206"
                              >
                                DRILL CREWNECK
                              </div>
                              <div
                                className="item-price-container mb-3"
                                data-store="product-item-price-211050206"
                              >
                                <span className="js-price-display item-price">
                                  $74.200,00
                                </span>
                                <span
                                  className="js-compare-price-display price-compare"
                                  style={{ display: "inline-block" }}
                                >
                                  $87.500,00
                                </span>
                                <div className="js-max-installments-container js-max-installments item-installments mt-2">
                                  <div className="js-max-installments product-installments installment-no-interest">
                                    <span className="js-installment-amount product-installment-amount">
                                      6
                                    </span>
                                    <span>
                                      <span className="installment-short-separator">
                                        x
                                      </span>
                                    </span>
                                    <span className="js-installment-price product-installment-value">
                                      $12.366,67
                                    </span>
                                    <span>sin interés</span>
                                  </div>
                                </div>
                              </div>
                              <div className="item-actions d-block">
                                <span
                                  data-toggle="#quickshop-modal"
                                  className="js-quickshop-modal-open js-quickshop-slide js-modal-open btn btn-link"
                                  title="Compra rápida de DRILL CREWNECK"
                                  aria-label="Compra rápida de DRILL CREWNECK"
                                  data-component="product-list-item.add-to-cart"
                                  data-component-value={211050206}
                                >
                                  <span className="js-open-quickshop-wording">
                                    Comprar
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="js-item-product js-item-slide swiper-slide col-12 col-md-4 item-product col-grid"
                      data-product-type="list"
                      data-product-id={211048292}
                      data-store="product-item-211048292"
                      data-component="product-list-item"
                      data-component-value={211048292}
                    >
                      <div className="item">
                        <div
                          className="js-product-container js-quickshop-container js-quickshop-has-variants position-relative"
                          data-variants='[{"product_id":211048292,"price_short":"$104.500,00","price_long":"$104.500,00 ARS","price_number":104500,"price_number_raw":10450000,"price_with_payment_discount_short":"$78.375,00","compare_at_price_short":"$130.000,00","compare_at_price_long":"$130.000,00 ARS","compare_at_price_number":130000,"stock":4,"sku":null,"available":true,"contact":false,"option0":"talle 1","option1":null,"option2":null,"id":901413842,"image":644761940,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-025-d5331cc73d0ac5215317146618628454-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":34833.333333333,\"installment_value_cents\":3483333.3333333,\"interest\":0,\"total_value\":104500,\"without_interests\":true},\"6\":{\"installment_value\":17416.666666667,\"installment_value_cents\":1741666.6666667,\"interest\":0,\"total_value\":104500,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":104500,\"installment_value_cents\":10450000,\"interest\":0,\"total_value\":104500,\"without_interests\":true}}}"},{"product_id":211048292,"price_short":"$104.500,00","price_long":"$104.500,00 ARS","price_number":104500,"price_number_raw":10450000,"price_with_payment_discount_short":"$78.375,00","compare_at_price_short":"$130.000,00","compare_at_price_long":"$130.000,00 ARS","compare_at_price_number":130000,"stock":2,"sku":null,"available":true,"contact":false,"option0":"talle 2","option1":null,"option2":null,"id":901413847,"image":644761940,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-025-d5331cc73d0ac5215317146618628454-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":34833.333333333,\"installment_value_cents\":3483333.3333333,\"interest\":0,\"total_value\":104500,\"without_interests\":true},\"6\":{\"installment_value\":17416.666666667,\"installment_value_cents\":1741666.6666667,\"interest\":0,\"total_value\":104500,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":104500,\"installment_value_cents\":10450000,\"interest\":0,\"total_value\":104500,\"without_interests\":true}}}"},{"product_id":211048292,"price_short":"$104.500,00","price_long":"$104.500,00 ARS","price_number":104500,"price_number_raw":10450000,"price_with_payment_discount_short":"$78.375,00","compare_at_price_short":"$130.000,00","compare_at_price_long":"$130.000,00 ARS","compare_at_price_number":130000,"stock":5,"sku":null,"available":true,"contact":false,"option0":"talle 3","option1":null,"option2":null,"id":901414184,"image":644761940,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-025-d5331cc73d0ac5215317146618628454-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":34833.333333333,\"installment_value_cents\":3483333.3333333,\"interest\":0,\"total_value\":104500,\"without_interests\":true},\"6\":{\"installment_value\":17416.666666667,\"installment_value_cents\":1741666.6666667,\"interest\":0,\"total_value\":104500,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":104500,\"installment_value_cents\":10450000,\"interest\":0,\"total_value\":104500,\"without_interests\":true}}}"}]'
                          data-quickshop-id="quick211048292"
                        >
                          <div className="js-item-with-secondary-image item-image">
                            <div
                              style={{ paddingBottom: "125.03052503053%" }}
                              className="js-item-image-padding position-relative"
                              data-store="product-item-image-211048292"
                            >
                              <a
                                href="https://barnesindustries.com.ar/productos/proximamente-08-05-new-collection8/"
                                title="WOOL JACKET GREY"
                                aria-label="WOOL JACKET GREY"
                              >
                                <img
                                  alt="WOOL JACKET GREY"
                                  data-expand={-10}
                                  src="./Barnes Industries_files/empty-placeholder.png"
                                  data-srcset="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-025-d5331cc73d0ac5215317146618628454-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-025-d5331cc73d0ac5215317146618628454-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-025-d5331cc73d0ac5215317146618628454-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-025-d5331cc73d0ac5215317146618628454-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-025-d5331cc73d0ac5215317146618628454-1024-1024.webp 1024w"
                                  className="js-item-image lazyautosizes img-absolute img-absolute-centered fade-in item-image-primary lazyloaded"
                                  width={1638}
                                  height={2048}
                                  sizes="310px"
                                  srcSet="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-025-d5331cc73d0ac5215317146618628454-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-025-d5331cc73d0ac5215317146618628454-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-025-d5331cc73d0ac5215317146618628454-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-025-d5331cc73d0ac5215317146618628454-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-025-d5331cc73d0ac5215317146618628454-1024-1024.webp 1024w"
                                />
                                <div className="placeholder-fade"></div>
                                <img
                                  alt="WOOL JACKET GREY"
                                  data-sizes="auto"
                                  src="./Barnes Industries_files/empty-placeholder.png"
                                  data-srcset="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-026-3ebb200cb552d3d7dc17146618660967-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-026-3ebb200cb552d3d7dc17146618660967-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-026-3ebb200cb552d3d7dc17146618660967-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-026-3ebb200cb552d3d7dc17146618660967-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-026-3ebb200cb552d3d7dc17146618660967-1024-1024.webp 1024w"
                                  className="js-item-image js-item-image-secondary lazyautosizes lazyload img-absolute img-absolute-centered fade-in item-image-secondary"
                                  sizes="310px"
                                  style={{ display: "none" }}
                                />
                              </a>
                            </div>
                            <div className=" labels " data-store="product-item-labels">
                              <div
                                className="js-stock-label label label-default mb-2"
                                style={{ display: "none" }}
                              >
                                Sin stock
                              </div>
                              <div
                                className="js-offer-label label label-accent mb-2"
                                data-store="product-item-offer-label"
                              >
                                -<span className="js-offer-percentage">20</span>% OFF
                              </div>
                            </div>
                            <span
                              className="hidden"
                              data-store="stock-product-211048292-11"
                            />
                          </div>
                          <div className="js-item-variants hidden">
                            <form
                              className="js-product-form"
                              method="post"
                              action="https://barnesindustries.com.ar/comprar/"
                            >
                              <input
                                type="hidden"
                                name="add_to_cart"
                                defaultValue={211048292}
                              />
                              <div className="js-product-variants js-product-quickshop-variants form-row mb-1">
                                <div
                                  className="js-product-variants-group  col-12 mb-2  "
                                  data-variation-id={0}
                                >
                                  <div className="form-group  d-none">
                                    <label
                                      className="form-label "
                                      htmlFor="variation_1"
                                    >
                                      Talle
                                    </label>
                                    <select
                                      id="variation_1"
                                      className="form-select js-variation-option js-refresh-installment-data "
                                      name="variation[0]"
                                    >
                                      <option value="talle 1" selected={true}>
                                        talle 1
                                      </option>
                                      <option value="talle 2">talle 2</option>
                                      <option value="talle 3">talle 3</option>
                                    </select>
                                    <div className="form-select-icon">
                                      <svg className="icon-inline icon-xs icon-w-14">
                                        <use xlinkHref="#chevron-down" />
                                      </svg>
                                    </div>
                                  </div>
                                  <label className="form-label">
                                    Talle:{" "}
                                    <strong className="js-insta-variation-label">
                                      talle 1
                                    </strong>
                                  </label>
                                  <a
                                    data-option="talle 1"
                                    className="js-insta-variant btn btn-variant selected"
                                    title="talle 1"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 1"
                                    >
                                      talle 1
                                    </span>
                                  </a>
                                  <a
                                    data-option="talle 2"
                                    className="js-insta-variant btn btn-variant"
                                    title="talle 2"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 2"
                                    >
                                      talle 2
                                    </span>
                                  </a>
                                  <a
                                    data-option="talle 3"
                                    className="js-insta-variant btn btn-variant"
                                    title="talle 3"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 3"
                                    >
                                      talle 3
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-4">
                                  <div className="form-group js-quantity form-quantity">
                                    <div
                                      className="form-row m-0 align-items-center"
                                      data-component="product.quantity"
                                    >
                                      <span
                                        className="js-quantity-down form-quantity-icon btn icon-30px ml-1"
                                        data-component="product.quantity.minus"
                                      >
                                        <svg className="icon-inline">
                                          <use xlinkHref="#minus" />
                                        </svg>
                                      </span>
                                      <div
                                        className="form-control-container col px-0"
                                        data-component="product.adding-amount"
                                      >
                                        <input
                                          type="number"
                                          className=" form-control js-quantity-input form-control-big form-control-inline"
                                          autoCorrect="off"
                                          autoCapitalize="off"
                                          pattern="\d*"
                                          name="quantity"
                                          defaultValue={1}
                                          min={1}
                                          aria-label="Cambiar cantidad"
                                          data-component="adding-amount.value"
                                        />
                                      </div>
                                      <span
                                        className="js-quantity-up form-quantity-icon btn icon-30px mr-1"
                                        data-component="product.quantity.plus"
                                      >
                                        <svg className="icon-inline">
                                          <use xlinkHref="#plus" />
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-8 pl-0">
                                  <input
                                    type="submit"
                                    className="js-addtocart js-prod-submit-form btn-add-to-cart btn btn-primary btn-big w-100 cart"
                                    defaultValue="Agregar al carrito"
                                  />
                                  <div
                                    className="js-addtocart js-addtocart-placeholder btn btn-primary btn-block btn-transition btn-big disabled"
                                    style={{ display: "none" }}
                                  >
                                    <div className="d-inline-block">
                                      <span className="js-addtocart-text">
                                        Agregar al carrito
                                      </span>
                                      <span className="js-addtocart-success transition-container">
                                        ¡Listo!
                                      </span>
                                      <div className="js-addtocart-adding transition-container">
                                        Agregando...
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div
                            className="item-description pt-3"
                            data-store="product-item-info-211048292"
                          >
                            <a
                              href="https://barnesindustries.com.ar/productos/proximamente-08-05-new-collection8/"
                              title="WOOL JACKET GREY"
                              aria-label="WOOL JACKET GREY"
                              className="item-link"
                            >
                              <div
                                className="js-item-name item-name mb-2 font-weight-bold"
                                data-store="product-item-name-211048292"
                              >
                                WOOL JACKET GREY
                              </div>
                              <div
                                className="item-price-container mb-3"
                                data-store="product-item-price-211048292"
                              >
                                <span className="js-price-display item-price">
                                  $104.500,00
                                </span>
                                <span
                                  className="js-compare-price-display price-compare"
                                  style={{ display: "inline-block" }}
                                >
                                  $130.000,00
                                </span>
                                <div className="js-max-installments-container js-max-installments item-installments mt-2">
                                  <div className="js-max-installments product-installments installment-no-interest">
                                    <span className="js-installment-amount product-installment-amount">
                                      6
                                    </span>
                                    <span>
                                      <span className="installment-short-separator">
                                        x
                                      </span>
                                    </span>
                                    <span className="js-installment-price product-installment-value">
                                      $17.416,67
                                    </span>
                                    <span>sin interés</span>
                                  </div>
                                </div>
                              </div>
                              <div className="item-actions d-block">
                                <span
                                  data-toggle="#quickshop-modal"
                                  className="js-quickshop-modal-open js-quickshop-slide js-modal-open btn btn-link"
                                  title="Compra rápida de WOOL JACKET GREY"
                                  aria-label="Compra rápida de WOOL JACKET GREY"
                                  data-component="product-list-item.add-to-cart"
                                  data-component-value={211048292}
                                >
                                  <span className="js-open-quickshop-wording">
                                    Comprar
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="js-item-product js-item-slide swiper-slide col-12 col-md-4 item-product col-grid"
                      data-product-type="list"
                      data-product-id={211045371}
                      data-store="product-item-211045371"
                      data-component="product-list-item"
                      data-component-value={211045371}
                    >
                      <div className="item">
                        <div
                          className="js-product-container js-quickshop-container js-quickshop-has-variants position-relative"
                          data-variants='[{"product_id":211045371,"price_short":"$65.900,00","price_long":"$65.900,00 ARS","price_number":65900,"price_number_raw":6590000,"price_with_payment_discount_short":"$49.425,00","compare_at_price_short":"$77.500,00","compare_at_price_long":"$77.500,00 ARS","compare_at_price_number":77500,"stock":5,"sku":null,"available":true,"contact":false,"option0":"talle 1","option1":null,"option2":null,"id":901414941,"image":644748202,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-056-a74d268b6ae51a491b17146609052732-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":21966.666666667,\"installment_value_cents\":2196666.6666667,\"interest\":0,\"total_value\":65900,\"without_interests\":true},\"6\":{\"installment_value\":10983.333333333,\"installment_value_cents\":1098333.3333333,\"interest\":0,\"total_value\":65900,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":65900,\"installment_value_cents\":6590000,\"interest\":0,\"total_value\":65900,\"without_interests\":true}}}"},{"product_id":211045371,"price_short":"$65.900,00","price_long":"$65.900,00 ARS","price_number":65900,"price_number_raw":6590000,"price_with_payment_discount_short":"$49.425,00","compare_at_price_short":"$77.500,00","compare_at_price_long":"$77.500,00 ARS","compare_at_price_number":77500,"stock":14,"sku":null,"available":true,"contact":false,"option0":"talle 2","option1":null,"option2":null,"id":901414942,"image":644748202,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-056-a74d268b6ae51a491b17146609052732-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":21966.666666667,\"installment_value_cents\":2196666.6666667,\"interest\":0,\"total_value\":65900,\"without_interests\":true},\"6\":{\"installment_value\":10983.333333333,\"installment_value_cents\":1098333.3333333,\"interest\":0,\"total_value\":65900,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":65900,\"installment_value_cents\":6590000,\"interest\":0,\"total_value\":65900,\"without_interests\":true}}}"},{"product_id":211045371,"price_short":"$65.900,00","price_long":"$65.900,00 ARS","price_number":65900,"price_number_raw":6590000,"price_with_payment_discount_short":"$49.425,00","compare_at_price_short":"$77.500,00","compare_at_price_long":"$77.500,00 ARS","compare_at_price_number":77500,"stock":14,"sku":null,"available":true,"contact":false,"option0":"talle 3","option1":null,"option2":null,"id":901414943,"image":644748202,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-056-a74d268b6ae51a491b17146609052732-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":21966.666666667,\"installment_value_cents\":2196666.6666667,\"interest\":0,\"total_value\":65900,\"without_interests\":true},\"6\":{\"installment_value\":10983.333333333,\"installment_value_cents\":1098333.3333333,\"interest\":0,\"total_value\":65900,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":65900,\"installment_value_cents\":6590000,\"interest\":0,\"total_value\":65900,\"without_interests\":true}}}"}]'
                          data-quickshop-id="quick211045371"
                        >
                          <div className="js-item-with-secondary-image item-image">
                            <div
                              style={{ paddingBottom: "125.03052503053%" }}
                              className="js-item-image-padding position-relative"
                              data-store="product-item-image-211045371"
                            >
                              <a
                                href="https://barnesindustries.com.ar/productos/proximamente-08-05-new-collection5/"
                                title="FURRY POLO SWEATER BLACK"
                                aria-label="FURRY POLO SWEATER BLACK"
                              >
                                <img
                                  alt="FURRY POLO SWEATER BLACK"
                                  data-expand={-10}
                                  src="./Barnes Industries_files/empty-placeholder.png"
                                  data-srcset="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-056-a74d268b6ae51a491b17146609052732-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-056-a74d268b6ae51a491b17146609052732-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-056-a74d268b6ae51a491b17146609052732-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-056-a74d268b6ae51a491b17146609052732-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-056-a74d268b6ae51a491b17146609052732-1024-1024.webp 1024w"
                                  className="js-item-image lazyautosizes img-absolute img-absolute-centered fade-in item-image-primary lazyloaded"
                                  width={1638}
                                  height={2048}
                                  sizes="310px"
                                  srcSet="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-056-a74d268b6ae51a491b17146609052732-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-056-a74d268b6ae51a491b17146609052732-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-056-a74d268b6ae51a491b17146609052732-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-056-a74d268b6ae51a491b17146609052732-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-056-a74d268b6ae51a491b17146609052732-1024-1024.webp 1024w"
                                />
                                <div className="placeholder-fade"></div>
                                <img
                                  alt="FURRY POLO SWEATER BLACK"
                                  data-sizes="auto"
                                  src="./Barnes Industries_files/empty-placeholder.png"
                                  data-srcset="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-060-1ac8529ed2d2dc1e3317146609092149-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-060-1ac8529ed2d2dc1e3317146609092149-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-060-1ac8529ed2d2dc1e3317146609092149-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-060-1ac8529ed2d2dc1e3317146609092149-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-060-1ac8529ed2d2dc1e3317146609092149-1024-1024.webp 1024w"
                                  className="js-item-image js-item-image-secondary lazyautosizes lazyload img-absolute img-absolute-centered fade-in item-image-secondary"
                                  sizes="310px"
                                  style={{ display: "none" }}
                                />
                              </a>
                            </div>
                            <div className=" labels " data-store="product-item-labels">
                              <div
                                className="js-stock-label label label-default mb-2"
                                style={{ display: "none" }}
                              >
                                Sin stock
                              </div>
                              <div
                                className="js-offer-label label label-accent mb-2"
                                data-store="product-item-offer-label"
                              >
                                -<span className="js-offer-percentage">15</span>% OFF
                              </div>
                            </div>
                            <span
                              className="hidden"
                              data-store="stock-product-211045371-33"
                            />
                          </div>
                          <div className="js-item-variants hidden">
                            <form
                              className="js-product-form"
                              method="post"
                              action="https://barnesindustries.com.ar/comprar/"
                            >
                              <input
                                type="hidden"
                                name="add_to_cart"
                                defaultValue={211045371}
                              />
                              <div className="js-product-variants js-product-quickshop-variants form-row mb-1">
                                <div
                                  className="js-product-variants-group  col-12 mb-2  "
                                  data-variation-id={0}
                                >
                                  <div className="form-group  d-none">
                                    <label
                                      className="form-label "
                                      htmlFor="variation_1"
                                    >
                                      Talle
                                    </label>
                                    <select
                                      id="variation_1"
                                      className="form-select js-variation-option js-refresh-installment-data "
                                      name="variation[0]"
                                    >
                                      <option value="talle 1" selected={true}>
                                        talle 1
                                      </option>
                                      <option value="talle 2">talle 2</option>
                                      <option value="talle 3">talle 3</option>
                                    </select>
                                    <div className="form-select-icon">
                                      <svg className="icon-inline icon-xs icon-w-14">
                                        <use xlinkHref="#chevron-down" />
                                      </svg>
                                    </div>
                                  </div>
                                  <label className="form-label">
                                    Talle:{" "}
                                    <strong className="js-insta-variation-label">
                                      talle 1
                                    </strong>
                                  </label>
                                  <a
                                    data-option="talle 1"
                                    className="js-insta-variant btn btn-variant selected"
                                    title="talle 1"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 1"
                                    >
                                      talle 1
                                    </span>
                                  </a>
                                  <a
                                    data-option="talle 2"
                                    className="js-insta-variant btn btn-variant"
                                    title="talle 2"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 2"
                                    >
                                      talle 2
                                    </span>
                                  </a>
                                  <a
                                    data-option="talle 3"
                                    className="js-insta-variant btn btn-variant"
                                    title="talle 3"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 3"
                                    >
                                      talle 3
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-4">
                                  <div className="form-group js-quantity form-quantity">
                                    <div
                                      className="form-row m-0 align-items-center"
                                      data-component="product.quantity"
                                    >
                                      <span
                                        className="js-quantity-down form-quantity-icon btn icon-30px ml-1"
                                        data-component="product.quantity.minus"
                                      >
                                        <svg className="icon-inline">
                                          <use xlinkHref="#minus" />
                                        </svg>
                                      </span>
                                      <div
                                        className="form-control-container col px-0"
                                        data-component="product.adding-amount"
                                      >
                                        <input
                                          type="number"
                                          className=" form-control js-quantity-input form-control-big form-control-inline"
                                          autoCorrect="off"
                                          autoCapitalize="off"
                                          pattern="\d*"
                                          name="quantity"
                                          defaultValue={1}
                                          min={1}
                                          aria-label="Cambiar cantidad"
                                          data-component="adding-amount.value"
                                        />
                                      </div>
                                      <span
                                        className="js-quantity-up form-quantity-icon btn icon-30px mr-1"
                                        data-component="product.quantity.plus"
                                      >
                                        <svg className="icon-inline">
                                          <use xlinkHref="#plus" />
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-8 pl-0">
                                  <input
                                    type="submit"
                                    className="js-addtocart js-prod-submit-form btn-add-to-cart btn btn-primary btn-big w-100 cart"
                                    defaultValue="Agregar al carrito"
                                  />
                                  <div
                                    className="js-addtocart js-addtocart-placeholder btn btn-primary btn-block btn-transition btn-big disabled"
                                    style={{ display: "none" }}
                                  >
                                    <div className="d-inline-block">
                                      <span className="js-addtocart-text">
                                        Agregar al carrito
                                      </span>
                                      <span className="js-addtocart-success transition-container">
                                        ¡Listo!
                                      </span>
                                      <div className="js-addtocart-adding transition-container">
                                        Agregando...
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div
                            className="item-description pt-3"
                            data-store="product-item-info-211045371"
                          >
                            <a
                              href="https://barnesindustries.com.ar/productos/proximamente-08-05-new-collection5/"
                              title="FURRY POLO SWEATER BLACK"
                              aria-label="FURRY POLO SWEATER BLACK"
                              className="item-link"
                            >
                              <div
                                className="js-item-name item-name mb-2 font-weight-bold"
                                data-store="product-item-name-211045371"
                              >
                                FURRY POLO SWEATER BLACK
                              </div>
                              <div
                                className="item-price-container mb-3"
                                data-store="product-item-price-211045371"
                              >
                                <span className="js-price-display item-price">
                                  $65.900,00
                                </span>
                                <span
                                  className="js-compare-price-display price-compare"
                                  style={{ display: "inline-block" }}
                                >
                                  $77.500,00
                                </span>
                                <div className="js-max-installments-container js-max-installments item-installments mt-2">
                                  <div className="js-max-installments product-installments installment-no-interest">
                                    <span className="js-installment-amount product-installment-amount">
                                      6
                                    </span>
                                    <span>
                                      <span className="installment-short-separator">
                                        x
                                      </span>
                                    </span>
                                    <span className="js-installment-price product-installment-value">
                                      $10.983,33
                                    </span>
                                    <span>sin interés</span>
                                  </div>
                                </div>
                              </div>
                              <div className="item-actions d-block">
                                <span
                                  data-toggle="#quickshop-modal"
                                  className="js-quickshop-modal-open js-quickshop-slide js-modal-open btn btn-link"
                                  title="Compra rápida de FURRY POLO SWEATER BLACK"
                                  aria-label="Compra rápida de FURRY POLO SWEATER BLACK"
                                  data-component="product-list-item.add-to-cart"
                                  data-component-value={211045371}
                                >
                                  <span className="js-open-quickshop-wording">
                                    Comprar
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="js-item-product js-item-slide swiper-slide col-12 col-md-4 item-product col-grid"
                      data-product-type="list"
                      data-product-id={210678011}
                      data-store="product-item-210678011"
                      data-component="product-list-item"
                      data-component-value={210678011}
                    >
                      <div className="item">
                        <div
                          className="js-product-container js-quickshop-container js-quickshop-has-variants position-relative"
                          data-variants='[{"product_id":210678011,"price_short":"$39.200,00","price_long":"$39.200,00 ARS","price_number":39200,"price_number_raw":3920000,"price_with_payment_discount_short":"$29.400,00","compare_at_price_short":"$43.500,00","compare_at_price_long":"$43.500,00 ARS","compare_at_price_number":43500,"stock":5,"sku":null,"available":true,"contact":false,"option0":"talle 1","option1":null,"option2":null,"id":901420883,"image":642867610,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-035-afa55a371913defc6517143920716383-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":13066.666666667,\"installment_value_cents\":1306666.6666667,\"interest\":0,\"total_value\":39200,\"without_interests\":true},\"6\":{\"installment_value\":6533.3333333333,\"installment_value_cents\":653333.33333333,\"interest\":0,\"total_value\":39200,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":39200,\"installment_value_cents\":3920000,\"interest\":0,\"total_value\":39200,\"without_interests\":true}}}"},{"product_id":210678011,"price_short":"$39.200,00","price_long":"$39.200,00 ARS","price_number":39200,"price_number_raw":3920000,"price_with_payment_discount_short":"$29.400,00","compare_at_price_short":"$43.500,00","compare_at_price_long":"$43.500,00 ARS","compare_at_price_number":43500,"stock":10,"sku":null,"available":true,"contact":false,"option0":"talle 2","option1":null,"option2":null,"id":901420887,"image":642867610,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-035-afa55a371913defc6517143920716383-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":13066.666666667,\"installment_value_cents\":1306666.6666667,\"interest\":0,\"total_value\":39200,\"without_interests\":true},\"6\":{\"installment_value\":6533.3333333333,\"installment_value_cents\":653333.33333333,\"interest\":0,\"total_value\":39200,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":39200,\"installment_value_cents\":3920000,\"interest\":0,\"total_value\":39200,\"without_interests\":true}}}"},{"product_id":210678011,"price_short":"$39.200,00","price_long":"$39.200,00 ARS","price_number":39200,"price_number_raw":3920000,"price_with_payment_discount_short":"$29.400,00","compare_at_price_short":"$43.500,00","compare_at_price_long":"$43.500,00 ARS","compare_at_price_number":43500,"stock":16,"sku":null,"available":true,"contact":false,"option0":"talle 3","option1":null,"option2":null,"id":901420891,"image":642867610,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-035-afa55a371913defc6517143920716383-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":13066.666666667,\"installment_value_cents\":1306666.6666667,\"interest\":0,\"total_value\":39200,\"without_interests\":true},\"6\":{\"installment_value\":6533.3333333333,\"installment_value_cents\":653333.33333333,\"interest\":0,\"total_value\":39200,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":39200,\"installment_value_cents\":3920000,\"interest\":0,\"total_value\":39200,\"without_interests\":true}}}"},{"product_id":210678011,"price_short":"$39.200,00","price_long":"$39.200,00 ARS","price_number":39200,"price_number_raw":3920000,"price_with_payment_discount_short":"$29.400,00","compare_at_price_short":"$43.500,00","compare_at_price_long":"$43.500,00 ARS","compare_at_price_number":43500,"stock":5,"sku":null,"available":true,"contact":false,"option0":"Talle 4","option1":null,"option2":null,"id":901420895,"image":642867610,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-035-afa55a371913defc6517143920716383-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":13066.666666667,\"installment_value_cents\":1306666.6666667,\"interest\":0,\"total_value\":39200,\"without_interests\":true},\"6\":{\"installment_value\":6533.3333333333,\"installment_value_cents\":653333.33333333,\"interest\":0,\"total_value\":39200,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":39200,\"installment_value_cents\":3920000,\"interest\":0,\"total_value\":39200,\"without_interests\":true}}}"}]'
                          data-quickshop-id="quick210678011"
                        >
                          <div className="js-item-with-secondary-image item-image item-with-two-images">
                            <div
                              style={{ paddingBottom: "125.03052503053%" }}
                              className="js-item-image-padding position-relative"
                              data-store="product-item-image-210678011"
                            >
                              <a
                                href="https://barnesindustries.com.ar/productos/remera-oversize-heavy-weight-tennis-club-green/"
                                title='REMERA HEAVYWEIGHT "TENNIS CLUB" GREEN'
                                aria-label='REMERA HEAVYWEIGHT "TENNIS CLUB" GREEN'
                              >
                                <img
                                  alt='REMERA HEAVYWEIGHT "TENNIS CLUB" GREEN'
                                  data-expand={-10}
                                  src="./Barnes Industries_files/empty-placeholder.png"
                                  data-srcset="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-035-afa55a371913defc6517143920716383-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-035-afa55a371913defc6517143920716383-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-035-afa55a371913defc6517143920716383-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-035-afa55a371913defc6517143920716383-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-035-afa55a371913defc6517143920716383-1024-1024.webp 1024w"
                                  className="js-item-image lazyautosizes img-absolute img-absolute-centered fade-in item-image-primary lazyloaded"
                                  width={1638}
                                  height={2048}
                                  sizes="310px"
                                  srcSet="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-035-afa55a371913defc6517143920716383-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-035-afa55a371913defc6517143920716383-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-035-afa55a371913defc6517143920716383-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-035-afa55a371913defc6517143920716383-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-035-afa55a371913defc6517143920716383-1024-1024.webp 1024w"
                                />
                                <div className="placeholder-fade"></div>
                                <img
                                  alt='REMERA HEAVYWEIGHT "TENNIS CLUB" GREEN'
                                  data-sizes="auto"
                                  src="./Barnes Industries_files/empty-placeholder.png"
                                  data-srcset="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-037-f64044ceae5de988ed17143920791716-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-037-f64044ceae5de988ed17143920791716-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-037-f64044ceae5de988ed17143920791716-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-037-f64044ceae5de988ed17143920791716-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-037-f64044ceae5de988ed17143920791716-1024-1024.webp 1024w"
                                  className="js-item-image js-item-image-secondary lazyautosizes img-absolute img-absolute-centered fade-in item-image-secondary lazyloaded"
                                  sizes="310px"
                                  style={{}}
                                  srcSet="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-037-f64044ceae5de988ed17143920791716-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-037-f64044ceae5de988ed17143920791716-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-037-f64044ceae5de988ed17143920791716-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-037-f64044ceae5de988ed17143920791716-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-037-f64044ceae5de988ed17143920791716-1024-1024.webp 1024w"
                                />
                              </a>
                            </div>
                            <div className=" labels " data-store="product-item-labels">
                              <div
                                className="js-stock-label label label-default mb-2"
                                style={{ display: "none" }}
                              >
                                Sin stock
                              </div>
                              <div
                                className="js-offer-label label label-accent mb-2"
                                data-store="product-item-offer-label"
                              >
                                -<span className="js-offer-percentage">10</span>% OFF
                              </div>
                            </div>
                            <span
                              className="hidden"
                              data-store="stock-product-210678011-36"
                            />
                          </div>
                          <div className="js-item-variants hidden">
                            <form
                              className="js-product-form"
                              method="post"
                              action="https://barnesindustries.com.ar/comprar/"
                            >
                              <input
                                type="hidden"
                                name="add_to_cart"
                                defaultValue={210678011}
                              />
                              <div className="js-product-variants js-product-quickshop-variants form-row mb-1">
                                <div
                                  className="js-product-variants-group  col-12 mb-2  "
                                  data-variation-id={0}
                                >
                                  <div className="form-group  d-none">
                                    <label
                                      className="form-label "
                                      htmlFor="variation_1"
                                    >
                                      Talle
                                    </label>
                                    <select
                                      id="variation_1"
                                      className="form-select js-variation-option js-refresh-installment-data "
                                      name="variation[0]"
                                    >
                                      <option value="talle 1" selected={true}>
                                        talle 1
                                      </option>
                                      <option value="talle 2">talle 2</option>
                                      <option value="talle 3">talle 3</option>
                                      <option value="Talle 4">Talle 4</option>
                                    </select>
                                    <div className="form-select-icon">
                                      <svg className="icon-inline icon-xs icon-w-14">
                                        <use xlinkHref="#chevron-down" />
                                      </svg>
                                    </div>
                                  </div>
                                  <label className="form-label">
                                    Talle:{" "}
                                    <strong className="js-insta-variation-label">
                                      talle 1
                                    </strong>
                                  </label>
                                  <a
                                    data-option="talle 1"
                                    className="js-insta-variant btn btn-variant selected"
                                    title="talle 1"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 1"
                                    >
                                      talle 1
                                    </span>
                                  </a>
                                  <a
                                    data-option="talle 2"
                                    className="js-insta-variant btn btn-variant"
                                    title="talle 2"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 2"
                                    >
                                      talle 2
                                    </span>
                                  </a>
                                  <a
                                    data-option="talle 3"
                                    className="js-insta-variant btn btn-variant"
                                    title="talle 3"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 3"
                                    >
                                      talle 3
                                    </span>
                                  </a>
                                  <a
                                    data-option="Talle 4"
                                    className="js-insta-variant btn btn-variant"
                                    title="Talle 4"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="Talle 4"
                                    >
                                      Talle 4
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-4">
                                  <div className="form-group js-quantity form-quantity">
                                    <div
                                      className="form-row m-0 align-items-center"
                                      data-component="product.quantity"
                                    >
                                      <span
                                        className="js-quantity-down form-quantity-icon btn icon-30px ml-1"
                                        data-component="product.quantity.minus"
                                      >
                                        <svg className="icon-inline">
                                          <use xlinkHref="#minus" />
                                        </svg>
                                      </span>
                                      <div
                                        className="form-control-container col px-0"
                                        data-component="product.adding-amount"
                                      >
                                        <input
                                          type="number"
                                          className=" form-control js-quantity-input form-control-big form-control-inline"
                                          autoCorrect="off"
                                          autoCapitalize="off"
                                          pattern="\d*"
                                          name="quantity"
                                          defaultValue={1}
                                          min={1}
                                          aria-label="Cambiar cantidad"
                                          data-component="adding-amount.value"
                                        />
                                      </div>
                                      <span
                                        className="js-quantity-up form-quantity-icon btn icon-30px mr-1"
                                        data-component="product.quantity.plus"
                                      >
                                        <svg className="icon-inline">
                                          <use xlinkHref="#plus" />
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-8 pl-0">
                                  <input
                                    type="submit"
                                    className="js-addtocart js-prod-submit-form btn-add-to-cart btn btn-primary btn-big w-100 cart"
                                    defaultValue="Agregar al carrito"
                                  />
                                  <div
                                    className="js-addtocart js-addtocart-placeholder btn btn-primary btn-block btn-transition btn-big disabled"
                                    style={{ display: "none" }}
                                  >
                                    <div className="d-inline-block">
                                      <span className="js-addtocart-text">
                                        Agregar al carrito
                                      </span>
                                      <span className="js-addtocart-success transition-container">
                                        ¡Listo!
                                      </span>
                                      <div className="js-addtocart-adding transition-container">
                                        Agregando...
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div
                            className="item-description pt-3"
                            data-store="product-item-info-210678011"
                          >
                            <a
                              href="https://barnesindustries.com.ar/productos/remera-oversize-heavy-weight-tennis-club-green/"
                              title='REMERA HEAVYWEIGHT "TENNIS CLUB" GREEN'
                              aria-label='REMERA HEAVYWEIGHT "TENNIS CLUB" GREEN'
                              className="item-link"
                            >
                              <div
                                className="js-item-name item-name mb-2 font-weight-bold"
                                data-store="product-item-name-210678011"
                              >
                                REMERA HEAVYWEIGHT "TENNIS CLUB" GREEN
                              </div>
                              <div
                                className="item-price-container mb-3"
                                data-store="product-item-price-210678011"
                              >
                                <span className="js-price-display item-price">
                                  $39.200,00
                                </span>
                                <span
                                  className="js-compare-price-display price-compare"
                                  style={{ display: "inline-block" }}
                                >
                                  $43.500,00
                                </span>
                                <div className="js-max-installments-container js-max-installments item-installments mt-2">
                                  <div className="js-max-installments product-installments installment-no-interest">
                                    <span className="js-installment-amount product-installment-amount">
                                      6
                                    </span>
                                    <span>
                                      <span className="installment-short-separator">
                                        x
                                      </span>
                                    </span>
                                    <span className="js-installment-price product-installment-value">
                                      $6.533,33
                                    </span>
                                    <span>sin interés</span>
                                  </div>
                                </div>
                              </div>
                              <div className="item-actions d-block">
                                <span
                                  data-toggle="#quickshop-modal"
                                  className="js-quickshop-modal-open js-quickshop-slide js-modal-open btn btn-link"
                                  title='Compra rápida de REMERA HEAVYWEIGHT "TENNIS CLUB" GREEN'
                                  aria-label='Compra rápida de REMERA HEAVYWEIGHT "TENNIS CLUB" GREEN'
                                  data-component="product-list-item.add-to-cart"
                                  data-component-value={210678011}
                                >
                                  <span className="js-open-quickshop-wording">
                                    Comprar
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="js-item-product js-item-slide swiper-slide col-12 col-md-4 item-product col-grid"
                      data-product-type="list"
                      data-product-id={211048750}
                      data-store="product-item-211048750"
                      data-component="product-list-item"
                      data-component-value={211048750}
                    >
                      <div className="item">
                        <div
                          className="js-product-container js-quickshop-container js-quickshop-has-variants position-relative"
                          data-variants='[{"product_id":211048750,"price_short":"$61.500,00","price_long":"$61.500,00 ARS","price_number":61500,"price_number_raw":6150000,"price_with_payment_discount_short":"$46.125,00","compare_at_price_short":"$72.500,00","compare_at_price_long":"$72.500,00 ARS","compare_at_price_number":72500,"stock":7,"sku":null,"available":true,"contact":false,"option0":"talle 1","option1":null,"option2":null,"id":901413634,"image":644763874,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-045-df47a576d9086cca9517146620557320-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":20500,\"installment_value_cents\":2050000,\"interest\":0,\"total_value\":61500,\"without_interests\":true},\"6\":{\"installment_value\":10250,\"installment_value_cents\":1025000,\"interest\":0,\"total_value\":61500,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":61500,\"installment_value_cents\":6150000,\"interest\":0,\"total_value\":61500,\"without_interests\":true}}}"},{"product_id":211048750,"price_short":"$61.500,00","price_long":"$61.500,00 ARS","price_number":61500,"price_number_raw":6150000,"price_with_payment_discount_short":"$46.125,00","compare_at_price_short":"$72.500,00","compare_at_price_long":"$72.500,00 ARS","compare_at_price_number":72500,"stock":0,"sku":null,"available":false,"contact":false,"option0":"talle 2","option1":null,"option2":null,"id":901413637,"image":644763874,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-045-df47a576d9086cca9517146620557320-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":20500,\"installment_value_cents\":2050000,\"interest\":0,\"total_value\":61500,\"without_interests\":true},\"6\":{\"installment_value\":10250,\"installment_value_cents\":1025000,\"interest\":0,\"total_value\":61500,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":61500,\"installment_value_cents\":6150000,\"interest\":0,\"total_value\":61500,\"without_interests\":true}}}"},{"product_id":211048750,"price_short":"$61.500,00","price_long":"$61.500,00 ARS","price_number":61500,"price_number_raw":6150000,"price_with_payment_discount_short":"$46.125,00","compare_at_price_short":"$72.500,00","compare_at_price_long":"$72.500,00 ARS","compare_at_price_number":72500,"stock":0,"sku":null,"available":false,"contact":false,"option0":"talle 3","option1":null,"option2":null,"id":901413638,"image":644763874,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-045-df47a576d9086cca9517146620557320-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":20500,\"installment_value_cents\":2050000,\"interest\":0,\"total_value\":61500,\"without_interests\":true},\"6\":{\"installment_value\":10250,\"installment_value_cents\":1025000,\"interest\":0,\"total_value\":61500,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":61500,\"installment_value_cents\":6150000,\"interest\":0,\"total_value\":61500,\"without_interests\":true}}}"}]'
                          data-quickshop-id="quick211048750"
                        >
                          <div className="js-item-with-secondary-image item-image item-with-two-images">
                            <div
                              style={{ paddingBottom: "125.03052503053%" }}
                              className="js-item-image-padding position-relative"
                              data-store="product-item-image-211048750"
                            >
                              <a
                                href="https://barnesindustries.com.ar/productos/proximamente-08-05-new-collection9/"
                                title="CORDEROY PANT BLUE"
                                aria-label="CORDEROY PANT BLUE"
                              >
                                <img
                                  alt="CORDEROY PANT BLUE"
                                  data-expand={-10}
                                  src="./Barnes Industries_files/empty-placeholder.png"
                                  data-srcset="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-045-df47a576d9086cca9517146620557320-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-045-df47a576d9086cca9517146620557320-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-045-df47a576d9086cca9517146620557320-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-045-df47a576d9086cca9517146620557320-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-045-df47a576d9086cca9517146620557320-1024-1024.webp 1024w"
                                  className="js-item-image lazyautosizes img-absolute img-absolute-centered fade-in item-image-primary lazyloaded"
                                  width={1638}
                                  height={2048}
                                  sizes="310px"
                                  srcSet="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-045-df47a576d9086cca9517146620557320-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-045-df47a576d9086cca9517146620557320-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-045-df47a576d9086cca9517146620557320-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-045-df47a576d9086cca9517146620557320-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-045-df47a576d9086cca9517146620557320-1024-1024.webp 1024w"
                                />
                                <div className="placeholder-fade"></div>
                                <img
                                  alt="CORDEROY PANT BLUE"
                                  data-sizes="auto"
                                  src="./Barnes Industries_files/empty-placeholder.png"
                                  data-srcset="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-046-eed0a4cf06de2f004017146620588326-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-046-eed0a4cf06de2f004017146620588326-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-046-eed0a4cf06de2f004017146620588326-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-046-eed0a4cf06de2f004017146620588326-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-046-eed0a4cf06de2f004017146620588326-1024-1024.webp 1024w"
                                  className="js-item-image js-item-image-secondary lazyautosizes img-absolute img-absolute-centered fade-in item-image-secondary lazyloaded"
                                  sizes="310px"
                                  style={{}}
                                  srcSet="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-046-eed0a4cf06de2f004017146620588326-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-046-eed0a4cf06de2f004017146620588326-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-046-eed0a4cf06de2f004017146620588326-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-046-eed0a4cf06de2f004017146620588326-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-046-eed0a4cf06de2f004017146620588326-1024-1024.webp 1024w"
                                />
                              </a>
                            </div>
                            <div className=" labels " data-store="product-item-labels">
                              <div
                                className="js-stock-label label label-default mb-2"
                                style={{ display: "none" }}
                              >
                                Sin stock
                              </div>
                              <div
                                className="js-offer-label label label-accent mb-2"
                                data-store="product-item-offer-label"
                              >
                                -<span className="js-offer-percentage">15</span>% OFF
                              </div>
                            </div>
                            <span
                              className="hidden"
                              data-store="stock-product-211048750-7"
                            />
                          </div>
                          <div className="js-item-variants hidden">
                            <form
                              className="js-product-form"
                              method="post"
                              action="https://barnesindustries.com.ar/comprar/"
                            >
                              <input
                                type="hidden"
                                name="add_to_cart"
                                defaultValue={211048750}
                              />
                              <div className="js-product-variants js-product-quickshop-variants form-row mb-1">
                                <div
                                  className="js-product-variants-group  col-12 mb-2  "
                                  data-variation-id={0}
                                >
                                  <div className="form-group  d-none">
                                    <label
                                      className="form-label "
                                      htmlFor="variation_1"
                                    >
                                      Talle
                                    </label>
                                    <select
                                      id="variation_1"
                                      className="form-select js-variation-option js-refresh-installment-data "
                                      name="variation[0]"
                                    >
                                      <option value="talle 1" selected={true}>
                                        talle 1
                                      </option>
                                      <option value="talle 2">talle 2</option>
                                      <option value="talle 3">talle 3</option>
                                    </select>
                                    <div className="form-select-icon">
                                      <svg className="icon-inline icon-xs icon-w-14">
                                        <use xlinkHref="#chevron-down" />
                                      </svg>
                                    </div>
                                  </div>
                                  <label className="form-label">
                                    Talle:{" "}
                                    <strong className="js-insta-variation-label">
                                      talle 1
                                    </strong>
                                  </label>
                                  <a
                                    data-option="talle 1"
                                    className="js-insta-variant btn btn-variant selected"
                                    title="talle 1"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 1"
                                    >
                                      talle 1
                                    </span>
                                  </a>
                                  <a
                                    data-option="talle 2"
                                    className="js-insta-variant btn btn-variant"
                                    title="talle 2"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 2"
                                    >
                                      talle 2
                                    </span>
                                  </a>
                                  <a
                                    data-option="talle 3"
                                    className="js-insta-variant btn btn-variant"
                                    title="talle 3"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 3"
                                    >
                                      talle 3
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-4">
                                  <div className="form-group js-quantity form-quantity">
                                    <div
                                      className="form-row m-0 align-items-center"
                                      data-component="product.quantity"
                                    >
                                      <span
                                        className="js-quantity-down form-quantity-icon btn icon-30px ml-1"
                                        data-component="product.quantity.minus"
                                      >
                                        <svg className="icon-inline">
                                          <use xlinkHref="#minus" />
                                        </svg>
                                      </span>
                                      <div
                                        className="form-control-container col px-0"
                                        data-component="product.adding-amount"
                                      >
                                        <input
                                          type="number"
                                          className=" form-control js-quantity-input form-control-big form-control-inline"
                                          autoCorrect="off"
                                          autoCapitalize="off"
                                          pattern="\d*"
                                          name="quantity"
                                          defaultValue={1}
                                          min={1}
                                          aria-label="Cambiar cantidad"
                                          data-component="adding-amount.value"
                                        />
                                      </div>
                                      <span
                                        className="js-quantity-up form-quantity-icon btn icon-30px mr-1"
                                        data-component="product.quantity.plus"
                                      >
                                        <svg className="icon-inline">
                                          <use xlinkHref="#plus" />
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-8 pl-0">
                                  <input
                                    type="submit"
                                    className="js-addtocart js-prod-submit-form btn-add-to-cart btn btn-primary btn-big w-100 cart"
                                    defaultValue="Agregar al carrito"
                                  />
                                  <div
                                    className="js-addtocart js-addtocart-placeholder btn btn-primary btn-block btn-transition btn-big disabled"
                                    style={{ display: "none" }}
                                  >
                                    <div className="d-inline-block">
                                      <span className="js-addtocart-text">
                                        Agregar al carrito
                                      </span>
                                      <span className="js-addtocart-success transition-container">
                                        ¡Listo!
                                      </span>
                                      <div className="js-addtocart-adding transition-container">
                                        Agregando...
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div
                            className="item-description pt-3"
                            data-store="product-item-info-211048750"
                          >
                            <a
                              href="https://barnesindustries.com.ar/productos/proximamente-08-05-new-collection9/"
                              title="CORDEROY PANT BLUE"
                              aria-label="CORDEROY PANT BLUE"
                              className="item-link"
                            >
                              <div
                                className="js-item-name item-name mb-2 font-weight-bold"
                                data-store="product-item-name-211048750"
                              >
                                CORDEROY PANT BLUE
                              </div>
                              <div
                                className="item-price-container mb-3"
                                data-store="product-item-price-211048750"
                              >
                                <span className="js-price-display item-price">
                                  $61.500,00
                                </span>
                                <span
                                  className="js-compare-price-display price-compare"
                                  style={{ display: "inline-block" }}
                                >
                                  $72.500,00
                                </span>
                                <div className="js-max-installments-container js-max-installments item-installments mt-2">
                                  <div className="js-max-installments product-installments installment-no-interest">
                                    <span className="js-installment-amount product-installment-amount">
                                      6
                                    </span>
                                    <span>
                                      <span className="installment-short-separator">
                                        x
                                      </span>
                                    </span>
                                    <span className="js-installment-price product-installment-value">
                                      $10.250,00
                                    </span>
                                    <span>sin interés</span>
                                  </div>
                                </div>
                              </div>
                              <div className="item-actions d-block">
                                <span
                                  data-toggle="#quickshop-modal"
                                  className="js-quickshop-modal-open js-quickshop-slide js-modal-open btn btn-link"
                                  title="Compra rápida de CORDEROY PANT BLUE"
                                  aria-label="Compra rápida de CORDEROY PANT BLUE"
                                  data-component="product-list-item.add-to-cart"
                                  data-component-value={211048750}
                                >
                                  <span className="js-open-quickshop-wording">
                                    Comprar
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="js-item-product js-item-slide swiper-slide col-12 col-md-4 item-product col-grid"
                      data-product-type="list"
                      data-product-id={210681563}
                      data-store="product-item-210681563"
                      data-component="product-list-item"
                      data-component-value={210681563}
                    >
                      <div className="item">
                        <div
                          className="js-product-container js-quickshop-container js-quickshop-has-variants position-relative"
                          data-variants='[{"product_id":210681563,"price_short":"$39.200,00","price_long":"$39.200,00 ARS","price_number":39200,"price_number_raw":3920000,"price_with_payment_discount_short":"$29.400,00","compare_at_price_short":"$43.500,00","compare_at_price_long":"$43.500,00 ARS","compare_at_price_number":43500,"stock":9,"sku":null,"available":true,"contact":false,"option0":"talle 1","option1":null,"option2":null,"id":901417142,"image":642871081,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-061-5867b18adb8515451317143928120212-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":13066.666666667,\"installment_value_cents\":1306666.6666667,\"interest\":0,\"total_value\":39200,\"without_interests\":true},\"6\":{\"installment_value\":6533.3333333333,\"installment_value_cents\":653333.33333333,\"interest\":0,\"total_value\":39200,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":39200,\"installment_value_cents\":3920000,\"interest\":0,\"total_value\":39200,\"without_interests\":true}}}"},{"product_id":210681563,"price_short":"$39.200,00","price_long":"$39.200,00 ARS","price_number":39200,"price_number_raw":3920000,"price_with_payment_discount_short":"$29.400,00","compare_at_price_short":"$43.500,00","compare_at_price_long":"$43.500,00 ARS","compare_at_price_number":43500,"stock":8,"sku":null,"available":true,"contact":false,"option0":"talle 2","option1":null,"option2":null,"id":901417149,"image":642871081,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-061-5867b18adb8515451317143928120212-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":13066.666666667,\"installment_value_cents\":1306666.6666667,\"interest\":0,\"total_value\":39200,\"without_interests\":true},\"6\":{\"installment_value\":6533.3333333333,\"installment_value_cents\":653333.33333333,\"interest\":0,\"total_value\":39200,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":39200,\"installment_value_cents\":3920000,\"interest\":0,\"total_value\":39200,\"without_interests\":true}}}"},{"product_id":210681563,"price_short":"$39.200,00","price_long":"$39.200,00 ARS","price_number":39200,"price_number_raw":3920000,"price_with_payment_discount_short":"$29.400,00","compare_at_price_short":"$43.500,00","compare_at_price_long":"$43.500,00 ARS","compare_at_price_number":43500,"stock":14,"sku":null,"available":true,"contact":false,"option0":"talle 3","option1":null,"option2":null,"id":901417154,"image":642871081,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-061-5867b18adb8515451317143928120212-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":13066.666666667,\"installment_value_cents\":1306666.6666667,\"interest\":0,\"total_value\":39200,\"without_interests\":true},\"6\":{\"installment_value\":6533.3333333333,\"installment_value_cents\":653333.33333333,\"interest\":0,\"total_value\":39200,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":39200,\"installment_value_cents\":3920000,\"interest\":0,\"total_value\":39200,\"without_interests\":true}}}"},{"product_id":210681563,"price_short":"$39.200,00","price_long":"$39.200,00 ARS","price_number":39200,"price_number_raw":3920000,"price_with_payment_discount_short":"$29.400,00","compare_at_price_short":"$43.500,00","compare_at_price_long":"$43.500,00 ARS","compare_at_price_number":43500,"stock":0,"sku":null,"available":false,"contact":false,"option0":"Talle 4","option1":null,"option2":null,"id":901417160,"image":642871081,"image_url":"\/\/acdn.mitiendanube.com\/stores\/001\/785\/816\/products\/rodraxph-061-5867b18adb8515451317143928120212-1024-1024.webp","installments_data":"{\"Pago Nube\":{\"3\":{\"installment_value\":13066.666666667,\"installment_value_cents\":1306666.6666667,\"interest\":0,\"total_value\":39200,\"without_interests\":true},\"6\":{\"installment_value\":6533.3333333333,\"installment_value_cents\":653333.33333333,\"interest\":0,\"total_value\":39200,\"without_interests\":true}},\"Pagos Personalizados\":{\"1\":{\"installment_value\":39200,\"installment_value_cents\":3920000,\"interest\":0,\"total_value\":39200,\"without_interests\":true}}}"}]'
                          data-quickshop-id="quick210681563"
                        >
                          <div className="js-item-with-secondary-image item-image item-with-two-images">
                            <div
                              style={{ paddingBottom: "125.03052503053%" }}
                              className="js-item-image-padding position-relative"
                              data-store="product-item-image-210681563"
                            >
                              <a
                                href="https://barnesindustries.com.ar/productos/remera-oversize-heavy-weight-clothing-for-the-family-black/"
                                title='REMERA HEAVYWEIGHT "CLOTHING FOR THE FAMILY" BLACK'
                                aria-label='REMERA HEAVYWEIGHT "CLOTHING FOR THE FAMILY" BLACK'
                              >
                                <img
                                  alt='REMERA HEAVYWEIGHT "CLOTHING FOR THE FAMILY" BLACK'
                                  data-expand={-10}
                                  src="./Barnes Industries_files/empty-placeholder.png"
                                  data-srcset="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-061-5867b18adb8515451317143928120212-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-061-5867b18adb8515451317143928120212-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-061-5867b18adb8515451317143928120212-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-061-5867b18adb8515451317143928120212-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-061-5867b18adb8515451317143928120212-1024-1024.webp 1024w"
                                  className="js-item-image lazyautosizes img-absolute img-absolute-centered fade-in item-image-primary lazyloaded"
                                  width={1638}
                                  height={2048}
                                  sizes="310px"
                                  srcSet="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-061-5867b18adb8515451317143928120212-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-061-5867b18adb8515451317143928120212-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-061-5867b18adb8515451317143928120212-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-061-5867b18adb8515451317143928120212-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-061-5867b18adb8515451317143928120212-1024-1024.webp 1024w"
                                />
                                <div className="placeholder-fade"></div>
                                <img
                                  alt='REMERA HEAVYWEIGHT "CLOTHING FOR THE FAMILY" BLACK'
                                  data-sizes="auto"
                                  src="./Barnes Industries_files/empty-placeholder.png"
                                  data-srcset="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-063-330ee895692532812a17143928187028-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-063-330ee895692532812a17143928187028-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-063-330ee895692532812a17143928187028-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-063-330ee895692532812a17143928187028-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-063-330ee895692532812a17143928187028-1024-1024.webp 1024w"
                                  className="js-item-image js-item-image-secondary lazyautosizes img-absolute img-absolute-centered fade-in item-image-secondary lazyloaded"
                                  sizes="310px"
                                  style={{}}
                                  srcSet="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-063-330ee895692532812a17143928187028-240-0.webp 240w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-063-330ee895692532812a17143928187028-320-0.webp 320w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-063-330ee895692532812a17143928187028-480-0.webp 480w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-063-330ee895692532812a17143928187028-640-0.webp 640w, //acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-063-330ee895692532812a17143928187028-1024-1024.webp 1024w"
                                />
                              </a>
                            </div>
                            <div className=" labels " data-store="product-item-labels">
                              <div
                                className="js-stock-label label label-default mb-2"
                                style={{ display: "none" }}
                              >
                                Sin stock
                              </div>
                              <div
                                className="js-offer-label label label-accent mb-2"
                                data-store="product-item-offer-label"
                              >
                                -<span className="js-offer-percentage">10</span>% OFF
                              </div>
                            </div>
                            <span
                              className="hidden"
                              data-store="stock-product-210681563-31"
                            />
                          </div>
                          <div className="js-item-variants hidden">
                            <form
                              className="js-product-form"
                              method="post"
                              action="https://barnesindustries.com.ar/comprar/"
                            >
                              <input
                                type="hidden"
                                name="add_to_cart"
                                defaultValue={210681563}
                              />
                              <div className="js-product-variants js-product-quickshop-variants form-row mb-1">
                                <div
                                  className="js-product-variants-group  col-12 mb-2  "
                                  data-variation-id={0}
                                >
                                  <div className="form-group  d-none">
                                    <label
                                      className="form-label "
                                      htmlFor="variation_1"
                                    >
                                      Talle
                                    </label>
                                    <select
                                      id="variation_1"
                                      className="form-select js-variation-option js-refresh-installment-data "
                                      name="variation[0]"
                                    >
                                      <option value="talle 1" selected={true}>
                                        talle 1
                                      </option>
                                      <option value="talle 2">talle 2</option>
                                      <option value="talle 3">talle 3</option>
                                      <option value="Talle 4">Talle 4</option>
                                    </select>
                                    <div className="form-select-icon">
                                      <svg className="icon-inline icon-xs icon-w-14">
                                        <use xlinkHref="#chevron-down" />
                                      </svg>
                                    </div>
                                  </div>
                                  <label className="form-label">
                                    Talle:{" "}
                                    <strong className="js-insta-variation-label">
                                      talle 1
                                    </strong>
                                  </label>
                                  <a
                                    data-option="talle 1"
                                    className="js-insta-variant btn btn-variant selected"
                                    title="talle 1"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 1"
                                    >
                                      talle 1
                                    </span>
                                  </a>
                                  <a
                                    data-option="talle 2"
                                    className="js-insta-variant btn btn-variant"
                                    title="talle 2"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 2"
                                    >
                                      talle 2
                                    </span>
                                  </a>
                                  <a
                                    data-option="talle 3"
                                    className="js-insta-variant btn btn-variant"
                                    title="talle 3"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="talle 3"
                                    >
                                      talle 3
                                    </span>
                                  </a>
                                  <a
                                    data-option="Talle 4"
                                    className="js-insta-variant btn btn-variant"
                                    title="Talle 4"
                                    data-variation-id={0}
                                  >
                                    <span
                                      className="btn-variant-content "
                                      data-name="Talle 4"
                                    >
                                      Talle 4
                                    </span>
                                  </a>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-4">
                                  <div className="form-group js-quantity form-quantity">
                                    <div
                                      className="form-row m-0 align-items-center"
                                      data-component="product.quantity"
                                    >
                                      <span
                                        className="js-quantity-down form-quantity-icon btn icon-30px ml-1"
                                        data-component="product.quantity.minus"
                                      >
                                        <svg className="icon-inline">
                                          <use xlinkHref="#minus" />
                                        </svg>
                                      </span>
                                      <div
                                        className="form-control-container col px-0"
                                        data-component="product.adding-amount"
                                      >
                                        <input
                                          type="number"
                                          className=" form-control js-quantity-input form-control-big form-control-inline"
                                          autoCorrect="off"
                                          autoCapitalize="off"
                                          pattern="\d*"
                                          name="quantity"
                                          defaultValue={1}
                                          min={1}
                                          aria-label="Cambiar cantidad"
                                          data-component="adding-amount.value"
                                        />
                                      </div>
                                      <span
                                        className="js-quantity-up form-quantity-icon btn icon-30px mr-1"
                                        data-component="product.quantity.plus"
                                      >
                                        <svg className="icon-inline">
                                          <use xlinkHref="#plus" />
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-8 pl-0">
                                  <input
                                    type="submit"
                                    className="js-addtocart js-prod-submit-form btn-add-to-cart btn btn-primary btn-big w-100 cart"
                                    defaultValue="Agregar al carrito"
                                  />
                                  <div
                                    className="js-addtocart js-addtocart-placeholder btn btn-primary btn-block btn-transition btn-big disabled"
                                    style={{ display: "none" }}
                                  >
                                    <div className="d-inline-block">
                                      <span className="js-addtocart-text">
                                        Agregar al carrito
                                      </span>
                                      <span className="js-addtocart-success transition-container">
                                        ¡Listo!
                                      </span>
                                      <div className="js-addtocart-adding transition-container">
                                        Agregando...
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div
                            className="item-description pt-3"
                            data-store="product-item-info-210681563"
                          >
                            <a
                              href="https://barnesindustries.com.ar/productos/remera-oversize-heavy-weight-clothing-for-the-family-black/"
                              title='REMERA HEAVYWEIGHT "CLOTHING FOR THE FAMILY" BLACK'
                              aria-label='REMERA HEAVYWEIGHT "CLOTHING FOR THE FAMILY" BLACK'
                              className="item-link"
                            >
                              <div
                                className="js-item-name item-name mb-2 font-weight-bold"
                                data-store="product-item-name-210681563"
                              >
                                REMERA HEAVYWEIGHT "CLOTHING FOR THE FAMILY" BLACK
                              </div>
                              <div
                                className="item-price-container mb-3"
                                data-store="product-item-price-210681563"
                              >
                                <span className="js-price-display item-price">
                                  $39.200,00
                                </span>
                                <span
                                  className="js-compare-price-display price-compare"
                                  style={{ display: "inline-block" }}
                                >
                                  $43.500,00
                                </span>
                                <div className="js-max-installments-container js-max-installments item-installments mt-2">
                                  <div className="js-max-installments product-installments installment-no-interest">
                                    <span className="js-installment-amount product-installment-amount">
                                      6
                                    </span>
                                    <span>
                                      <span className="installment-short-separator">
                                        x
                                      </span>
                                    </span>
                                    <span className="js-installment-price product-installment-value">
                                      $6.533,33
                                    </span>
                                    <span>sin interés</span>
                                  </div>
                                </div>
                              </div>
                              <div className="item-actions d-block">
                                <span
                                  data-toggle="#quickshop-modal"
                                  className="js-quickshop-modal-open js-quickshop-slide js-modal-open btn btn-link"
                                  title='Compra rápida de REMERA HEAVYWEIGHT "CLOTHING FOR THE FAMILY" BLACK'
                                  aria-label='Compra rápida de REMERA HEAVYWEIGHT "CLOTHING FOR THE FAMILY" BLACK'
                                  data-component="product-list-item.add-to-cart"
                                  data-component-value={210681563}
                                >
                                  <span className="js-open-quickshop-wording">
                                    Comprar
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 4 */}
        <section
          className="section-home section-banners-home position-relative overflow-none section-home-color p-0"
          data-store="home-banner-categories"
        >
          <div className="container-fluid px-md-3 position-relative"></div>
          <div className="container-fluid p-0 overflow-none">
            <div className="row no-gutters">
              <div className="col-grid col-md-6">
                <div className="textbanner m-0">
                  <a
                    href="https://barnesindustries.com.ar/new-collection/?mpage=3"
                    className="textbanner-link"
                    aria-label="Carrusel 1"
                  >
                    <div className="textbanner-image p-0 overflow-none">
                      <img
                        width={1080}
                        height={1920}
                        src="./Barnes Industries_files/empty-placeholder.png"
                        data-sizes="auto"
                        data-expand={-10}
                        data-srcset="//acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725030905-3690779539-05e6826d04213c4c7ccc3f69d48af1f81718725033-480-0.webp?125514776 480w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725030905-3690779539-05e6826d04213c4c7ccc3f69d48af1f81718725033-640-0.webp?125514776 640w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725030905-3690779539-05e6826d04213c4c7ccc3f69d48af1f81718725033-1024-1024.webp?125514776 1024w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725030905-3690779539-05e6826d04213c4c7ccc3f69d48af1f81718725033-1920-1920.webp?125514776 1920w"
                        className="textbanner-image-effect img-fluid d-block w-100 lazyautosizes fade-in lazyloaded"
                        alt="Banner de Barnes Industries"
                        sizes="676px"
                        srcSet="//acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725030905-3690779539-05e6826d04213c4c7ccc3f69d48af1f81718725033-480-0.webp?125514776 480w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725030905-3690779539-05e6826d04213c4c7ccc3f69d48af1f81718725033-640-0.webp?125514776 640w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725030905-3690779539-05e6826d04213c4c7ccc3f69d48af1f81718725033-1024-1024.webp?125514776 1024w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725030905-3690779539-05e6826d04213c4c7ccc3f69d48af1f81718725033-1920-1920.webp?125514776 1920w"
                      />
                      <div className="placeholder-fade placeholder-banner" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-grid col-md-6">
                <div className="textbanner m-0">
                  <a
                    href="https://barnesindustries.com.ar/abrigos/jackets/"
                    className="textbanner-link"
                    aria-label="Carrusel 2"
                  >
                    <div className="textbanner-image p-0 overflow-none">
                      <img
                        width={1080}
                        height={1920}
                        src="./Barnes Industries_files/empty-placeholder.png"
                        data-sizes="auto"
                        data-expand={-10}
                        data-srcset="//acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725727882-5290415685-ccdc5b221ac602c3bfab6c2121934c5d1718725730-480-0.webp?125514776 480w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725727882-5290415685-ccdc5b221ac602c3bfab6c2121934c5d1718725730-640-0.webp?125514776 640w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725727882-5290415685-ccdc5b221ac602c3bfab6c2121934c5d1718725730-1024-1024.webp?125514776 1024w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725727882-5290415685-ccdc5b221ac602c3bfab6c2121934c5d1718725730-1920-1920.webp?125514776 1920w"
                        className="textbanner-image-effect img-fluid d-block w-100 lazyautosizes fade-in lazyloaded"
                        alt="Banner de Barnes Industries"
                        sizes="676px"
                        srcSet="//acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725727882-5290415685-ccdc5b221ac602c3bfab6c2121934c5d1718725730-480-0.webp?125514776 480w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725727882-5290415685-ccdc5b221ac602c3bfab6c2121934c5d1718725730-640-0.webp?125514776 640w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725727882-5290415685-ccdc5b221ac602c3bfab6c2121934c5d1718725730-1024-1024.webp?125514776 1024w, //acdn.mitiendanube.com/stores/001/785/816/themes/baires/2-slide-1718725727882-5290415685-ccdc5b221ac602c3bfab6c2121934c5d1718725730-1920-1920.webp?125514776 1920w"
                      />
                      <div className="placeholder-fade placeholder-banner" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 5 */}
        
    </div>
  )
}

export default page