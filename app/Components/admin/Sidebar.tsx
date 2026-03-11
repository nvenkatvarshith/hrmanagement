import Link from "next/link";

function Sidebar() {
    const sidebarNav = [
        {
            section: "Features",
            items: [
                { name: "Dashboard", icon: "fa-solid fa-house", link: "/Admin/Dashboard", active: true },
                { name: "Messages", icon: "fa-solid fa-envelope", link: "/messages", badge: 13 }
            ]
        },
        {
            section: "Recruitment",
            items: [
                { name: "Jobs", icon: "fa-solid fa-briefcase", link: "/jobs" },
                { name: "Candidates", icon: "fa-solid fa-users", link: "/candidates" },
                { name: "Resumes", icon: "fa-solid fa-file-lines", link: "/resumes" }
            ]
        },
        {
            section: "Organization",
            items: [
                { name: "Employee Management", icon: "fa-solid fa-user", link: "/employees" },
                { name: "Leave Management", icon: "fa-solid fa-book-open", link: "/Admin/Leave" },
                { name: "Performance Management", icon: "fa-solid fa-scale-balanced", link: "/performance" }
            ]
        },
        {
            section: "KRIS Pay",
            items: [
                { name: "Payroll Management", icon: "fa-solid fa-money-bill-1", link: "/payroll" }
            ]
        }
    ];

    return (
        <div className="bg-indigo-900 text-white pb-4 px-2">
            <img src="/kris-logo.png" alt="logo" width="200px" className="ms-3 pt-3" />
            <div className="flex justify-center items-center my-3">
                <i className="fa-solid fa-user basis-1/3 text-5xl"></i>
                <div className="basis-2/3">
                    <h1 className="text-2xl">KRIS Admin</h1>
                    <h5>Admin</h5>
                </div>
            </div>
            {sidebarNav.map((section) => {
                return (
                    <div className="ps-4 mt-3" key={section.section}>
                        <h3>{section.section}</h3>
                        {section.items.map((navitem) => {
                            return (
                                <Link href={navitem.link} key={navitem.name}>
                                    <div className="ps-2 text-[16px] py-1 mt-1">
                                        <i className={navitem.icon}></i>
                                        <span className="ms-3">{navitem.name}</span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                )
            })}
            <button className="w-full bg-red-700 rounded-xl mt-2 py-2"><i className="fa-solid fa-right-from-bracket me-2"></i>Log Out</button>
        </div>
    )
}

export default Sidebar;