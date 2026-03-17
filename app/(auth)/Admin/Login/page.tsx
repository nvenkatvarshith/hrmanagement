"use client"
import {useForm} from 'react-hook-form';
function Login(){
    const {register, handleSubmit, formState:{errors}} = useForm();
    const validateLogin = (formValues:any) => {
       const isCredentialsValid = true;
       if(isCredentialsValid){
            window.location.href = "/Admin/Dashboard";
       }
    }
    return (
        <div className="bg-[url('/Admin/Login/login-bg.jpg')] bg-cover bg-center bg-blue-900/70 bg-blend-multiply min-h-screen">
            <div>
                <div className="w-full my-auto h-screen flex flex-col justify-center items-center text-white">
                    <h1 className='text-center text-4xl mt-8'>Login</h1>
                    <h3 className='text-1xl mt-1'>Login to your account</h3>
                    <form onSubmit={handleSubmit(validateLogin)} className='flex flex-col justify-center items-center mt-2'>
                        <div>
                            <label htmlFor="email">E-mail address</label><br />
                            <input type="email" id='email' className='w-sm my-2 py-1 bg-white text-black'
                            {...register('email',{
                                required:{value:true,message:"Email is required"},
                                pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, message: 'Incorrect email format'} 
                            })}/>
                            {errors.email?.message && <p className="text-sm text-red-600 mb-0">{String(errors.email.message)}</p>}
                        </div>

                        <div>
                            <label htmlFor="password">Password</label> <br />
                            <input type="password" id='password' className='w-sm my-2 py-1 bg-white text-black'
                            {...register('password',{
                                required : {value:true, message:"Password is required"},
                                pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Use 8+ chars with uppercase, lowercase, digit and special character (!@#$%^&*)"}
                            })}/>
                            {errors.password?.message && <p className="text-sm text-red-600 mb-0">{String(errors.password.message)}</p>}
                        </div>

                        <div className='flex justify-between w-full my-1'>
                            <div>
                                <input type="checkbox" name="rememberme" id="rememberme" className='me-1'/>
                                <label htmlFor="rememberme">Remember me</label>
                            </div>
                            <a href="#">Reset Password?</a>
                        </div>
                        <button className='w-full py-1 mt-2 bg-yellow-100 text-black cursor-pointer' type='submit'>Sign In</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login;