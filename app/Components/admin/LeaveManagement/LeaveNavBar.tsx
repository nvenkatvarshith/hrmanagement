import Link from "next/link";

function LeaveNavBar(){
const leaveManage = [
        {
            name: "Leave Settings",
            link: "/Admin/LeaveSettings"
        },
        {
            name: "Leave Recall",
            link: "/Admin/LeaveRecall"
        },
        {
            name: "Leave History",
            link: "/Admin/LeaveHistory"
        },
        {
            name: "Relief Officers",
            link: "/Admin/ReliefOfficers"
        }
    ];

    return (
        <div>
            <h1><img src="/User/Dashboard/book-open.png" alt="openbook" width="20px" className="inline me-3"/>Leave Management</h1>
            <div className="mt-2 flex gap-4">
                {leaveManage.map((leaveSetting) => {
                    return (
                        <Link href={leaveSetting.link} key={leaveSetting.name} className="bg-navyblue py-3 rounded-lg text-center text-white basis-1/4">{leaveSetting.name}</Link>
                    )
                })}
            </div>
            
        </div>
    )
}

export default LeaveNavBar;
