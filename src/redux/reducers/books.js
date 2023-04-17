
const booksReducer = (state = { booksData: [] }, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return{
        categories:action.payload
      }
    case "GET_BOOKS":
      return{
        categories:action.payload
      }
    case "GET_BOOK":
      return{
        categories:action.payload
      }
    default:
      return state
  }
}
export default booksReducer