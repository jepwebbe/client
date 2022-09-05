import React from 'react'
import { useForm } from 'react-hook-form'
import appService from '../../App/Appservices/AppService';
import { useLoginStore } from './useLoginStore';
import { useNavigate } from "react-router-dom"
const Login = () => {
    const navigate = useNavigate();
    const {setLoggedIn, loggedIn, username } = useLoginStore((store) => ({
        setLoggedIn: store.setLoggedIn,
        loggedIn: store.loggedIn,
        username: store.username
    }))
    const { register, handleSubmit } = useForm();

    const onSubmit = (submitdata) => {
        const fetchResult = async () => {
            try {
                const response = await appService.Login(submitdata.username, submitdata.password)
                if(response.data){
                    console.log(response.data)
                    setLoggedIn(true, response.data.username, response.data.access_token)
                    navigate("/profile")
                }
                
            } catch (error) {
                console.error(error)
            }
        }
        fetchResult()
    }
    const handleLogout = () => {
        setLoggedIn(false, "", "")
    }
  return !loggedIn ? (
    
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username", {required: true})} type="text" autoComplete="username" placeholder="brugernavn"/>
        <input {...register("password", {required: true})} type="password" autoComplete="password" placeholder="password"/>
        <button>Login</button>
    </form>
    
  )
  : (<>
  <h3>{username} er logget in</h3>
  <button onClick={() => handleLogout()}>Log ud</button>
  </>)
}

export default Login
