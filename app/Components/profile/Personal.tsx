"use client"
function Personal(){

    return (
        <div className="text-center pt-13 w-full">
            <div className="text-end me-7">
                <i className="fa-regular fa-pen-to-square text-2xl"></i><br />
                <span className="text-start">Edit</span>
            </div>
            <i className="fa-solid fa-user text-8xl"></i>
            <div className="mt-5">
                <p className="text-1xl">Employee Name</p>
                <h1 className="text-2xl mt-2 font-bold">John Doe Francis</h1>
            </div>
            <div className="mt-5">
                <p className="text-1xl">Department</p>
                <h1 className="text-2xl mt-2 font-bold">Design & Marketing</h1>
            </div>
            <div className="flex w-full justify-evenly mt-7">
                <div>
                    <p className="text-1xl">Job Title</p>
                    <h1 className="text-2xl mt-2 font-bold">UI / UX Designer</h1>
                </div>
                <div>
                    <p className="text-1xl">Job Category</p>
                    <h1 className="text-2xl mt-2 font-bold">Full time</h1>
                </div>
            </div>
        </div>
    )
}

export default Personal;