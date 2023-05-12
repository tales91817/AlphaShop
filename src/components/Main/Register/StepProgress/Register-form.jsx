import Step1 from "./Steps/Step1"
import Step2 from "./Steps/Step2"
import Step3 from "./Steps/Step3"


export default function RegisterForm() {
    return (
        <>
            <section class="form-container col col-12">
                <Step1 />
                <Step2 />
                <Step3 />
            </section>
        </>
    )
}