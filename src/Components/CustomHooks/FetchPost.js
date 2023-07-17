import React from 'react'
import useFetch from '../../hooks/useFetch'
import './FetchPost.css'

export default function FetchPost() {

const {post, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts')


  return (
    <div className='fetchContainer'>
       <p className='text-primary text-center p-4 fs-2'>I have created a custom hook named "useFetch" which fetch from API. </p>
        {error && <div>{error}</div>}
        {isPending && <div>Loading... :))</div>}
        {post && post.map(
            post=>(
                <div key={post.id} className='px-4'>
                <h2>{post.id} - {post.title}</h2>
                <hr />
                </div>
            )
        )}
    </div>
  )
}
