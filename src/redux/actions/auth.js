import axios from'axios'
export const registerAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post('https://assign-api.piton.com.tr/api/rest/register', authData)
    dispatch({ type: "REGISTER", payload: data })
    window.location = "/"
  } catch (error) {
    return error
  }
}
export const loginAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post('https://assign-api.piton.com.tr/api/rest/login', authData)
    dispatch({ type: "LOGIN", payload: data })
    window.location = "/"
  } catch (error) {
    return error
  }
}