'use client'
function Login(){

    return (
        <div className="h-screen flex">
            <div className="left bg-[url('/User/Login/Login_user.jpg')] bg-cover bg-center basis-1/3">
            <div className="bg-navyblue/80 h-full text-white">
                <img src="/kris-logo.png" alt="logo" width="200px" className="pt-10 " />
                <div className="content mt-10 px-5">
                    <h1 className="text-3xl">HR Management Platform</h1>
                    <svg width="160" height="30" xmlns="http://www.w3.org/2000/svg">
                        <rect width="140" height="18" x="8" y="8" rx="10" ry="10" fill="white" />
                    </svg>
                    <h3>Manage all employees, payrolls, and other human resource operations.</h3>
                    <div className="flex mt-2">
                        <button className="me-3 py-2 px-6 rounded-md text-black bg-yellow-500">Learn More</button>
                        <button className="me-3 py-2 px-6 rounded-md border">Our Features</button>
                    </div>
                </div>
            </div>
            </div>
            <div className="right basis-2/3 pt-18 px-18">
                <h1 className="text-6xl">Welcome to KRIS</h1>
                <p className="text-gray-500 mt-2 text-2xl">Register your account</p>
                <div className="user-register mt-4 w-3xl">
                    <form>
                        <div className="flex gap-4">
                            <div className="basis-1/2">
                                <label htmlFor="firstname" className="text-navyblue">First Name</label> <br />
                                <input type="text" name="firstName" id="firstname" className="border rounded-sm w-full h-8" />
                            </div>
                            <div className="basis-1/2">
                                <label htmlFor="lastname" className="text-navyblue">Last Name</label> <br />
                                <input type="text" name="lastName" id="lastname" className="border rounded-sm w-full h-8" />
                            </div>
                        </div>
                        <div className="flex gap-4 mt-5">
                            <div className="basis-1/2">
                                <label htmlFor="email" className="text-navyblue">E-mail Address</label> <br />
                                <input type="email" name="email" id="email" className="border rounded-sm w-full h-8" />
                            </div>
                            <div className="basis-1/2">
                                <label htmlFor="phoneno" className="text-navyblue">Phone Number</label> <br />
                                <input type="number" name="phoneno" id="phoneno" className="border rounded-sm w-full h-8" />
                            </div>
                        </div>
                        <div className="flex gap-4 mt-5">
                            <div className="basis-1/2">
                                <label htmlFor="password" className="text-navyblue">Password</label> <br />
                                <input type="password" name="password" id="password" className="border rounded-sm w-full h-8" />
                            </div>
                            <div className="basis-1/2">
                                <label htmlFor="confirmpassword" className="text-navyblue">Confirm Password</label> <br />
                                <input type="password" name="confirmpassword" id="confirmpassword" className="border rounded-sm w-full h-8" />
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;