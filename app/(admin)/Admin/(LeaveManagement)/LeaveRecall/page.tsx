"use client"
import RecallForm from "@/app/Components/admin/LeaveManagement/RecallForm";
import { useState } from "react";

interface Leave{
    id: number;
    employeeName: string;
    duration: number;
    startDate: string;
    endDate: string;
    type: string;
    reason: string;
    status: string;
}

function LeaveRecall() {
    const ongoingHeaders = ["Name(s)", "Duration(s)", "Start Date", "End Date", "Type", "Reason(s)", "Actions"];
    const ongoingLeaves = [
        {
            id: 1,
            employeeName: "John Steven Doe",
            duration: 5,
            startDate: "2022-04-22",
            endDate: "2022-04-28",
            type: "Casual",
            reason: "Personal",
            status: "Ongoing"
        },
        {
            id: 2,
            employeeName: "Barry Jhayson",
            duration: 7,
            startDate: "2022-04-22",
            endDate: "2022-04-30",
            type: "Casual",
            reason: "Personal",
            status: "Ongoing"
        },
        {
            id: 3,
            employeeName: "Tiwa Cavage",
            duration: 7,
            startDate: "2022-04-22",
            endDate: "2022-06-28",
            type: "Casual",
            reason: "Personal",
            status: "Ongoing"
        },
        {
            id: 4,
            employeeName: "John Steven Doe",
            duration: 5,
            startDate: "2022-04-22",
            endDate: "2022-04-28",
            type: "Casual",
            reason: "Personal",
            status: "Ongoing"
        },
        {
            id: 5,
            employeeName: "John Steven Doe",
            duration: 5,
            startDate: "2022-04-22",
            endDate: "2022-04-28",
            type: "Casual",
            reason: "Personal",
            status: "Ongoing"
        },
        {
            id: 6,
            employeeName: "John Steven Doe",
            duration: 5,
            startDate: "2022-04-22",
            endDate: "2022-04-28",
            type: "Casual",
            reason: "Personal",
            status: "Ongoing"
        },
        {
            id: 7,
            employeeName: "John Steven Doe",
            duration: 5,
            startDate: "2022-04-22",
            endDate: "2022-04-28",
            type: "Casual",
            reason: "Personal",
            status: "Ongoing"
        }
    ];
    const [showRecallForm, setShowRecallForm] = useState(false);
    const [currentLeave, setCurrentLeave] = useState<Leave>(ongoingLeaves[0]);
    return (
        <div className="bg-white mt-5 p-4 rounded-lg font-bold">
            {showRecallForm && <RecallForm currentLeave={currentLeave} />}
            <p className="text-1xl ps-2">Ongoing Leave Applications</p>
            <table className="w-full text-left mt-4 text-sm">
                <thead>
                    <tr>
                        {ongoingHeaders.map((header)=>(
                                <th key={header}>{header}</th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {ongoingLeaves.map((leaveRow) => (
                        <tr key={leaveRow.id}>
                            <td>{leaveRow.employeeName}</td>
                            <td>{leaveRow.duration}</td>
                            <td>{leaveRow.startDate}</td>
                            <td>{leaveRow.endDate}</td>
                            <td>{leaveRow.type}</td>
                            <td>{leaveRow.reason}</td>
                            <td className="py-1"><button className="bg-red-600 rounded-md cursor-pointer text-white py-2 w-full" onClick={() => {setCurrentLeave(leaveRow);setShowRecallForm(true)}}>Recall</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default LeaveRecall;