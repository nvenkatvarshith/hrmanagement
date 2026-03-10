import { useState } from "react";
import FinancialForm from "./FinancialForm";

interface FinanceData{
    id: number;
    accountNumber: string;
    accountName: string;
    bankName: string;
    accountType: string;
}
function FinancialDetails(){
    const financialData = [
        {
            id:1,
            accountNumber: "0001100101",
            accountName: "John Doe",
            bankName: "GTBank",
            accountType: "Savings Account"
        },
        {
            id:2,
            accountNumber: "0001100101",
            accountName: "Doe Johnn",
            bankName: "GTBank",
            accountType: "Savings Account"
        }
    ];
    const [currentfinance,setCurrentFinance] = useState<FinanceData>(financialData[0]);
    const [viewMode, setViewMode] = useState("list");
    
    const displayFinancialForm = (finance:FinanceData) => {
        setCurrentFinance(finance);
        setViewMode("form");
    }
    if(viewMode === "list"){
        return (
            <div className="px-7 py-5">
                <div>
                    <div className="flex justify-between mb-2">
                        <p className="mb-3 font-bold">Financial Details</p>
                        <button className="bg-green-700 px-9 py-1 text-white cursor-pointer">Add</button>
                    </div>
                    {financialData.map((finance) => (
                        <div key={finance.id} className="bg-blue-200/60 w-full px-5 py-3 rounded-xl mb-3 cursor-pointer" onClick={() => displayFinancialForm(finance)}>
                            <p className="text-2xl">{finance.accountNumber} | {finance.accountName}</p>
                            <p className="mt-2">{finance.bankName} | {finance.accountType}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }else{
       return <FinancialForm currentfinance = {currentfinance} />
    }
}

export default FinancialDetails;