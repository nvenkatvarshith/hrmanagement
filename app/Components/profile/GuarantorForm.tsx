"use client"
interface Guarantor{
    id: number;
    name: string;
    role: string;
    company: string;
    phoneNumber: string;
}

interface GuarantorProps{
    currentGuarantor: Guarantor;
}

function GuarantorForm(props:GuarantorProps){
    const {currentGuarantor} = props;

    return (
        <div className="px-7 py-5">
            <h1>View Guarantor Details</h1>
            <form className="mt-4">
                <div>
                    <label htmlFor="name">Guarantor’s Name</label> <br />
                    <input type="text" name="name" id="name" defaultValue={currentGuarantor.name} className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                </div>
                <div className="mt-4">
                    <label htmlFor="job">Job title / Occupation</label> <br />
                    <input type="text" name="job" id="job" defaultValue={currentGuarantor.company} className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                </div>
                <div className="mt-4">
                    <label htmlFor="phoneno">Phone No</label> <br />
                    <input type="text" name="phoneno" id="phoneno" defaultValue={currentGuarantor.phoneNumber} className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                </div>
                <button className="w-66 bg-green-700 text-white py-3 mt-5 rounded-xl">Update</button>
            </form>
        </div>
    )
}

export default GuarantorForm;