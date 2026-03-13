"use client"
import Link from "next/link";
import {useForm} from "react-hook-form"
interface RegisterForm{
    firstName: string;
    lastName: string;
    email: string;
    phoneno: string;
    password: string;
    confirmpassword: string;
    newsletter: string;
    policies: boolean;
}

function Register(){
    const {register, handleSubmit, formState:{errors}} = useForm<RegisterForm>();
    const registerUser = (formValues: RegisterForm) => {
        console.log(formValues);
        if(formValues.policies === true){
            window.location.href = "/User/Login"
        }
    }
    return (
        <div className="h-screen flex">
            <div className="left bg-[url('/User/Register/register_user.jpg')] bg-cover bg-center basis-1/3">
                <div className="bg-navyblue/80 h-full text-white">
                    <img src="/kris-logo.png" alt="logo" width="200px" className="pt-10 " />
                    <div className="content mt-10 px-5">
                        <h1 className="text-3xl">HR Management Platform</h1>
                        <svg width="160" height="30" xmlns="http://www.w3.org/2000/svg">
                            <rect width="140" height="18" x="8" y="8" rx="10" ry="10" fill="white" />
                        </svg>
                        <h3 className="my-3 text-2xl">Manage all employees, payrolls, and other human resource operations.</h3>
                        <div className="flex mt-4">
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
                    <form onSubmit={handleSubmit(registerUser)}>
                        <div className="flex gap-4">
                            <div className="basis-1/2">
                                <label htmlFor="firstname" className="text-navyblue">First Name</label> <br />
                                <input type="text" id="firstname" className="border rounded-sm w-full h-8" 
                                    {...register('firstName',{
                                        required: {value: true, message: "FirstName is required"},
                                        pattern: {value: /^[A-Za-z]+$/, message: "Firstname should be a word(only alphabets)"}
                                    })}
                                />
                                {errors.firstName?.message && <p className="text-sm text-red-600 mb-0">{String(errors.firstName.message)}</p>}
                            </div>
                            <div className="basis-1/2">
                                <label htmlFor="lastname" className="text-navyblue">Last Name</label> <br />
                                <input type="text" id="lastname" className="border rounded-sm w-full h-8" 
                                {...register('lastName',{
                                        required: {value: true, message: "Last Name is required"},
                                        pattern: {value: /^[A-Za-z]+$/, message: "Last Name should be a word(only alphabets)"}
                                    })}/>
                                {errors.lastName?.message && <p className="text-sm text-red-600 mb-0">{String(errors.lastName.message)}</p>}
                        
                            </div>
                        </div>
                        <div className="flex gap-4 mt-5">
                            <div className="basis-1/2">
                                <label htmlFor="email" className="text-navyblue">E-mail Address</label> <br />
                                <input type="email" id="email" className="border rounded-sm w-full h-8" 
                                {...register('email',{
                                    required: {value: true, message: "Email is required"},
                                    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, message: 'Incorrect email format'} 
                                })}/>
                                {errors.email?.message && <p className="text-sm text-red-600 mb-0">{String(errors.email.message)}</p>}
                            </div>
                            <div className="basis-1/2">
                                <label htmlFor="phoneno" className="text-navyblue">Phone Number</label> <br />
                                <input type="number" id="phoneno" className="border rounded-sm w-full h-8"
                                {...register('phoneno',{
                                    required: {value: true, message: "Phone Number is required"},
                                    pattern: { value: /^(?:\+91|91|0)?[6-9]\d{9}$/, message: 'Incorrect Phone Number'} 
                                })}/>
                                {errors.phoneno?.message && <p className="text-sm text-red-600 mb-0">{String(errors.phoneno.message)}</p>}
                            </div>
                        </div>
                        <div className="flex gap-4 mt-5">
                            <div className="basis-1/2">
                                <label htmlFor="password" className="text-navyblue">Password</label> <br />
                                <input type="password" id="password" className="border rounded-sm w-full h-8"
                                {...register('password',{
                                    required: {value:true, message: "Password is required"},
                                    pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Use 8+ chars with uppercase, lowercase, digit and special character (!@#$%^&*)"}
                                })}
                                />
                                {errors.password?.message && <p className="text-sm text-red-600 mb-0">{String(errors.password.message)}</p>}    
                            </div>
                            <div className="basis-1/2">
                                <label htmlFor="confirmpassword" className="text-navyblue">Confirm Password</label> <br />
                                <input type="password" id="confirmpassword" className="border rounded-sm w-full h-8" 
                                {...register('confirmpassword',{
                                    required: {value:true, message: "Confirm Password is required"},
                                    pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Use 8+ chars with uppercase, lowercase, digit and special character (!@#$%^&*)"}
                                })}
                                />
                                {errors.confirmpassword?.message && <p className="text-sm text-red-600 mb-0">{String(errors.confirmpassword.message)}</p>}   
                            </div>
                        </div>
                        <div className="mt-5 text-gray-500">
                            <input type="checkbox" id="newsletter" 
                            {...register('newsletter',{})}
                            /> Yes, I want to receive KRIS newsletters
                            <div className="mt-2"><input type="checkbox" id="policies" {...register('policies',{})} /> I agree to all the Terms, Privacy Policy</div>
                        </div>
                        <button className="border rounded-md bg-navyblue text-white py-3 px-9 mt-5" type="submit">Create Account</button>
                        <p className="mt-7">Already have an account? <Link href="/User/Login" className="text-navyblue">Log In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;