import Link from "next/link";
function Dashboard(){
    const actionButtons = [
        { name: 'Apply for Leave', link: 'apply-leave' },
        { name: 'KPI Goals', link: 'kpi-goals' },
        { name: 'Take Appraisal', link: 'take-appraisal' },
        { name: 'View Payslip', link: 'view-payslip' },
        { name: 'Update Profile', link: 'update-profile' },
        { name: 'Events', link: 'events' }
    ];

    return (
        <div className="bg-blue-200/60 px-7 py-9">   
            <h4 className="text-navyblue font-bold">Dashboard</h4>
            <div className="bg-navyblue px-6 py-12 mt-3 rounded-md flex items-center">
                <i className="fa-solid fa-user text-7xl border px-3 py-2 rounded-full text-white"></i>
                <div className="text-white ms-3">
                    <h1 className="text-4xl">John Doe</h1>
                    <h3>UI/UX Designer & UX Writer</h3>
                </div>
                <button className="bg-yellow-500 rounded-lg px-6 py-3 ms-10">Edit Profile</button>
            </div>
            <h3 className="text-navyblue mt-4 text-1xl font-bold">Quick Actions</h3>
            <div className="flex mt-2 text-navyblue font-semibold gap-x-10">
                {actionButtons.map((action) => (
                    <Link key={action.name} href={`/User/${action.link}`} className={`rounded-full bg-white px-4 py-1 shadow-xl text-center basis-1/${actionButtons.length}`}>{action.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default Dashboard;