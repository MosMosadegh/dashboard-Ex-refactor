import  { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [post, setPost] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect( ()=>{
        setTimeout(() => {
            fetch(url)
        .then(res => res.json())
        .then(datas => {
            console.log(datas);
            setPost(datas)
            setIsPending(false)
            setError(null)
        })
        .catch(err=> console.log(err))
        }, 1000);
        
    },[])
    return {post, isPending, error}
}
