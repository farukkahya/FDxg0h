import Link from 'next/link'
import CardGroup from './CardGroup'

const Showcase = ({ categories }) => {
  return (
    <div className='px-72 my-14'>
      {categories.map((c, i) => (
        <React.Fragment key={i}>
          <div className='flex justify-between' id="title">
            <span className='text-auth-blue font-extrabold text-3xl'>{c.name}</span>
            <Link className='text-orange-500 font-bold text-lg' href={'/'}>View All</Link>
          </div>
          <div id="books text-black">
            <CardGroup categoryId={c.id}/>
          </div>
        </React.Fragment>
      ))}

    </div>

  )
}

export default Showcase