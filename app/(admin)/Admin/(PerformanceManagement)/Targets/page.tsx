"use client"
interface Target{
    id: number;
    name: string;
    title: string;
    kpiWeight: number;
    targetDate: string;
}
function Targets() {
    const headers = [
        "Name(s)",
        "Title(s)",
        "KPI Weight",
        "Target Date",
        "Actions"
    ];
    const kpiTargets = [
        {
            id:1,
            name: "Johnny Elton Camry",
            title: "Make 400 Billion Naira",
            kpiWeight: 5,
            targetDate: "01-Jan-2021 / 01-Jan-2022"
        },
        {
            id:2,
            name: "Johnny Elton Camry",
            title: "Develop KRACADA Campaign",
            kpiWeight: 4,
            targetDate: "01-Jan-2021 / 01-Jan-2022"
        },
        {
            id:3,
            name: "Johnny Elton Camry",
            title: "Make 400 Billion Naira",
            kpiWeight: 5,
            targetDate: "01-Jan-2021 / 01-Jan-2022"
        },
        {
            id:4,
            name: "Johnny Elton Camry",
            title: "Make 400 Billion Naira",
            kpiWeight: 5,
            targetDate: "01-Jan-2021 / 01-Jan-2022"
        },
        {
            id:5,
            name: "Johnny Elton Camry",
            title: "Make 400 Billion Naira",
            kpiWeight: 5,
            targetDate: "01-Jan-2021 / 01-Jan-2022"
        },
        {
            id:6,
            name: "Johnny Elton Camry",
            title: "Make 400 Billion Naira",
            kpiWeight: 5,
            targetDate: "01-Jan-2021 / 01-Jan-2022"
        },
        {
            id:7,
            name: "Johnny Elton Camry",
            title: "Make 400 Billion Naira",
            kpiWeight: 5,
            targetDate: "01-Jan-2021 / 01-Jan-2022"
        }
    ];

    const viewProfile = (target: Target) => {
        console.log(target);
    }

    return (
        <div className="px-5 py-3">
            <div className="bg-white mt-3 rounded-lg font-bold p-4">
                <div className="flex justify-between px-4 items-center">
                    <h2 className="font-bold text-1xl">Manage Targets</h2>
                    <div>
                        <i className="fa-solid fa-filter me-7"></i>
                        <button className="text-white bg-green-700 px-7 py-2 rounded-xl">Export <i className="fa-solid fa-eye ms-3"></i></button>
                    </div>
                </div>
                <table className="w-full text-left mt-4 text-sm">
                    <thead>
                        <tr>
                            {headers.map((header) => (
                                <th key={header} className="pb-2">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {kpiTargets.map((target) => (
                            <tr key={target.id}>
                                <td>{target.name}</td>
                                <td>{target.title}</td>
                                <td>{target.kpiWeight}</td>
                                <td>{target.targetDate}</td>
                                <td className="py-1">
                                    <select onChange={() => viewProfile(target)} name="action" id="action" className="bg-navyblue rounded-md text-white text-center py-2 w-full">
                                        <option value="select">Actions</option>
                                        <option value="edit-profile">Edit KPI Goals</option>
                                        <option value="view-profile">Initiate KPI</option>
                                        <option value="view-profile" className="text-red-700">Delete KPI</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Targets;