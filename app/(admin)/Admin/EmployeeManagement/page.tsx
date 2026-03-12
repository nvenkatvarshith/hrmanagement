import Link from "next/link";

function EmployeeManagement() {
    const headers = [
        "Name(s)",
        "Dept",
        "Job Title",
        "Start Date",
        "Category",
        "Gender",
        "Actions"
    ];
    const employees = [
        {
            name: "John Steven Doe",
            dept: "Design",
            jobTitle: "UI UX Designer",
            startDate: "28/04/2022",
            category: "Full time",
            gender: "Male"
        },
        {
            name: "Barry Jhayson",
            dept: "IT",
            jobTitle: "Backend Engineer",
            startDate: "28/04/2022",
            category: "Remote",
            gender: "Male"
        },
        {
            name: "Tiwa Cavage",
            dept: "Design",
            jobTitle: "UI UX Designer",
            startDate: "28/04/2022",
            category: "Full time",
            gender: "Female"
        },
        {
            name: "James IDK",
            dept: "Design",
            jobTitle: "UI UX Designer",
            startDate: "28/04/2022",
            category: "Full time",
            gender: "Male"
        },
        {
            name: "Vanessa Chidi",
            dept: "Design",
            jobTitle: "UI UX Designer",
            startDate: "28/04/2022",
            category: "Full time",
            gender: "Female"
        },
        {
            name: "Don Gorgon",
            dept: "Design",
            jobTitle: "UI UX Designer",
            startDate: "28/04/2022",
            category: "Full time",
            gender: "Male"
        },
        {
            name: "Sarah Wilson",
            dept: "Design",
            jobTitle: "UI UX Designer",
            startDate: "28/04/2022",
            category: "Full time",
            gender: "Female"
        }
    ];

    return (
        <div className="px-5 py-9">
            <h1 className="font-bold text-1xl">Dashboard / Employee Management</h1>
            <div className="bg-white mt-3 rounded-lg font-bold p-4">
                <div className="flex justify-between px-4 items-center">
                    <h2 className="font-bold text-1xl">Employee Management</h2>
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
                        {employees.map((employee) => (
                            <tr key={employee.name}>
                                <td>{employee.name}</td>
                                <td>{employee.dept}</td>
                                <td>{employee.jobTitle}</td>
                                <td>{employee.startDate}</td>
                                <td>{employee.category}</td>
                                <td>{employee.gender}</td>
                                <td className="py-1">
                                    <select name="action" id="action" className="bg-navyblue rounded-md text-white text-center py-2 w-full">
                                        <option value="select">Actions</option>
                                        <option value="view-profile"><Link href="">View Profile</Link></option>
                                        <option value="edit-profile">Edit Profile</option>
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

export default EmployeeManagement;