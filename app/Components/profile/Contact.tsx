function Contact(){

    return (
        <div className="px-7 py-5">
            <form>
                <div className="mt-3 flex gap-x-8">
                    <div className="basis-1/2">
                        <label htmlFor="phone1">Phone Number 1</label> <br />
                        <input type="text" name="phone1" id="phone1" placeholder="Phone Number 1" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                    <div className="basis-1/2">
                        <label htmlFor="phone2">Phone Number 2</label> <br />
                        <input type="text" name="phone2" id="phone2" placeholder="Phone Number 2" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                </div>

                <div className="mt-3">
                    <label htmlFor="email">E-mail Address</label> <br />
                    <input type="email" name="email" id="email" placeholder="@gmail.com" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                </div>

                <div className="mt-3 flex gap-x-8">
                    <div className="basis-1/2">
                        <label htmlFor="state">State of residence</label> <br />
                        <input type="text" name="state" id="state" placeholder="State" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                    <div className="basis-1/2">
                        <label htmlFor="city">City</label> <br />
                        <input type="text" name="city" id="city" placeholder="City" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                </div>
                <div className="mt-3">
                    <label htmlFor="address">Residential Address</label> <br />
                    <textarea name="address" id="address" className="bg-blue-200/60 mt-2 w-full py-4 px-4" placeholder="Gokhale Nagar, Ramanthapur, Hyderabad"></textarea>
                </div>
                <button className="w-66 bg-green-700 text-white py-3 mt-5">Update</button>
            </form>
        </div>
    )
}

export default Contact;