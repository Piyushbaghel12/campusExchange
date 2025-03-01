import React from 'react'
import list from "../../public/list.json";
import Cards from './Cards';
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-2'>
      <div className='mt-28 items-center justify-center text-center'>
      <h1 className='text-2xl md:text-4xl'>
        We are delighted to have you
        <span className='text-pink-500'> here! :)</span> 
      </h1>
      <div className='mt-8'>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
       quo veritatis illo nulla eos sint ab ut accusantium error officia doloremque,
      a, repellendus recusandae? Totam eaque excepturi facilis dolores amet. Sunt
       adipisci nam eaque nulla iusto aliquid saepe laudantium ipsa. Lorem ipsum dolor
       sit amet consectetur adipisicing elit. Repudiandae placeat architecto veritatis
      </p>
      <Link to="/">
      <button className='mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-pink-500
       duration-300'>Back</button>
      </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))

        }
      </div>
      </div>
    </div>
    </>
  )
}

export default Course;
