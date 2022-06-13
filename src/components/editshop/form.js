import React from "react"
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"
// <-------Validations------->

const validate = (values) => {
  var letters = /^[A-Za-z ]+$/
  const errors = {}
  if (!values.name) {
    errors.name = "Required"
  } else if (!values.name.match(letters)) {
    errors.name = "Must be only alphabets"
  }
  if (!values.area) {
    errors.area = "Required"
  }
  if (!values.category) {
    errors.category = "Required"
  }
  if (!values.open) {
    errors.open = "Required"
  }
  if (!values.close) {
    errors.close = "Required"
  }
  if (values.close < values.open) {
    errors.close = "closing time must be greatar than opening time"
  }
  return errors
}

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

// <-------Main Form------->

const EditShopForm = (props) => {
  const { handleSubmit, submitting, edit, reset } = props
  const submit = (values) => {
    var shop_value = { ...values, name: edit.name }
    props.onSubmit(shop_value)
    reset()
  }
  return (
    <form className={`pop-up`} onSubmit={handleSubmit(submit)}>
      <h3>Edit Shop Details</h3>
      Name : {edit ? edit.name : null}
      {/* <Field
          name="name"
          type="text"
          component={renderField}
          label="Name of the shop"
        /> */}
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
          name="open"
          type="time"
          component={renderField}
          label="Open time"
        />
      </div>
      <div>
        <Field
          name="close"
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
  add: state.add,
  filter_: state.filter_,
  edit: state.edit,
})
export default reduxForm({
  form: "EditShop", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(connect(mapStateToProps)(EditShopForm))
