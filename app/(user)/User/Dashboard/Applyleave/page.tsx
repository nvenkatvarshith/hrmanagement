"use client"
import BreadCrumb from "@/app/Components/BreadCrumb";
import Link from "next/link";
function Applyleave(){
    const currentUrl = "Dashboard/Applyleave";
    const leaveData = [
            { 
                id: 1, 
                title: "Annual Leave", 
                balance: 60, 
                link: "Applyleave/leaves" 
            },
            { 
                id: 2, 
                title: "Sick Leave", 
                balance: 20, 
                link: "Applyleave/leaves" 
            },
            { 
                id: 3, 
                title: "Maternity Leave", 
                balance: 60, 
                link: "Applyleave/leaves" 
            },
            { 
                id: 4, 
                title: "Compassionate Leave", 
                balance: 30, 
                link: "Applyleave/leaves" 
            }
            ];
    
    const leaveHistory = [
        {
            id: 1,
            name: "Varshith",
            duration: "2 Days",
            startDate: "2026-03-10",
            endDate: "2026-03-11",
            type: "Annual Leave",
            reason: "Personal work at the farm",
            status: "Approved"
        },
        {
            id: 2,
            name: "Varshith",
            duration: "1 Day",
            startDate: "2026-02-15",
            endDate: "2026-02-15",
            type: "Sick Leave",
            reason: "Seasonal Flu",
            status: "Approved"
        },
        {
            id: 3,
            name: "Varshith",
            duration: "4 Days",
            startDate: "2026-01-20",
            endDate: "2026-01-23",
            type: "Compassionate Leave",
            reason: "Family Emergency",
            status: "Approved"
        },
        {
            id: 4,
            name: "Varshith",
            duration: "0.5 Day",
            startDate: "2025-12-10",
            endDate: "2025-12-10",
            type: "Annual Leave",
            reason: "Routine Medical Checkup",
            status: "Rejected"
        },
        {
            id: 5,
            name: "Varshith",
            duration: "3 Days",
            startDate: "2025-11-05",
            endDate: "2025-11-07",
            type: "Annual Leave",
            reason: "Attending Agriculture Workshop",
            status: "Approved"
        }
        ];

    const tableHeaders = [
        "Name(s)",
        "Duration(s)",
        "Start Date",
        "End Date",
        "Type",
        "Reason(s)",
        "Actions"
        ];
        
    let isBg = true;
    return (
        <div className="bg-blue-200/60 px-7 py-9">
            <div className="bg-white px-5 py-4">
                <BreadCrumb currentUrl={currentUrl} />
            </div>
            <div className="bg-white mt-5 px-8 py-9">
                <h1><img src="/User/Dashboard/book-open.png" alt="openbook" width="20px" className="inline me-3"/>Leave Application</h1>
                <div className="flex gap-x-4 mt-5">
                    {leaveData.map((leaveType) => (
                        <div key={leaveType.id} className="basis-1/4 flex items-center bg-navyblue py-10 ps-3 gap-5 rounded-xl">
                            <h1 className="text-4xl text-navyblue p-5 font-bold rounded-full bg-white ">{leaveType.balance}</h1>
                            <div className="basis-2/3">
                                <h2 className="text-white text-1xl mb-2">{leaveType.title}</h2>
                                <Link href={leaveType.link} className="bg-yellow-400 text-black px-9 py-2 rounded-full">Apply</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-2xl">Leave History</h2>
                        <div>
                            <i className="fa-solid fa-filter me-7"></i>
                            <button className="text-white bg-green-700 px-7 py-2 rounded-xl">Export <i className="fa-solid fa-eye ms-3"></i></button>
                        </div>
                    </div>
                    <table className="w-full mt-2 ">
                        <thead className="bg-blue-200/60">
                            <tr>
                                {tableHeaders.map((header) => (
                                    <th key={header} className="py-3">{header}</th>
                                ))}                            
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                leaveHistory.map((leave) => (
                                    <tr className={isBg?"bg-blue-200/60":""} key={leave.id}>
                                        <td>{leave.name}</td>
                                        <td>{leave.duration}</td>
                                        <td>{leave.startDate}</td>
                                        <td>{leave.endDate}</td>
                                        <td>{leave.type}</td>
                                        <td>{leave.reason}</td>
                                        <td className="py-2"><button className="bg-navyblue px-5 py-2 text-white rounded-md">Actions <i className="fa-solid fa-angle-down"></i></button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Applyleave;