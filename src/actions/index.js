import {
  UPDATE_SHOP_LIST,
  SHOW_ADD,
  CLOSE_ADD,
  SHOW_EDIT,
  CLOSE_EDIT,
  FILTER_SHOPS,
  CLOSE_FILTER,
  SHOW_FILTER,
} from "./types"

export const update = (values) => (dispatch) => {
  if (localStorage.shopList) {
    let shops = JSON.parse(localStorage.getItem("shopList"))
    shops.push(values)
    localStorage.setItem("shopList", JSON.stringify(shops))
    dispatch(setList(shops))
  } else {
    let shops = []
    shops.push(values)
    localStorage.setItem("shopList", JSON.stringify(shops))
    dispatch(setList(shops))
  }
}
const setList = (shops) => {
  return {
    type: UPDATE_SHOP_LIST,
    payload: shops,
  }
}

export const filter = (values) => (dispatch) => {
  const { area, category, opening_time, closing_time } = values
  let shops = JSON.parse(localStorage.getItem("shopList"))
  const filteredShops = shops.filter((shop) => {
    if (area) {
      if (shop.area !== area) {
        return false
      }
    }
    if (category) {
      if (shop.category !== category) {
        return false
      }
    }
    if (opening_time) {
      if (shop.opening_time >= opening_time) {
        return false
      }
    }
    if (closing_time) {
      if (shop.closing_time <= closing_time) {
        return false
      }
    }
    return true
  })

  dispatch(filterShops(filteredShops))
}

const filterShops = (shops) => {
  return {
    type: FILTER_SHOPS,
    payload: shops,
  }
}

export const getList = () => (dispatch) => {
  let shops = JSON.parse(localStorage.getItem("shopList"))
  dispatch(setList(shops))
}

export const delete_shop = (value) => (dispatch) => {
  let shops = JSON.parse(localStorage.getItem("shopList"))
  for (let i = 0; i < shops.length; i++) {
    if (shops[i].name === value) {
      var ind = i
      break
    }
  }
  shops.splice(ind, 1)
  localStorage.setItem("shopList", JSON.stringify(shops))
  dispatch(setList(shops))
}
export const edit_shop = (values) => (dispatch) => {
  console.log(values)
  let shops = JSON.parse(localStorage.getItem("shopList"))
  for (let i = 0; i < shops.length; i++) {
    console.log(i)
    if (shops[i].name === values.name) {
      var ind = i
      break
    }
  }
  shops[ind] = values
  dispatch(setList(shops))
}

export const show_add = () => (dispatch) => {
  dispatch({
    type: SHOW_ADD,
  })
}

export const close_add = () => (dispatch) => {
  dispatch({
    type: CLOSE_ADD,
  })
}

export const show_edit = (shop) => (dispatch) => {
  dispatch({
    type: SHOW_EDIT,
    payload: shop,
  })
}
export const close_edit = () => (dispatch) => {
  dispatch({
    type: CLOSE_EDIT,
  })
}

export const show_filter = () => (dispatch) => {
  dispatch({
    type: SHOW_FILTER,
  })
}

export const close_filter = () => (dispatch) => {
  dispatch({
    type: CLOSE_FILTER,
  })
}
