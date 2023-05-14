import { ReactComponent as CompletedIcon } from "assets/icons/completed.svg"

const ProgressState = ({ number, phase, stateTitle }) => {
  return (
    <>
      <span className="progress-group" data-phase={phase} key={number}>
        <span className="progress-icon">
          <span className="text">{number}</span>
          <CompletedIcon className="icon cursor-point" />
        </span>
        <span className="progress-label">{stateTitle}</span>
      </span>
      {number !== 3 && (
        <span className="progress-bar" data-order={number}></span>
      )}
    </>
  )
}


export default function RegisterProgress() {
    return (
        <>
            {/* register-progress */}
            <section className="progress-container col col-12">
              <ProgressState number={1} phase={'address'} stateTitle={"寄送地址"} />
              <ProgressState number={2} phase={'shipping'} stateTitle={"運送方式"} />
              <ProgressState number={3} phase={'credit-card'} stateTitle={"付款資訊"} />
            </section>
        </>
    )
}