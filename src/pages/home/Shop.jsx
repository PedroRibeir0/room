
export default function Shop() {
  return (
    <section className="shop">
        <h2>Transform your space with our stunning furniture collection</h2>
        <button className='shop-button'>
          <span>Shop now</span>
          <img src="/images/icon-arrow.svg" alt="" />
        </button>
        <div className="shop-images">
            <picture id="img-1" >
              <div className="overlay">
                <span className="product-name">name</span>
                <span className="product-price">$99.99</span>
              </div>
              <img src="/images/shop-image-1.jpg" alt="" />
            </picture>
            <div className="column">
                <picture id="img-2" >
                  <div className="overlay">
                    <span className="product-name">name</span>
                    <span className="product-price">$99.99</span>
                  </div>
                  <img src="/images/shop-image-2.jpg" alt="" />
                </picture>
                <picture id="img-3">
                  <div className="overlay">
                    <span className="product-name">name</span>
                    <span className="product-price">$99.99</span>
                  </div>
                  <img src="/images/shop-image-3.jpg" alt="" />
                </picture>
            </div>
            <picture id="img-4" >
              <div className="overlay">
                <span className="product-name">name</span>
                <span className="product-price">$99.99</span>
              </div>
              <img src="/images/shop-image-4.jpg" alt="" />
            </picture>
        </div>
    </section>
  )
}
