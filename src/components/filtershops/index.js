import FilterShopForm from "./form"
import { connect } from "react-redux"
import { filter, close_filter } from "../../actions"

const FilterShop = (props) => {
  console.log(props)
  const className = `pop ${props.filter_ ? "show" : "hide"}`
  const onSubmit = (values) => {
    props.filter(values)
    props.close_filter()
  }
  return (
    <div className={className}>
      <i onClick={props.close_filter} class="fas fa-times cross"></i>
      <FilterShopForm onSubmit={onSubmit} />
    </div>
  )
}
const mapStateToProps = (state) => ({
  shops: state.shops,
  add: state.add,
  edit: state.edit,
  filter_: state.filter_,
})
export default connect(mapStateToProps, { filter, close_filter })(FilterShop)
