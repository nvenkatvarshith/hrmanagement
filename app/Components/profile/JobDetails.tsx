import Link from "next/link";
import { useState } from "react";
import UploadJobDoc from "./UploadJobDoc";
import ViewDoc from "./ViewDoc";
function JobDetails(){
    const [currentView, setCurrentView] = useState("details");
    const job = {
        "job_role": "UI UX Designer",
        "department": "Design & Marketing",
        "line_manager": "Mr Domino's Pizza",
        "job_description": {
            "responsibilities": [
            "Creating user-centered designs by understanding business requirements, and user feedback",
            "Creating user flows, wireframes, prototypes and mockups",
            "Translating requirements into style guides, design systems, design patterns and attractive user interfaces",
            "Designing UI elements such as input controls, navigational components and informational components",
            "Creating original graphic designs (e.g. images, sketches and tables)",
            "Identifying and troubleshooting UX problems (e.g. responsiveness)",
            "Collaborating effectively with product, engineering, and management teams",
            "Incorporating customer feedback, usage metrics, and usability findings into design in order to enhance user experience"
            ]
        }
    }
    if(currentView === "details"){
        return (
            <div className="px-7 py-5 font-bold">
                <Link href="">View Job Details</Link>
                <div className="text-center">
                    <h3>Job Role</h3>
                    <h3 className="text-2xl mt-2">{job.job_role}</h3>
                </div>
                <div className="flex mt-5 text-center">
                    <div className="basis-1/2">
                        <h3>Department</h3>
                        <h3 className="text-2xl mt-2">{job.department}</h3>
                    </div>
                    <div className="basis-1/2">
                        <h3>Line Manager</h3>
                        <h3 className="text-2xl mt-2">{job.line_manager}</h3>
                    </div>
                </div>
                <div className="mt-5"> 
                    <h3 className="text-center">Job Description</h3>
                    <div className="mt-3">
                        <h3 className="text-2xl">Your responsibilities will include:</h3>
                        <ul className="list-disc mt-2 ps-5">
                            {job.job_description.responsibilities.map((responsibility) => (
                                <li className="text-1xl" key={responsibility}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex gap-x-4 mt-4">
                    <button className="w-66 py-3 bg-navyblue text-white rounded-md cursor-pointer" onClick={() => setCurrentView("upload")}>Upload Documents</button>
                    <button className="w-66 py-3 border-3 border-green-600 text-green-600 cursor-pointer" onClick={() => setCurrentView("view")}>View Documents</button>
                </div>
            </div>
        )
    }else if(currentView === "upload"){
        return <UploadJobDoc />
    }else{
        return <ViewDoc />
    }
}

export default JobDetails;