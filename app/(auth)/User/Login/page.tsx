"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";
interface FormValues{
    email: string;
    password: string;
    rememberme: boolean;
}

function Login(){
    const {register, handleSubmit, formState:{errors}} = useForm<FormValues>();

    const validateUser = (formValues:FormValues) => {
        console.log(formValues);
        //Api call to validate user
        window.location.href = "/User/Dashboard";
    };

    return (
        <div className="h-screen flex">
            <div className="left-login basis-1/3">
                <img src="/kris-logo-dark.png" alt="logo" width="200px" className="pt-10 " />
                <div className="px-10">
                    <h1 className='text-4xl mt-8 text-navyblue'>Login</h1>
                    <h3 className='text-2xl mt-3 text-gray-500'>Login to your account</h3>
                    <form className="mt-4" onSubmit={handleSubmit(validateUser)}>
                        <div>
                            <label htmlFor="email" className="text-navyblue">E-mail address</label><br />
                            <input type="email" id='email' className='w-full my-2 py-1 border border-gray-500'
                                {...register('email',{
                                    required: {value: true, message: "Email is required"},
                                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, message: 'Incorrect email format'} 
                                })}/>
                            {errors.email?.message && <p className="text-sm text-red-600 mb-0">{String(errors.email.message)}</p>}
                        </div>
                        <div className="mt-3">
                            <label htmlFor="password" className="text-navyblue">Password</label> <br />
                            <input type="password" id='password' className='w-full my-2 py-1 border border-gray-500'
                                {...register('password',{
                                    required: {value:true, message: "Password is required"},
                                    pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Use 8+ chars with uppercase, lowercase, digit and special character (!@#$%^&*)"}
                                })}
                            />
                            {errors.password?.message && <p className="text-sm text-red-600 mb-0">{String(errors.password.message)}</p>}
                        </div>
                        <div className='flex justify-between w-full my-2'>
                            <div>
                                <input type="checkbox"  id="rememberme" className='me-1'
                                 {...register('rememberme') }
                                />
                                <label htmlFor="rememberme" className="text-gray-500">Remember me</label>
                            </div>
                            <Link href="#" className="text-navyblue">Reset Password?</Link>
                        </div>
                        <button className='py-2 mt-3 w-full text-white bg-navyblue' type="submit">Sign In</button>
                        <p className="mt-3 text-center text-gray-500">Don’t have an account yet? <Link href="/User/Register" className="text-navyblue">Join KRIS today.</Link></p>
                        
                    </form>
                </div>
            </div>
            <div className="right-login bg-[url('/User/Login/user_login.jpg')] bg-cover bg-center basis-2/3">
                <div className="bg-navyblue/70 h-full text-white flex flex-col justify-center px-14 gap-y-4">
                    <h1 className="text-5xl mt-19">Manage all HR Operations from the comfort of your home.</h1>
                    <div className="flex flex-row">
                        <svg width="160" height="30" xmlns="http://www.w3.org/2000/svg">
                            <rect width="140" height="18" x="8" y="8" rx="10" ry="10" fill="white" />
                        </svg>
                        <svg width="160" height="30" xmlns="http://www.w3.org/2000/svg" className="">
                            <rect width="140" height="18" x="8" y="8" rx="10" ry="10" fill="white" />
                        </svg>
                        <svg width="160" height="30" xmlns="http://www.w3.org/2000/svg" className="">
                            <rect width="140" height="18" x="8" y="8" rx="10" ry="10" fill="white" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;