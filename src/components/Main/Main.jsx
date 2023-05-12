import Register from "./Register/Register"
import CartInformation from "./Cart-info/CartInformation"
import ProgressControl from "./ProgressControl/ProgressControl"
import { useState } from "react"


export default function Main() {
  const [dataPhase, setDataPhase] = useState(1)

  function handleClick(e) {
    if (e.target.classList.contains('prev')) {
        setDataPhase(p => p - 1)
      } else if (e.target.classList.contains('next') && dataPhase !== 3) {
        setDataPhase(p => p + 1)
      } else if (dataPhase === 3) {
      setDataPhase(3)
    }
  }

    return (
        <>
            <main class="site-main">
                <div class="main-container">
                    <Register dataPhase={dataPhase}/>
                    <CartInformation />
                    <ProgressControl onClick={handleClick}/>
                </div>
            </main>
        </>
    )
}