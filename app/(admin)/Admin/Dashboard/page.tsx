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
                <div className="bg-white p-3 rounded-lg">
                    <h1 className="font-bold">Applied Jobs</h1>
                    <div className="px-2 mt-2">
                        {appliedJobs.map((job) => {
                            return (
                                <div className="flex justify-between items-center mb-2 bg-blue-200/60 rounded-lg p-2" key={job.id}>
                                    <div className="flex items-center">
                                        <img src={job.logoPath} />
                                        <div className="ms-2">
                                            <h1 className="font-bold">{job.jobTitle}</h1>
                                            <h3 className="text-sm">{job.companyName}</h3>
                                        </div>
                                    </div>
                                    <div className="text-sm">
                                        <p className="text-gray-500">{job.timePosted}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="bg-white p-3 rounded-lg">
                    <h1 className="font-bold">Employees</h1>
                    <div className="px-2 mt-2">
                        {employeesList.map((employee) => {
                            return (
                                <div className="flex justify-between items-center mb-2 bg-blue-200/60 rounded-lg p-2">
                                    <div className="flex items-center">
                                        <img src={employee.avatarColor} />
                                        <div className="ms-2">
                                            <h1 className="font-bold">{employee.employeeName}</h1>
                                            <h3 className="text-sm text-gray-500">Role: {employee.jobRole}</h3>
                                        </div>
                                    </div>
                                    <div className="text-sm">
                                        <span className="bg-green-700 p-2 rounded-lg"><i className="fa-solid fa-eye text-white"></i></span>
                                        <span className="bg-navyblue ms-2 p-2 rounded-lg"><i className="fa-solid fa-download text-white"></i></span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="bg-white p-3 rounded-lg">
                    <h1 className="font-bold">Candidates</h1>
                    <div className="px-2 mt-2">
                        {candidatesList.map((candidate) => {
                            return (
                                <div className="flex justify-between items-center mb-2 bg-blue-200/60 rounded-lg p-2">
                                    <div className="flex items-center">
                                        <img src={candidate.candidateName} />
                                        <div className="ms-2">
                                            <h1 className="font-bold">{candidate.candidateName}</h1>
                                            <h3 className="text-sm text-gray-500">Role: {candidate.applicationRole}</h3>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-x-3">
                                        <div className="text-center">
                                            <span className="text-sm">ATS Score(%)</span> <br />
                                            <span className={`${candidate.scoreColor} p-2 rounded-full text-white`}>{candidate.atsScore}</span>
                                        </div>
                                        <div className="text-center">
                                            <span className="text-sm">View</span> <br />
                                            <span className="bg-green-700 ms-2 p-2 rounded-2xl"><i className="fa-solid fa-eye text-white"></i></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="bg-white p-3 rounded-lg">
                    <h1 className="font-bold">April Payrolls</h1>
                    <div className="px-2 mt-2">
                        {payrollData.map((payroll) => {
                            return (
                                <div className="flex justify-between items-center mb-2 bg-blue-200/60 rounded-lg p-2">
                                    <div className="flex items-center">
                                        <img src={payroll.employeeName} />
                                        <div className="ms-2">
                                            <h1 className="font-bold">{payroll.employeeName}</h1>
                                            <h3 className="text-sm text-gray-500">{payroll.paymentDetail}</h3>
                                        </div>
                                    </div>
                                    <div className="text-sm">
                                        <span className={`w-66 h-2 ${payroll.barColor} p-1 rounded-xl`}>{payroll.status} {payroll.progress}%</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard;