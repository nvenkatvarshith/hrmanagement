function ReliefOfficers(){
    const leaveSettings = [
        {
            id: 1,
            leavePlan: "Maternity",
            durationDays: 60,
            recall: false,
            autoRenew: false,
        },
        {
            id: 2,
            leavePlan: "Sick",
            durationDays: 14,
            recall: false,
            autoRenew: true,
        },
        {
            id: 3,
            leavePlan: "Compassionate",
            durationDays: 30,
            recall: false,
            autoRenew: false,
        },
        {
            id: 4,
            leavePlan: "Exam",
            durationDays: 20,
            recall: false,
            autoRenew: false,
        },
        {
            id: 5,
            leavePlan: "Paternity",
            durationDays: 60,
            recall: false,
            autoRenew: false,
        },
        {
            id: 6,
            leavePlan: "Casual",
            durationDays: 10,
            recall: true,
            autoRenew: false,
        }
    ];


    return (
        <div className="flex gap-x-2 mt-5 text-sm">
            <div className="basis-1/2 rounded-lg bg-white p-3">
                <p className="text-2xl font-bold">Create Relief Officers</p>
                <form>
                    <div className="flex column-gap-1 mt-2">
                        <div className="basis-1/2">
                            <label htmlFor="leave-plan">Leave Plan Name</label> <br />
                            <input type="text" placeholder="Maternity" name="leave-plan" id="leave-plan" className="bg-blue-200/60 px-3 py-2 mt-2 rounded-lg" />
                        </div>
                        <div className="basis-1/2">
                            <label htmlFor="duration">Duration (days)</label> <br />
                            <input type="number" placeholder="60" name="duration" id="duration" className="bg-blue-200/60 px-3 py-2 mt-2 rounded-lg" />
                        </div>
                    </div>
                    <div className="w-full rounded-lg mt-2">
                        <label htmlFor="leave-recall">Do you want to activate Leave Recall for this plan ?</label>
                        <select name="leave-recall" id="leave-recall" className="bg-blue-200/60 p-3 mt-2 rounded-lg w-full" >
                            <option value="select">Select option from dropdown</option>
                        </select>
                    </div>
                    <div className="flex column-gap-2 mt-2">
                        <div className="basis-1/2">
                            <label htmlFor="leave-bonus">Would you like to activate leave bonus</label> <br />
                            <select name="leave-bonus" id="leave-bonus" className="bg-blue-200/60 px-3 py-2 mt-2 rounded-lg text-sm" >
                                <option value="select">Select option from dropdown</option>
                            </select>
                        </div>
                        <div className="basis-1/2">
                            <label htmlFor="leave-percentage">How much percentage of leave bonus?</label> <br />
                            <input type="number" placeholder="Percentage (%)" name="leave-percentage" id="leave-percentage" className="bg-blue-200/60 px-3 py-2 mt-2 rounded-lg" />
                        </div>
                    </div>
                    <div className="w-full rounded-lg mt-2">
                        <label htmlFor="leave-allocation">Select Leave Allocation</label>
                        <select name="leave-allocation" id="leave-allocation" className="bg-blue-200/60 p-3 mt-2 rounded-lg w-full" >
                            <option value="select">Senior Level</option>
                        </select>
                    </div>
                    <div className="w-full rounded-lg mt-2">
                        <label htmlFor="reason-recall">Reason for Recall</label>
                        <textarea name="reason-recall" id="reason-recall" className="bg-blue-200/60 p-3 mt-2 rounded-lg w-full"></textarea>
                    </div>
                    <button className="bg-green-700 w-full rounded-lg text-white py-3 mt-3">Create</button>
                </form>
            </div>
            <div className="basis-1/2 rounded-lg p-3 font-bold bg-white">
                <p className="text-2xl">Manage Relief Officers</p>
                <table className="w-full text-center mt-3">
                    <thead>
                        <tr>
                            <th className="pb-2">Leave Plan</th>
                            <th className="pb-2">Duration(s)</th>
                            <th className="pb-2">Recall /Autorenew</th>
                            <th className="pb-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaveSettings.map((setting) => {
                            return (
                                <tr key={setting.id}>
                                    <td className="py-3">{setting.leavePlan}</td>
                                    <td className="py-3">{setting.durationDays}</td>
                                    <td className="py-3">{(setting.recall)?"Yes":"No"}/{setting.autoRenew?"Yes":"No"}</td>
                                    <td><select name="action" id="action" className="bg-navyblue text-white px-2 py-1 rounded-lg">
                                            <option value="select">Actions</option>
                                        </select></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReliefOfficers;