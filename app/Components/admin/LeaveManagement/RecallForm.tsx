interface Leave{
    id: number;
    employeeName: string;
    duration: number;
    startDate: string;
    endDate: string;
    type: string;
    reason: string;
    status: string;
}

interface RecallFormProps{
    currentLeave: Leave
}
function RecallForm(props:RecallFormProps){
    const {currentLeave} = props;

    return (
        <div className="bg-white py-2 px-3 vh-100">
            <i className="fa-solid fa-phone text-2xl"></i>
            <p className="mt-2 text-1xl">Leave Recall</p>
            <p className="mt-1">Fill in the required details to recall this employee</p>
            <form>
                <div className="mt-2">
                    <label htmlFor="name">Employee Name</label> <br />
                    <input type="text" name="name" id="name" defaultValue={currentLeave.employeeName} className="bg-blue-200/60 w-full rounded-lgpy-1 px-3 mt-1"/>
                </div>
                <div className="mt-2">
                    <label htmlFor="name">Department</label>
                    <input type="text" name="name" id="name" defaultValue={currentLeave.employeeName} className="bg-blue-200/60 w-full rounded-lgpy-1 px-3 mt-1"/>
                </div>
                <div className="mt-3 flex gap-x-8">
                    <div className="basis-1/2">
                        <label htmlFor="startdate">Start Date</label> <br />
                        <input type="date" name="startdate" id="startdate" placeholder="" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                    <div className="basis-1/2">
                        <label htmlFor="enddate">End Date</label> <br />
                        <input type="date" name="enddate" id="enddate" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                </div>
                <div className="mt-3 flex gap-x-8">
                    <div className="basis-1/2">
                        <label htmlFor="days-remaining">Days Remaining</label> <br />
                        <input type="number" name="days-remaining" id="days-remaining" placeholder="3" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                    <div className="basis-1/2">
                        <label htmlFor="resumptiondate">New Resumption Date</label> <br />
                        <input type="date" name="resumptiondate" id="resumptiondate" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                </div>
                <div className="mt-2">
                    <label htmlFor="relief-officer">Relief Officer(s)</label>
                    <input type="text" name="relief-officer" id="relief-officer" className="bg-blue-200/60 w-full rounded-lgpy-1 px-3 mt-1"/>
                </div>
                <div className="flex mt-5">
                    <button className="text-white bg-green-700 py-2 w-66 me-5 rounded-lg">Initiate Recall</button>
                    <button className="text-red-700 border border-red-700 py-2 w-66 rounded-lg">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default RecallForm;