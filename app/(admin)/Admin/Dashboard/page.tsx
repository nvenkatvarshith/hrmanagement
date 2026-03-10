"use client"

import Sidebar from "@/app/Components/admin/Sidebar";

function Dashboard(){

    return (
        <div className="flex">
            <div className="basis-1/4">
                <Sidebar />
            </div>
            <div className="basis-3/4">

            </div>
        </div>
    )
}

export default Dashboard;