import {  useContext } from "react"
import { CartProducts } from "./CartContext"
import { ReactComponent as Minus} from "assets/icons/Minus-button.svg"
import { ReactComponent as Plus } from "assets/icons/Plus-button.svg"


function ProductInfo(props) {
  return (
    <div className="product-container col col-12" 
    data-count={props.id} 
    data-price={props.price}>
      <img className="img-container" alt={props.name} src={props.img}/>
      <div className="product-info">
        <div className="product-name">{props.name}</div>
        <div className="product-control-container">
          <div className="product-control">
              <Minus className="product-action minus" 
              onClick={() => props.onMinusClick(props.id)}
                 />
            <span className="product-count">{props.quantity}</span>
              <Plus className="product-action plus" 
              onClick={() => props.onPlusClick(props.id)}/>
          </div>
        </div>
        <div className="price">{props.price}</div>
      </div>
    </div>
  )
}


export default function Cart({ onMinusClick, onPlusClick, totalPrice}) {
  const cartData = useContext(CartProducts)

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price={totalPrice}>
        {cartData.map((data) => (
          <ProductInfo 
            key={data.id} {...data} 
            onMinusClick={onMinusClick} 
            onPlusClick={onPlusClick}
          />
        ))}
        </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">$ {totalPrice}</div>
      </section>
    </section>
  )
}