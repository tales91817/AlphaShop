import { ReactComponent as Minus } from "../../assets/icons/Minus-button.svg"
import { ReactComponent as Plus } from "../../assets/icons/Plus-button.svg"
import { ReactComponent as Product01 } from "../../assets/images/Product-1.svg"
import { ReactComponent as Product02 } from "../../assets/images/Product-2.svg"



export default function CartInformation() {
  return (
      <>
      {/* cart */}
        <section className="cart-container col col-lg-5 col-sm-12">
          <h3 className="cart-title">購物籃</h3>

          <section className="product-list col col-12" data-total-price="0">
            <div class="product-container col col-12" data-count="0" data-price="3999">
                <Product01 class="img-container" />
                <div class="product-info">
                  <div class="product-name">破壞補丁修身牛仔褲</div>
                  <div class="product-control-container">
                    <div class="product-control">
                      <Minus class="product-action plus" />
                      <span class="product-count">1</span>
                      <Plus class="product-action plus" />
                    </div>
                  </div>
                  <div class="price">$3,999</div>
                </div>
              </div>
              <div class="product-container col col-12" data-count="0" data-price="1299">
                <Product02 class="img-container" />
                <div class="product-info">
                  <div class="product-name">刷色直筒牛仔褲</div>
                  <div class="product-control-container">
                    <div class="product-control">
                      <Minus class="product-action plus" />
                      <span class="product-count">1</span>
                      <Plus class="product-action plus" />
                    </div>
                  </div>
                  <div class="price">$1,299</div>
                </div>
              </div>
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

// function CartContent() {
//   const content = [
//     {
//       productName: "破壞補丁修身牛仔褲",
//       productImg: Product01,
//       price: '$3,999',
//       count: 1,
//     },
//     {
//       productName: "刷色直筒牛仔褲",
//       productImg: Product02,
//       price: '$1,299',
//       count: 1,
//     },
//   ]
  
//   return (
//     <>
//       {content.map(product => 
//         <div className="product-container col col-12" data-count={product.count} data-price={product.price}>
//           <Product02  className="img-container" />
//           <div className="product-info">
//             <div className="product-name">{product.productName}</div>
//             <div className="product-control-container">
//               <div className="product-control">
//                 <Minus className="product-action minus" />
//                 <span className="product-count">{product.count}</span>
//                 <Plus className="product-action plus" />
//               </div>
//             </div>
//             <div className="price">{product.price}</div>
//           </div>
//         </div>
//       )}
//     </>

//   )
// }

// export default function CartInformation() {
//     return (
//         <>
//         {/* cart */}
//           <section className="cart-container col col-lg-5 col-sm-12">
//             <h3 className="cart-title">購物籃</h3>

//             <section className="product-list col col-12" data-total-price="0">
//               <CartContent />
//             </section>

//             <section className="cart-info shipping col col-12">
//               <div className="text">運費</div>
//               <div className="price">免費</div>
//             </section>
//             <section className="cart-info total col col-12">
//               <div className="text">小計</div>
//               <div className="price">$5,298</div>
//             </section>
//           </section>
//         </>
//     )
// }