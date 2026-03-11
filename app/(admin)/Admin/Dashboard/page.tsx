"use client"

function Dashboard() {
    const dashboardStats = [
        {
            id: 1,
            label: "Messages",
            count: 138,
            color: "#FFC107",
            iconClass: "fa-solid fa-envelope"
        },
        {
            id: 2,
            label: "Jobs",
            count: 50,
            color: "#283593",
            iconClass: "fa-solid fa-briefcase"
        },
        {
            id: 3,
            label: "Candidates",
            count: 100,
            color: "#388E3C",
            iconClass: "fa-solid fa-users"
        },
        {
            id: 4,
            label: "Resumes",
            count: 50,
            color: "#212121",
            iconClass: "fa-solid fa-file-lines"
        },
        {
            id: 5,
            label: "Employees",
            count: 200,
            color: "#FFB300",
            iconClass: "fa-solid fa-user"
        },
        {
            id: 6,
            label: "Leaves",
            count: 20,
            color: "#283593",
            iconClass: "fa-solid fa-book-open"
        },
        {
            id: 7,
            label: "Payrolls",
            count: 200,
            color: "#388E3C",
            iconClass: "fa-solid fa-money-bill-wave"
        }
    ];
    const appliedJobs = [
        {
            id: 1,
            jobTitle: "Sales Executive",
            companyName: "Access Bank",
            timePosted: "20mins ago",
            logoPath: "/logos/access-bank.png"
        },
        {
            id: 2,
            jobTitle: "User Experience Designer",
            companyName: "Paystack",
            timePosted: "10mins ago",
            logoPath: "/logos/paystack.png"
        },
        {
            id: 3,
            jobTitle: "Product Manager",
            companyName: "T-Pay",
            timePosted: "5mins ago",
            logoPath: "/logos/tpay.png"
        }
    ];
    const employeesList = [
        {
            id: 1,
            employeeName: "John Doe",
            jobRole: "Product Manager",
            avatarColor: "bg-yellow-500"
        },
        {
            id: 2,
            employeeName: "Ginna Loe",
            jobRole: "Sales Executive",
            avatarColor: "bg-cyan-500"
        },
        {
            id: 3,
            employeeName: "John Dore",
            jobRole: "UI UX Designer",
            avatarColor: "bg-red-500"
        }
    ];
    const candidatesList = [
        {
            id: 1,
            candidateName: "John Doe",
            applicationRole: "Applied for : Product Manager",
            atsScore: 80,
            scoreColor: "bg-blue-500"
        },
        {
            id: 2,
            candidateName: "Ginna Loe",
            applicationRole: "Applied for : Sales Executive",
            atsScore: 30,
            scoreColor: "bg-red-500"
        },
        {
            id: 3,
            candidateName: "James Foe",
            applicationRole: "Applied for : Product Manager",
            atsScore: 80,
            scoreColor: "bg-blue-500"
        }
    ];
    const payrollData = [
        {
            id: 1,
            employeeName: "John Doe",
            paymentDetail: "Salary Amount : N500,000",
            status: "Paid",
            progress: 100,
            barColor: "bg-green-700"
        },
        {
            id: 2,
            employeeName: "Ginna Loe",
            paymentDetail: "Salary Amount : N150,000",
            status: "Processing",
            progress: 40,
            barColor: "bg-yellow-500"
        },
        {
            id: 3,
            employeeName: "James Foe",
            paymentDetail: "Applied for : Product Manager",
            status: "Processing",
            progress: 40,
            barColor: "bg-yellow-500"
        }
    ];
    return (
        <div className="px-10 py-7">
            <p className="text-1xl font-bold">Dashboard</p>
            <div className="flex gap-x-3 overflow-auto text-white mt-3">
                {dashboardStats.map((stat) => {
                    return (
                        <div className="basis-1/4 rounded-lg" style={{ backgroundColor: stat.color }} key={stat.id}>
                            <div className="flex items-center p-2 gap-x-3">
                                <i className={`${stat.iconClass} text-4xl`}></i>
                                <div className="text-center">
                                    <p className="text-2xl">{stat.count}</p>
                                    <p className="text-1xl">{stat.label}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="grid grid-cols-2 mt-4 gap-2">

            </div>
        </div>
    )
}

export default Dashboard;