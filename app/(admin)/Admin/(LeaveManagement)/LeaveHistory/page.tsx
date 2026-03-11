function LeaveHistory() {
    const leaveHistoryHeaders = [
        "Name(s)",
        "Duration(s)",
        "Start Date",
        "End Date",
        "Type",
        "Reason(s)",
        "Actions"
    ];
    const leaveHistory = [
        {
            id: 1,
            employeeName: "John Steven Doe",
            duration: 5,
            startDate: "2022-04-22",
            endDate: "2022-04-28",
            type: "Sick",
            reason: "Personal"
        },
        {
            id: 2,
            employeeName: "Barry Jhayson",
            duration: 7,
            startDate: "2022-04-22",
            endDate: "2022-04-30",
            type: "Exam",
            reason: "Examination"
        },
        {
            id: 3,
            employeeName: "Tiwa Cavage",
            duration: 120,
            startDate: "2022-04-22",
            endDate: "2022-06-28",
            type: "Maternity",
            reason: "Child Care"
        },
        {
            id: 4,
            employeeName: "John Steven Doe",
            duration: 5,
            startDate: "2022-04-22",
            endDate: "2022-04-28",
            type: "Sick",
            reason: "Personal"
        },
        {
            id: 5,
            employeeName: "John Steven Doe",
            duration: 5,
            startDate: "2022-04-22",
            endDate: "2022-04-28",
            type: "Sick",
            reason: "Personal"
        },
        {
            id: 6,
            employeeName: "John Steven Doe",
            duration: 5,
            startDate: "2022-04-22",
            endDate: "2022-04-28",
            type: "Sick",
            reason: "Personal"
        },
        {
            id: 7,
            employeeName: "John Steven Doe",
            duration: 5,
            startDate: "2022-04-22",
            endDate: "2022-04-28",
            type: "Sick",
            reason: "Personal"
        }
    ];
    return (
        <div className="bg-white mt-5 p-4 rounded-lg font-bold">
            <div className="flex justify-between px-4">
                <h2 className="font-bold text-2xl">Leave History</h2>
                <div>
                    <i className="fa-solid fa-filter me-7"></i>
                    <button className="text-white bg-green-700 px-7 py-2 rounded-xl">Export <i className="fa-solid fa-eye ms-3"></i></button>
                </div>
            </div>
            <table className="w-full text-left mt-4 text-sm">
                <thead>
                    <tr>
                        {leaveHistoryHeaders.map((header)=>(
                                <th key={header} className="pb-2">{header}</th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {leaveHistory.map((leaveRow) => (
                        <tr key={leaveRow.id}>
                            <td>{leaveRow.employeeName}</td>
                            <td>{leaveRow.duration}</td>
                            <td>{leaveRow.startDate}</td>
                            <td>{leaveRow.endDate}</td>
                            <td>{leaveRow.type}</td>
                            <td>{leaveRow.reason}</td>
                            <td className="py-1">
                                <select name="action" id="action" className="bg-navyblue rounded-md text-white text-center py-2 w-full">
                                    <option value="approve">Approve</option>
                                    <option value="decline">Decline</option>
                                    <option value="view-details">View Details</option>
                                    <option value="extension">Extension</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LeaveHistory;