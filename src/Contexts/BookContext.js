import { getBooks, getCategories } from "@/pages/api/books";
import { createContext, useContext, useState } from "react";

const BookContext = createContext()

const BookContextProvider = async ({children}) => {
  const [categories, setCategories] = useState([])
  const [books, setBooks] = useState([])
  const [book, setBook] = useState([])
  try {
    const ctg = await getCategories()
    await setCategories(ctg.category)
    const _books = await getBooks()
    await setBooks(_books.product)
  } catch (err) {
    console.log(err);
  }

}