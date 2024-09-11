import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import  Button  from './Button'
import  Input  from './Input'
import  Logo  from './Logo'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'




function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            if (!data) {
                throw new Error("Data is null or undefined")
            }
            const userData = await authService.createAccount(data)
            if (userData) {
                const currentUser = await authService.getCurrentUser()
                if (currentUser) {
                    dispatch(login(currentUser))
                    navigate("/")
                } else {
                    throw new Error("Couldn't get current user")
                }
            } else {
                throw new Error("Couldn't create user")
            }
        } catch (error) {
            setError(error.message)
            console.error("Error creating user:", error)
        }
    }

    return (
        <div className=''>
            <div className="{`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}">
                <div className='flex flex-col items-center justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold'>sign up to create an account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Alreaddy have an account ?&nbsp;

                    <Link to="/login" className='font-medium text-primary-regular transition-all duration-200 hover:underline'>
                        Sign In
                    </Link>
                </p>
                {error && <p className='text-red-600 text-center mt-8'>{error}</p>}
            
            <form onSubmit={handleSubmit(create)}>
                <div className="space-y-4">
                    <Input
                        label="Name: "
                        type="text"
                        placeholder="enter your name"
                        {...register("name", { required: true })}
                    />
                    <Input
                        label="Email: "
                        type="email"
                        placeholder="enter your Email"
                        {...register("email",
                            {
                                required: true,
                                validate: {
                                    matchPattern: (value) => value && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "email is not valid"
                                }
                            }
                        )}
                    />
                    <Input
                        label="Password: "
                        type="password"
                        placeholder="enter your password"
                        {...register("password", { required: true })}
                    />
                    <Button type="submit" className='w-full'>Sign Up</Button>
                </div>
            </form>
            </div>
        </div>
    )
}


export default SignUp