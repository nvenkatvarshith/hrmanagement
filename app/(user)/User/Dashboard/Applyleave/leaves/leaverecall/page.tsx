"use client"
import BreadCrumb from "@/app/Components/BreadCrumb";

function LeaveRecall(){
    const currentUrl = "Dashboard/LeaveRecall";
    const recallMessage = "This is to inform you that you have been RECALLED from your CASUAL Leave by your line manager named DOYINSOLA ODUNSI for an urgent meeting and task to be completed in the office before 2nd June, 2022.";
    return (
        <div className="bg-blue-200/60 px-7 py-9">
            <div className="bg-white px-5 py-4">
                <BreadCrumb currentUrl={currentUrl} />
            </div>
            <div className="px-50">  
                <div className="bg-white px-5 py-9 mt-4">
                    <h1 className="text-2xl text-center"><img src="/User/Dashboard/book-open.png" alt="openbook" width="40px" className="inline me-3"/>Leave Recall</h1>
                    <p className="text-1xl font-bold px-10 py-10 bg-blue-200/60 my-2">Dear User, <br /><br />{recallMessage}</p>
                    <h2 className="text-1xl mt-6 font-bold">If No, state reason why ?</h2>
                    <textarea name="reason" id="reason" className="bg-blue-200/60 w-full px-5 font-bold py-7 mt-3" placeholder="State your reason..." ></textarea>
                    <div className="flex mt-5">
                        <button className="text-white bg-green-700 py-2 w-66 me-5">Approve</button>
                        <button className="text-red-700 border border-red-700 py-2 w-66">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaveRecall;