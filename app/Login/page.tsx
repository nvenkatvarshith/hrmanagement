'use client'
import {useForm} from 'react-hook-form';
function Login(){
    const {register, handleSubmit, formState:{errors}} = useForm();
    const validateLogin = (formValues:any) => {
        console.log(formValues);
    }
    return (
        <div className="bg-[url('/Login/login-bg.jpg')] bg-cover bg-center bg-blue-900/70 bg-blend-multiply min-h-screen">
            <div>
                <div className="w-full my-auto h-screen flex flex-col justify-center items-center text-white">
                    <h1 className='text-center text-4xl mt-8'>Login</h1>
                    <h3 className='text-1xl mt-1'>Login to your account</h3>
                    <form onSubmit={handleSubmit(validateLogin)} className='flex flex-col justify-center items-center mt-2'>
                        <div>
                            <label htmlFor="email">E-mail address</label><br />
                            <input type="email" id='email' className='w-sm my-2 py-1 bg-white text-black'/>
                        </div>

                        <div>
                            <label htmlFor="password">Password</label> <br />
                            <input type="password" id='password' className='w-sm my-2 py-1 bg-white text-black'/>
                        </div>

                        <div className='flex justify-between w-full my-1'>
                            <div>
                                <input type="checkbox" name="rememberme" id="rememberme" className='me-1'/>
                                <label htmlFor="rememberme">Remember me</label>
                            </div>
                            <a href="#">Reset Password?</a>
                        </div>
                        <button className='w-full py-1 mt-2 bg-yellow-100 text-black'>Sign In</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login;