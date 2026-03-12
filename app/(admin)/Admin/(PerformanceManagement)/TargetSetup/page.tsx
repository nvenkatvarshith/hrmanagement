function TargetSetup(){

    return (
        <div className="px-5 py-7 bg-white mt-7">
            <div>
                <form>
                    <div className="mt-3 flex gap-x-8">
                        <div className="basis-1/2">
                            <label htmlFor="title">Title</label> <br />
                            <input type="text" name="title" id="title" placeholder="" className="bg-blue-200/60 mt-2 w-full py-2 px-2 rounded-lg" />
                        </div>
                        <div className="basis-1/2">
                            <label htmlFor="kpi">KPI Weight</label> <br />
                            <input type="number" name="kpi" id="kpi" className="bg-blue-200/60 mt-2 w-full py-2 px-2 rounded-lg" />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="description">Description</label> <br />
                        <input type="text" name="description" id="description" placeholder="" className="bg-blue-200/60 mt-2 w-full py-2 px-2 rounded-lg" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="employees">Employees</label> <br />
                        <select name="employees" id="employees" className="bg-blue-200/60 mt-2 w-full p-2 rounded-lg">

                        </select>
                    </div>
                    <div className="mt-3 flex gap-x-8">
                        <div className="basis-1/2">
                            <label htmlFor="startdate">Start Date</label> <br />
                            <input type="date" name="startdate" id="startdate" placeholder="" className="bg-blue-200/60 mt-2 w-full py-2 px-2 rounded-lg" />
                        </div>
                        <div className="basis-1/2">
                            <label htmlFor="enddate">End Date</label> <br />
                            <input type="date" name="enddate" id="enddate" className="bg-blue-200/60 mt-2 w-full py-2 px-2 rounded-lg" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="w-66 bg-green-700 rounded-xl text-white py-2 me-3">Submit</button>
                        <button className="w-66 border rounded-xl text-amber-500 py-2">Add More Targets</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TargetSetup;