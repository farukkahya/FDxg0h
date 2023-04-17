import { getBook } from '@/pages/api/books'
import { getBookAction } from '@/redux/actions/books'
import Image from 'next/image'
import {useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'

const Card = ({ bookId }) => {
  const getBook = (id) => {
    const dispatch = useDispatch()
    dispatch(getBookAction(id))
  }
  const book = getBook(categoryId);
  
  return (
    <div className='flex'>
      <div>
        <Image alt='book-cover' src={book.cover}/>
      </div>
      <div>
        <div>{book.name}</div>
        <div>{book.price}</div>
      </div>
    </div>
  )
}

export default Card