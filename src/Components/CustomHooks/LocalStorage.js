import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import './LocalStorage.css'

export default function LocalStorage() {

  const [value, setValue] = useLocalStorage('data1', '')

  return (
    <div className='d-flex flex-column justify-content-center align-items-center local-container'>
       <p className='text-primary text-center p-4 fs-2'>I have created a custom hook named "useLocalStorage" which Save the data to LocalStorage. </p>
        <input 
        type="text" 
        value={value}
        onChange={(e)=> setValue(e.target.value) }
        />
    </div>
  )
}
