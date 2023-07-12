import React from 'react'
import './LoginForm.css'

import useInput from '../../hooks/useInput'

export default function LoginForm() {

  const [userNameValue, usernameBinding, userNameReset] = useInput('')
  const [passwordValue, passwordBinding, passwordReset] = useInput('')
  

  const submitHandler = (event)=>{
    event.preventDefault()
    alert(`Hello ${userNameValue} From Mostafa`)
    userNameReset()
    passwordReset()
  }

  return (
    <div className='d-felx flex-column bodyLogin'>
  <h3 className='text-primary text-center py-4'>I have created a custom hook named "useInput" which mange the value to input box </h3>
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={submitHandler}>
          <input type="text"
            {...usernameBinding}
            placeholder="Username" />

          <input type="password"
            {...passwordBinding}
            placeholder="Password" />
          <button>login</button>
          <p className="message">Not registered? <a href="#">Create an account</a></p>
        </form>
      </div>
    </div>

        </div>
  )
}
