import RegisterProgress from "./StepProgress/RegisterProgress"
import RegisterForm from "./StepProgress/Register-form"



export default function Register({ dataPhase, total, onChange }) {
    return (
        <>
            <section className="register-container col col-lg-6 col-sm-12" data-phase={dataPhase} data-total-price={total}>
            {/* register-title */}
            <h2 className="register-title col col-12">結帳</h2>
                <RegisterProgress />
                <RegisterForm onChange={onChange}/>
            </section>
        </>
    )
}