import { useState } from "react";
import FamilyForm from "./FamilyForm";

interface Family{
    id: number;
    name: string;
    relationship: string;
    phoneNo: string;
    address: string;
}

function FamilyDetails(){
    const familyData = [
       {
            id: 1,
            name: "Mr Johnnie Walker Deep",
            relationship: "Brother",
            phoneNo: "090 300 540 9888",
            address: "333 Adeniyi Street Victoria Island, Lagos"
        },
        {
            id: 2,
            name: "Mr Johnnie Walker Deep",
            relationship: "Brother",
            phoneNo: "090 300 540 9888",
            address: "333 Adeniyi Street Victoria Island, Lagos"
        }
    ];
    const [currentFamily,setCurrentFamily] = useState<Family>(familyData[0]);
    const [viewMode, setViewMode] = useState("list");
    
    const displayGuarantorForm = (family:Family) => {
        setCurrentFamily(family);
        setViewMode("form");
    }
    if(viewMode === "list"){
        return (
            <div className="px-7 py-5">
                <div>
                    <div className="flex justify-between mb-2">
                        <p className="mb-3 font-bold">Family Details</p>
                        <button className="bg-green-700 px-9 py-1 text-white cursor-pointer">Add</button>
                    </div>
                    {familyData.map((family) => (
                        <div key={family.id} className="bg-blue-200/60 w-full px-5 py-3 rounded-xl mb-3 cursor-pointer" onClick={() => displayGuarantorForm(family)}>
                            <p className="text-2xl">{family.name}</p>
                            <p className="mt-2">Relationship: {family.relationship} | Phone No: <span className="mx-2">{family.phoneNo}</span></p>
                            <p className="mt-2">Address: {family.address}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }else{
       return <FamilyForm currentFamily = {currentFamily} />
    }
}

export default FamilyDetails;