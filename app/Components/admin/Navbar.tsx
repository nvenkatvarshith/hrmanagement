function Navbar(){

    return (
        <div className="pt-3 flex justify-center items-center">
            <div className="me-11 bg-navyblue text-white rounded-lg">
                <select name="filter" id="filter" className="px-2 py-2">
                    <option value="candidates">All Candidates</option>
                </select>
                <input type="search" name="search" id="search" className="bg-white w-2xl py-2 text-1xl ps-2 rounded-e-lg" />
            </div>
            <div>
                <span className="rounded-full bg-navyblue text-white p-2 me-3"><i className="fa-solid fa-bell"></i></span>
                <span className="rounded-full bg-orange-400 p-2 me-3"><i className="fa-solid fa-wrench"></i></span>
                <span className="rounded-full bg-green-700 text-white p-2"><i className="fa-solid fa-envelope"></i></span>
            </div>
        </div>
    )
}

export default Navbar;