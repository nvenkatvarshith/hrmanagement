import Link from "next/link";

function PerformanceNavBar(){

    const actionButtons = [
        {
            name: "Target Setup",
            link: "TargetSetup"
        },
        {
            name: "Targets",
            link: "Targets"
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
        <div className="px-7">
            <h4 className="text-navyblue font-bold">Performance Management</h4>
            <div className="flex mt-3 text-navyblue font-semibold gap-x-10">
                {actionButtons.map((action) => (
                    <Link key={action.name} href={`${action.link}`} className={`rounded-full bg-white px-4 py-2 shadow-xl text-center`} style={{flex:0.2}}>{action.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default PerformanceNavBar;