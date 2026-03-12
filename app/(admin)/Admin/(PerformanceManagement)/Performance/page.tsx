"use client"

import Link from "next/link";

function PerformanceManagement() {
    const actionButtons = [
        {
            name: "Target Setup",
            link: "/target-setup"
        },
        {
            name: "Targets",
            link: "/targets"
        },
        {
            name: "Appraisals",
            link: "/appraisals"
        },
        {
            name: "Settings",
            link: "/settings"
        },
        {
            name: "Reports",
            link: "/reports"
        }
    ];

    return (
        <div className="mt-6 bg-navyblue rounded-lg items-center px-10 py-7 text-white flex">
            <div className="basis-1/2">
                <p className="text-5xl">Stay Updated on <br /><span className="text-yellow-500">Employees KPI’s</span></p>
            </div>
            <div className="basis-1/2">
                <img src="/Admin/PerformanceManagement/performance.png" alt="leave" width="500px"/>
            </div>
        </div>
    )
}

export default PerformanceManagement