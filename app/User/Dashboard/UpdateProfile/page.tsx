"use client"
import BreadCrumb from "@/app/Components/BreadCrumb";
import Contact from "@/app/Components/profile/Contact";
import Education from "@/app/Components/profile/Education";
import FamilyDetails from "@/app/Components/profile/FamilyDetails";
import Guarantor from "@/app/Components/profile/Guarantor";
import JobDetails from "@/app/Components/profile/JobDetails";
import Kin from "@/app/Components/profile/Kin";
import Personal from "@/app/Components/profile/Personal";
import Sidebarprofile from "@/app/Components/Sidebarprofile";
import { useState } from "react";

function UpdateProfile(){
    const currentUrl = "Dashboard/Update Profile";
    const [activeSection, setActiveSection] = useState("Personal Details");
    console.log(activeSection);
    const showProfileForm = () => {
        if(activeSection === "Personal Details"){
           return <Personal/>
        }else if(activeSection === "Contact Details"){
            return <Contact/>
        }else if(activeSection === "Next of kin Details"){
            return <Kin/>
        }else if(activeSection === "Education Qualifications"){
            return <Education/>
        }else if(activeSection === "Guarantor Details"){
            return <Guarantor/>
        }else if(activeSection === "Family Details"){
            return <FamilyDetails/>
        }else if(activeSection === "Job Details"){
            return <JobDetails/>
        }else{

        }
    }
    return (
        <div className="bg-blue-200/60 px-7 py-9">
            <div className="bg-white px-5 py-4">
                <BreadCrumb currentUrl={currentUrl} />
            </div>
            <div className="flex mt-5 gap-x-7">
                <div className="basis-1/3">
                    <Sidebarprofile setActiveSection={setActiveSection} />
                </div>
                <div className="basis-2/3 bg-white">
                    {
                        showProfileForm()
                    }
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile;