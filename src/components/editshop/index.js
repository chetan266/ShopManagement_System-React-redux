import EditShopForm from "./form"
import { connect } from "react-redux"
import { edit_shop, close_edit } from "../../actions"

const Editshop = ({ edit, edit_shop, close_edit, shop }) => {
  const className = `pop ${edit ? "show" : "hide"}`
  console.log(className)
  const onSubmit = (values) => {
    edit_shop(values)
    close_edit()
  }
  return (
    <div className={className}>
      <i onClick={close_edit} class="fas fa-times cross"></i>
      <EditShopForm onSubmit={onSubmit} shop={shop} />
    </div>
  )
}
const mapStateToProps = (state) => ({
  shops: state.shops,
  add: state.add,
  filter_: state.filter_,
  edit: state.edit,
})
export default connect(mapStateToProps, { edit_shop, close_edit })(Editshop)
