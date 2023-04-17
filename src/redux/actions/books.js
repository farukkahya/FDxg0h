import axios from 'axios'

export const getCategoriesAction = () => async (dispatch) => {
  try {
    const {data} = await axios.get('https://assign-api.piton.com.tr/api/rest/categories')
    dispatch({type: "GET_CATEGORIES", payload: data})
  } catch (error) {
    return console.log(error)
  }
}
export const getBooksAction = (id) => async (dispatch) => {
  try {
    const {data} = await axios.get(`https://assign-api.piton.com.tr/api/rest/products/${id}`)
    dispatch({type: "GET_BOOKS", payload: [data]})
  } catch (error) {
    return console.log(error)
  }
}
export const getBookAction = (id) => async (dispatch) => {
  try {
    const {data} = await axios.get(`https://assign-api.piton.com.tr/api/rest/product/${id}`)
    dispatch({type: "GET_BOOKS", payload: [data]})
  } catch (error) {
    return console.log(error)
  }
}