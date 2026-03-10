"use client"
import { useState } from "react";
import GuarantorForm from "./GuarantorForm";

interface guarantor{
    id: number;
    name: string;
    role: string;
    company: string;
    phoneNumber: string;
}
function Guarantor(){
    const guarantorData = [
        {
            id: 1,
            name: "Mr Johnnie Walker Deep",
            role: "Head of Design Team",
            company: "Microsoft Inc",
            phoneNumber: "090 500 500 6000"
        },
        {
            id: 2,
            name: "Miss Walkie Talkie",
            role: "Human Resources Manager",
            company: "Apple Inc",
            phoneNumber: "090 400 400 4848"
        }
    ];
    const [currentGuarantor,setCurrentGuarantor] = useState<guarantor>(guarantorData[0]);
    const [viewMode, setViewMode] = useState("list");
    
    const displayGuarantorForm = (guarantor:guarantor) => {
        setCurrentGuarantor(guarantor);
        setViewMode("form");
    }
    if(viewMode === "list"){
        return (
            <div className="px-7 py-5">
                <div>
                    <div className="flex justify-between mb-2">
                        <p className="mb-3 font-bold">Guarantor Details</p>
                        <button className="bg-green-700 px-9 py-1 text-white cursor-pointer">Add</button>
                    </div>
                    {guarantorData.map((guarantor) => (
                        <div key={guarantor.id} className="bg-blue-200/60 w-full px-5 py-3 rounded-xl mb-3 cursor-pointer" onClick={() => displayGuarantorForm(guarantor)}>
                            <p className="text-2xl">{guarantor.name}</p>
                            <p className="mt-2">{guarantor.role},<span className="mx-2">{guarantor.company}</span>- {guarantor.phoneNumber}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }else{
       return <GuarantorForm currentGuarantor = {currentGuarantor} />
    }
}

export default Guarantor;