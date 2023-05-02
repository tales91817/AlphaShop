import Products from "./Products"
// import Product01 from "../../assets/images/Product-1.svg"
// import Product02 from "../../assets/images/Product-2.svg"

function CartContent() {
  // const content = [
  //   {
  //     productName: "破壞補丁修身牛仔褲",
  //     productImg: Product01,
  //     price: '$3,999',
  //     count: 1,
  //   },
  //   {
  //     productName: "刷色直筒牛仔褲",
  //     productImg: Product02,
  //     price: '$1,299',
  //     count: 1,
  //   },
  // ]

  const products = [
    {
      id: '1',
      name: '貓咪罐罐',
      img: 'https://picsum.photos/300/300?text=1',
      price: 100,
      quantity: 2,
    },
    {
      id: '2',
      name: '貓咪干干',
      img: 'https://picsum.photos/300/300?text=2',
      price: 200,
      quantity: 1,
    },
  ]
  
  return (
    <>
      {products.map((product) => 
        <Products 
          id={product.id} 
          name={product.name} 
          img={product.img} 
          price={product.price} 
          quantity={product.quantity} 
        />
      )}
    </>

  )
}

export default function CartInformation() {
    return (
        <>
        {/* cart */}
          <section className="cart-container col col-lg-5 col-sm-12">
            <h3 className="cart-title">購物籃</h3>

            <section className="product-list col col-12" data-total-price="0">
              <CartContent />
            </section>

            <section className="cart-info shipping col col-12">
              <div className="text">運費</div>
              <div className="price">免費</div>
            </section>
            <section className="cart-info total col col-12">
              <div className="text">小計</div>
              <div className="price">$5,298</div>
            </section>
          </section>
        </>
    )
}