
interface AcademicRecord{
    id:number;
    institution: string;
    degree: string;
    duration: string;
}

interface AcademicProps{
    currentEducation: AcademicRecord;
}

function AcademicDetails(props:AcademicProps){
    const {currentEducation} = props;
    return (
        <div className="px-7 py-5">
            <h1>Academic Records / Academic Details</h1>
            <form>
                <div className="mt-4 flex gap-x-8">
                    <div className="basis-1/2">
                        <label htmlFor="institution">Name of Institution</label> <br />
                        <input type="text" name="institution" id="institution" defaultValue={currentEducation.institution} className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                    <div className="basis-1/2">
                        <label htmlFor="department">Department</label> <br />
                        <input type="text" name="department" id="department" defaultValue={currentEducation.degree} className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                </div>
                <div className="mt-4 flex gap-x-8">
                    <div className="basis-1/2">
                        <label htmlFor="course">Course</label> <br />
                        <input type="text" name="course" id="course" defaultValue={currentEducation.degree} className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                    <div className="basis-1/2">
                        <label htmlFor="location">Location</label> <br />
                        <input type="text" name="location" id="location" defaultValue={currentEducation.degree} className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                </div>
                <div className="mt-3 flex gap-x-8">
                    <div className="basis-1/2">
                        <label htmlFor="startdate">Start Date</label> <br />
                        <input type="date" name="startdate" id="startdate" placeholder="" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                    <div className="basis-1/2">
                        <label htmlFor="enddate">End Date</label> <br />
                        <input type="date" name="enddate" id="enddate" className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                </div>
                <div className="mt-3">
                    <label htmlFor="description">Description</label> <br />
                    <textarea name="description" id="description" className="bg-blue-200/60 mt-2 w-full py-2 px-2"></textarea>
                </div>
                <button className="w-66 bg-green-700 text-white py-3 mt-5">Update</button>
            </form>
        </div>
    )
}

export default AcademicDetails;