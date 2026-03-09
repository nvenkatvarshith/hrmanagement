function Kin(){

    return (
        <div className="px-7 py-5">
            <form>
                <div className="mt-4 flex gap-x-8">
                    <div className="basis-1/2">
                        <label htmlFor="nextkin">Next of kin name</label> <br />
                        <input type="text" name="nextkin" id="nextkin" placeholder="John Doe Samson" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                    <div className="basis-1/2">
                        <label htmlFor="job">Job/Occupation</label> <br />
                        <input type="text" name="job" id="job" placeholder="IT Manager" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                </div>
                <div className="mt-4 flex gap-x-8">
                    <div className="basis-1/2">
                        <label htmlFor="phone">Phone Number</label> <br />
                        <input type="text" name="phone" id="phone" placeholder="+91 9705567878" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                    <div className="basis-1/2">
                        <label htmlFor="relationship">Relationship</label> <br />
                        <select name="relationship" id="relationship" className="bg-blue-200/60 mt-2 w-full py-2 px-2">
                            <option value="Relative">Relative</option>
                        </select>
                    </div>
                </div>
                
                <div className="mt-4">
                    <label htmlFor="address">Residential Address</label> <br />
                    <textarea name="address" id="address" className="bg-blue-200/60 mt-2 w-full py-4 px-4" placeholder="Gokhale Nagar, Ramanthapur, Hyderabad"></textarea>
                </div>
                <button className="w-66 bg-green-700 text-white py-3 mt-5">Update</button>
            </form>
        </div>
    )
}

export default Kin;