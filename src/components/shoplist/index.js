import { connect } from "react-redux"
import AddShop from "../addshop"
import styles from "./shoplist.module.css"
import Card from "./card"
import Edit from "../editshop"
import { show_add, show_filter } from "../../actions"
import Filtershops from "../filtershops"

const List = ({ shops, showEdit }) => {
  if (!shops.length) {
    return null
  }
  return shops.map((shop) => {
    return <Card shop={shop} showEdit={showEdit} />
  })
}

const Shops = ({ shops, show_add, add, show_filter }) => {
  return (
    <div className={`row ${styles.parent}`}>
      <i
        onClick={show_add}
        className={`fas fa-plus-circle ${styles.add_button}`}
      ></i>
      <i
        onClick={show_filter}
        className={`fa fa-filter ${styles.filter_button}`}
      ></i>
      <Edit />
      <AddShop />
      <Filtershops />
      <div className={styles.list}>
        <List shops={shops} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  shops: state.shops,
  add: state.add,
  edit: state.edit,
})
export default connect(mapStateToProps, { show_add, show_filter })(Shops)
