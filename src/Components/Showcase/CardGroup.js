import { getBook, getBooks } from '@/pages/api/books'
import { useState, useEffect } from 'react'
import Card from './Card'
import { useSelector,useDispatch } from 'react-redux'
import { getBooksAction } from '@/redux/actions/books'

function CardGroup({ categoryId }) {
  const dispatch = useDispatch()
  const getBooks = (id) => {
    dispatch(getBooksAction(id))
  }
  const books = getBooks(categoryId);
  return (
    <div>
      {books?.map((b,i) => <Card key={i} bookId={b.id} />)}
    </div>
  )
}

export default CardGroup
