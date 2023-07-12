import React from 'react'
import useFetch from '../../hooks/useFetch'
import './FetchPost.css'

export default function FetchPost() {

const {post, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts')


  return (
    <div className='fetchContainer'>
       <h3 className='text-primary text-center py-4'>I have created a custom hook named "useFetch" which fetch from API. </h3>
        {error && <div>{error}</div>}
        {isPending && <div>Loading... :))</div>}
        {post && post.map(
            post=>(
                <div key={post.id}>
                <h2>{post.id} - {post.title}</h2>
                <hr />
                </div>
            )
        )}
    </div>
  )
}
