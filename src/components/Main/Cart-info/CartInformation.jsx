import { useState } from "react"
import Products from "./Products"


export default function CartInformation() {

  const [total, setTotal] = useState(0)

  const calculate = (price) => {
    setTotal(total + price)
  }

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
        {/* cart */}
          <section className="cart-container col col-lg-5 col-sm-12">
            <h3 className="cart-title">購物籃</h3>

            <section className="product-list col col-12" data-total-price={total}>
            {products.map((product) => 
              <Products 
                id={product.id} 
                key={product.id}
                name={product.name} 
                img={product.img} 
                price={product.price} 
                quantity={product.quantity} 
                onCalculate={calculate}
              />
            )}
            </section>

            <section className="cart-info shipping col col-12">
              <div className="text">運費</div>
              <div className="price">免費</div>
            </section>
            <section className="cart-info total col col-12">
              <div className="text">小計</div>
              <div className="price">{total}</div>
            </section>
          </section>
        </>
    )
}