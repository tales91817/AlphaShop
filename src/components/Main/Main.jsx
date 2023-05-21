import Register from "./Register/Register"
import CartInformation from "./Cart-info/CartInformation"
import ProgressControl from "./ProgressControl/ProgressControl"
import { useState, useContext } from "react"
import { FormContext } from "./Register/StepProgress/FormContext"
import { CartProducts } from "./Cart-info/CartContext"



export default function Main() {
  const [dataPhase, setDataPhase] = useState(1)
  const cartData = useContext(CartProducts)
  const [productData, setProductData] = useState(cartData)
  const formData = useContext(FormContext)
  const [formValue, setFormValue] = useState(formData)
  const totalPrice = productData.map(data => data.price * data.quantity).reduce((acc, cur) => acc + cur)
  

  function handleChange({ name, value }) {
    setFormValue((prevData) => {
      return prevData.map(data => {
        if (data.name === name) {
          return {
            ...data,
            value: value,
          }
        }
        return data;
      })
    })
  }
  
  function handleMinusClick(id) {
    setProductData((prevData) => {
      return prevData.map(data => {
        if (data.id === id) {
          return {
            ...data,
            quantity: data.quantity === 0 ? 0 : data.quantity - 1
          }
        }
        return data;
      })
    })
  }

  function handlePlusClick(id) {
    setProductData((prevData) => {
      return prevData.map(data => {
        if (data.id === id) {
          return {
            ...data,
            quantity: data.quantity + 1
          }
        }
        return data;
      })
    })
  }

  function handleClick(e) {
    if (e.target.classList.contains('prev')) {
        setDataPhase(p => p - 1)
      } else if (e.target.classList.contains('next') && dataPhase !== 3) {
        setDataPhase(p => p + 1)
      } else if (dataPhase === 3) {
      setDataPhase(3)
      handleSubmit()
      setFormValue(formData)
    }
  }


  function handleSubmit() {
    formValue.map(data => {
     return console.log(`${data.label}: ${data.value}`)
    })
    return console.log(`購物車總金額：${totalPrice}`)
  }

  


    return (
        <>
            <main className="site-main">
                <div className="main-container">
                  <FormContext.Provider value={formValue}>
                    <CartProducts.Provider value={productData}>
                      <Register dataPhase={dataPhase} onChange={handleChange}/>
                      <CartInformation onMinusClick={handleMinusClick} onPlusClick={handlePlusClick} totalPrice={totalPrice}/>
                      <ProgressControl onClick={handleClick}/>
                    </CartProducts.Provider>
                  </FormContext.Provider>
                </div>
            </main>
        </>
    )
}