import Link from "next/link";
function Login(){
    
    return (
        <div className="h-screen flex">
            <div className="left-login basis-1/3">
                <img src="/kris-logo-dark.png" alt="logo" width="200px" className="pt-10 " />
                <div className="px-10">
                    <h1 className='text-4xl mt-8 text-navyblue'>Login</h1>
                    <h3 className='text-2xl mt-3 text-gray-500'>Login to your account</h3>
                    <form className="mt-4">
                        <div>
                            <label htmlFor="email" className="text-navyblue">E-mail address</label><br />
                            <input type="email" id='email' className='w-full my-2 py-1 border border-gray-500'/>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="password" className="text-navyblue">Password</label> <br />
                            <input type="password" id='password' className='w-full my-2 py-1 border border-gray-500'/>
                        </div>
                        <div className='flex justify-between w-full my-2'>
                            <div>
                                <input type="checkbox" name="rememberme" id="rememberme" className='me-1'/>
                                <label htmlFor="rememberme" className="text-gray-500">Remember me</label>
                            </div>
                            <a href="#" className="text-navyblue">Reset Password?</a>
                        </div>
                        <button className='py-2 mt-3 w-full text-white bg-navyblue'>Sign In</button>
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