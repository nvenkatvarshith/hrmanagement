"use client"

import BreadCrumb from "@/app/Components/BreadCrumb";

function annual(){
    const currentUrl = "Dashboard/Applyleave/AnnualLeave";
    const reliefOfficers = ["Venkat", "varshith"];
    const leaveType = ["Annual leave", "Sick leave", "Maternity leave","Compassionate leave"];
    return (
        <div className="bg-blue-200/60 px-7 py-9">
            <div className="bg-white px-5 py-4">
                <BreadCrumb currentUrl={currentUrl} />
            </div>
            <div className="px-50">  
                <div className="bg-white px-5 py-9 mt-4">
                    <h1 className="text-2xl text-center"><img src="/User/Dashboard/book-open.png" alt="openbook" width="40px" className="inline me-3"/>Leave Application</h1>
                    <p className="text-1xl font-bold text-center my-2">Fill the required fields below to apply for annual leave.</p>
                    <form className="font-bold px-10">
                        <div className="mt-1">
                            <label htmlFor="leavetype">Leave Type</label> <br />
                            <select name="leavetype" id="leavetype" className="bg-blue-200/60 text-gray-600 mt-2 w-full py-2 px-2">
                                {leaveType.map((type) => (
                                    <option key={type} value={type.split(" ")[0]}>{type}</option>
                                ))}
                            </select>
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
                                <label htmlFor="duration">Duration</label> <br />
                                <input type="number" name="duration" id="duration" placeholder="" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                            </div>
                            <div className="basis-1/2">
                                <label htmlFor="resumptiondate">Resumption Date</label> <br />
                                <input type="date" name="resumptiondate" id="resumptiondate" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="reason">Reason for leave</label> <br />
                            <textarea name="reason" id="reason" className="bg-blue-200/60 mt-2 w-full py-2 px-2"></textarea>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="handover">Attach handover document (pdf, jpg, docx or any other format)</label> <br />
                            <input type="file" name="handover" id="handover"  accept="application/pdf" className="bg-blue-200/60 mt-2 w-full py-2 px-2"/>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="relief">Choose Relief Officer</label> <br />
                            <select name="relief" id="relief" className="bg-blue-200/60 text-gray-600 mt-2 w-full py-2 px-2">
                                <option value="select">Select your relief officer</option>
                                {reliefOfficers.map((officer) => (
                                    <option key={officer} value={officer}>{officer}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex mt-5">
                            <button className="text-white bg-green-700 py-2 w-66 me-5">Submit</button>
                            <button className="text-red-700 border border-red-700 py-2 w-66">Reset</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default annual;