import { useState } from "react";
import AcademicDetails from "./AcademicDetails";

interface AcademicRecord{
    id:number;
    institution: string;
    degree: string;
    duration: string;
}
function Education(){
    const educationData = {
        academicRecords: [
            {
                id:1,
                institution: "Leicester University",
                degree: "B.Sc in Computer Science",
                duration: "May 2014 - May 2018"
            },
            {
                id:2,
                institution: "English College",
                degree: "W.A.S.S.C.E",
                duration: "February 2006 - June 2012"
            }
        ],
        professionalQualifications: [
            {
                id:1,
                title: "CCNA Certification",
                provider: "New Horizons",
                duration: "May 2019 - September 2021"
            },
            {
                id:2,
                title: "Google UI / UX Certification",
                provider: "Google Inc.",
                duration: "September 2021 - September 2022"
            },
            {
                id:3,
                title: "Web Developer",
                provider: "Google Inc.",
                duration: "May 2019 - September 2021",
                description: "Collaborated with teammates to deliver valuable features meeting business and customer needs."
            }
        ]
        };
    
    const [currentEducation,setCurrentEducation] = useState<AcademicRecord>(educationData.academicRecords[0]);
    const [viewMode, setViewMode] = useState("list");

    const displayAcademicForm = (education:AcademicRecord) => {
        setCurrentEducation(education);
        setViewMode("form");
    }
    if(viewMode === "list"){
        return (
            <div className="px-7 py-5">
                <div>
                    <div className="flex justify-between mb-2">
                        <p className="mb-3 font-bold">Academic Records</p>
                        <button className="bg-green-700 px-9 py-1 text-white cursor-pointer">Add</button>
                    </div>
                    {educationData.academicRecords.map((record) => (
                        <div key={record.id} className="bg-blue-200/60 w-full px-5 py-3 rounded-xl mb-3 cursor-pointer" onClick={() => displayAcademicForm(record)}>
                            <p className="text-2xl">{record.institution}</p>
                            <p className="mt-2">{record.degree}{record.duration}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <p className="mb-3 font-bold">Professional Qualifications</p>
                        <button className="bg-green-700 px-9 py-1 text-white cursor-pointer">Add</button>
                    </div>
                    {educationData.professionalQualifications.map((qualification) => (
                        <div key={qualification.id} className="bg-blue-200/60 w-full px-5 py-3 rounded-xl mb-3">
                            <p className="text-2xl">{qualification.title}</p>
                            <p className="mt-2">{qualification.provider}{qualification.duration}</p>
                            <p>{qualification.description}</p>
                        </div>
                    ))}
                </div>
    
            </div>
        )
    }else{
       return <AcademicDetails currentEducation = {currentEducation} />
    }
}

export default Education;