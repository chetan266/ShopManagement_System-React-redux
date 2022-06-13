import { useState } from "react"
import { connect } from "react-redux"
import { delete_shop, show_edit } from "../../actions"

const Card = ({ shop, delete_shop, show_edit }) => {
  const [state, setState] = useState(false)
  const toggle = () => {
    if (state) {
      setState(false)
    } else {
      setState(true)
    }
  }
  const delete_s = (value) => {
    delete_shop(value)
  }
  return (
    <div>
      {" "}
      <li key={shop.name}>
        <div className={`flex space-between`}>
          {shop.name}
          <i
            onClick={toggle}
            class={`fas fa-chevron-circle-down ${state ? "hide" : "show"}`}
          ></i>
          <i
            onClick={toggle}
            class={`fas fa-chevron-circle-up ${state ? "show" : "hide"}`}
          ></i>
        </div>
        <div className={`${state ? "show" : "hide"}`}>
          <hr></hr>
          Name : {shop.name}
          <br></br>
          Area :{shop.area}
          <br></br>
          Category : {shop.category}
          <br></br>
          Opening time: {shop.open}
          <br></br>
          Closing time: {shop.close}
          <br></br>
          <hr></hr>
          <div className="flex space-between">
            {/* <i onClick={()=>showEdit(shop)} class="fas fa-edit"></i> */}
            <button onClick={() => show_edit(shop)} class="btn blue">
              Edit <i class="fas fa-edit"></i>
            </button>
            <button onClick={() => delete_s(shop.name)} class="btn red">
              Delete <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </li>
    </div>
  )
}

const mapStateToProps = (state) => ({
  shops: state.shops,
  add: state.add,
  filter_: state.filter_,
  edit: state.edit,
})
export default connect(mapStateToProps, { delete_shop, show_edit })(Card)
