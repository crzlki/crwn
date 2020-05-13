import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'
import { useState } from 'react'

import './sign-up.styles.scss'


const SignUp =({ signUpStart }) =>{
   const [userCredentials,setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
   })

   const { displayName,email,password,confirmPassword } = userCredentials
  const  handleSubmit = ev => {
        ev.preventDefault()
        const { displayName,email,password,confirmPassword } = userCredentials
        if(password!==confirmPassword){
            alert(`Passwords don't match`)
            return
        }
        signUpStart({displayName,email,password})
        
    }

  const  handleChange = ev => {
        const { name,value } = ev.target
        setCredentials({...userCredentials,[name]:value})
    }

 
        return (
            <div className="sign-up">
                <h2 className="title">
                    I do not have a account
                </h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                   <FormInput 
                   type='text'
                   name='displayName'
                   value={displayName}
                   onChange={handleChange}
                   label='Display Name'
                   required
                   />
                   
                   <FormInput 
                   type='email'
                   name='email'
                   value={email}
                   onChange={handleChange}
                   label='email'
                   required
                   />
                   
                   <FormInput 
                   type='password'
                   name='password'
                   value={password}
                   onChange={handleChange}
                   label='password'
                   required
                   />
                  
                   <FormInput 
                   type='confirmPassword'
                   name='confirmPassword'
                   value={confirmPassword}
                   onChange={handleChange}
                   label='confirmPassword'
                   required
                   />
                   <CustomButton type='submit' >SIGNUP</CustomButton>
                </form>
            </div>
        )
    
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName,email,password)=> dispatch(signUpStart(displayName,email,password)),
})
export default  connect(null,mapDispatchToProps)(SignUp)