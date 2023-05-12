import { ReactComponent as NextArrow } from "../../../assets/icons/Next-arrow.svg"
import { ReactComponent as LastArrow } from "../../../assets/icons/Last-arrow-light-theme.svg"

const ButtonContent = ({children, dataPhase}) => {
    return (
      <>
        <section className="button-group col col-12" data-phase={dataPhase}>
          {children}
        </section>
      </>
    )
}

const ButtonSetting = ({className, text, onClick }) => {

    if (className === 'prev') {
      return (
        <>
          <button className={className} key={className} onClick={onClick}>
            <LastArrow className={`${className} cursor-point`} />
            {text}
          </button>
        </>
      ) 
    } else {
      return (
        <>
          <button className={className} key={className} onClick={onClick}>
            {text}
            <NextArrow className={`${className} cursor-point`} />
          </button>
        </>
      )
    }
}



export default function ProgressControl({ onClick }) {
    return (
        <>
        {/* progress-control */}
          <section className="progress-control-container col col-lg-6 col-sm-12">
            <ButtonContent dataPhase={"address"}>
              <ButtonSetting className="next" text={"下一步"} onClick={onClick} />
            </ButtonContent>
            <ButtonContent dataPhase={"shipping"}>
              <ButtonSetting className="prev" text={"上一步"} onClick={onClick} />
              <ButtonSetting className="next" text={"下一步"} onClick={onClick} />
            </ButtonContent>
            <ButtonContent dataPhase={"credit-card"}>
              <ButtonSetting className="prev" text={"上一步"} onClick={onClick} />
              <ButtonSetting className="next" text={"確認下單"} onClick={onClick} />
            </ButtonContent>
          </section>
        </>
    )
}