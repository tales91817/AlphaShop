import Step1 from "./Steps/Step1"
import Step2 from "./Steps/Step2"
import Step3 from "./Steps/Step3"
import StepProgress from "./RegisterProgress"

export default function RegisterForm() {
    return (
        <>
            <section class="form-container col col-12">
                <Step1 />
                {/* shipping phase */}
                {/* credit-card phase */}
            </section>
        </>
    )
}