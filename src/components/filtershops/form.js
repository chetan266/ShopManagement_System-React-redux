import React from "react"
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"

// <-------Render Input Field------->

const renderField = ({
  value,
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} value={value} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
}

// <-------Render Selcted Field------->

const renderSelector = ({ arr, input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select an option...</option>
      {arr.map((val) => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

// <-------Filter Form------->

const FilterShopForm = (props) => {
  const { handleSubmit, submitting } = props
  const submit = (values) => {
    var shop_value = { ...values }
    props.onSubmit(shop_value)
    props.reset()
  }
  return (
    <form className={`pop-up`} onSubmit={handleSubmit(submit)}>
      <h3>Filter Shops </h3>

      <div>
        <label>Area</label>
        <Field
          name="area"
          component={renderSelector}
          arr={[
            "Thane",
            "Pune",
            "Mumbai Suburban",
            "Nashik",
            "Nagpur",
            "Ahmednagar",
            "Solapur",
          ]}
        />
      </div>
      <div>
        <label>Category</label>
        <Field
          name="category"
          component={renderSelector}
          arr={["Grocery", "Butcher", "Baker", "Chemist", "Stationery"]}
        />
      </div>
      <div>
        <Field
          name="opening_time"
          type="time"
          component={renderField}
          label="Open time"
        />
      </div>
      <div>
        <Field
          name="closing_time"
          type="time"
          component={renderField}
          label="close time"
        />
      </div>
      <div className={`flex center`}>
        <button className="btn blue" type="submit" disabled={submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = (state) => ({
  shops: state.shops,
})
export default reduxForm({
  form: "filterShop", // a unique identifier for this form
})(connect(mapStateToProps)(FilterShopForm))
