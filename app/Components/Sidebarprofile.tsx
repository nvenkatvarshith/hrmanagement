"use client"
interface SidebarProps{
    setActiveSection:Function;
}
function Sidebarprofile(props:SidebarProps){ 
    const categories = [
        "Personal Details",
        "Contact Details",
        "Next of kin Details",
        "Education Qualifications",
        "Guarantor Details",
        "Family Details",
        "Job Details",
        "Financial Details"
        ];
    const {setActiveSection} = props;
    
    return (
        <div className="w-full bg-white p-5">
            {categories.map((category)=>{
                return (
                    <div key={category} onClick={() => setActiveSection(category)} className="text-center cursor-pointer bg-blue-200/60 font-bold rounded-xl mb-3 py-3">{category}</div>
                )
            })}
        </div>
    )
}

export default Sidebarprofile;