import { useContext } from "react"
import { FormContext } from '../FormContext'


function Step3FormSetting({ onChange }) {
  const formData = useContext(FormContext)

  return (
    <>
      {formData.map(data => {
        if ( data.label === '持卡人姓名' || data.label === '卡號' ) {
            return (
              <div className="input-group input-w-lg-4 input-w-sm-full" key={data.name}>
                <div className="input-label">{data.label}</div>
                <input type="text" name={data.name} placeholder={data.defaultValue} value={data.value} 
                 onChange={(e) => onChange(
                  {
                    name: data.name,
                    value: e.target.value,
                  }
                 )
                } />
              </div>
            )
          } else if ( data.label === '有效期限' || data.label === 'CVC / CCV' ) {
            return (
              <div className="input-group input-w-lg-3 input-w-sm-s3" key={data.name}>
                <div className="input-label">{data.label}</div>
                <input type="text" name={data.name} placeholder={data.defaultValue} value={data.value}
                onChange={(e) => onChange(
                  {
                    name: data.name,
                    value: e.target.value,
                  }
                )
                } />
              </div>
            )
          }
        } 
      )}
    </>
  )
}

export default function Step3({ onChange }) {

    return (
        <>
            {/* credit-card phase */}
            <form className="col col-12" data-phase="credit-card">
                <h3 className="form-title">付款資訊</h3>
                <section className="form-body col col-12">
                  <div className="col col-12">
                    <Step3FormSetting onChange={({ name, value }) => 
                      onChange({ name, value })} />
                  </div>
                </section>
            </form>
        </>
    )
}