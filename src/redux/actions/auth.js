import axios from'axios'
export const registerAction = (authData) => async (dispatch) => {
  try {
    const { data } = await fetch('https://assign-api.piton.com.tr/api/rest/register', {
      method:"POST",
      body: JSON.stringify(authData)
    })
    dispatch({ type: "REGISTER", payload: data })
    window.location = "/"
  } catch (error) {
    return error
  }
}
export const loginAction = (authData) => async (dispatch) => {
  try {
    const { data } = await fetch('https://assign-api.piton.com.tr/api/rest/login',{
      method:"POST",
      body: JSON.stringify(authData)
    })
    dispatch({ type: "LOGIN", payload: data })
    window.location = "/"
  } catch (error) {
    return console.log(error)
  }
}