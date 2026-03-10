function UploadJobDoc(){

    return (
        <div className="px-7 py-5 font-bold">
            <h1>Job Details / Upload Documents</h1>
            <div className="mt-6 ps-3">
                <label htmlFor="offerletter">Upload Offer Letter</label>
                <input type="file" name="offerletter" id="offerletter" className="bg-blue-200/60 w-full py-3 px-2 mt-2 rounded-md" />
            </div>
            <div className="mt-4 ps-3">
                <label htmlFor="nysc">Upload NYSC Certificate</label>
                <input type="file" name="nysc" id="nysc" className="bg-blue-200/60 w-full py-3 px-2 mt-2 rounded-md" />
            </div>
            <div className="mt-4 ps-3">
                <label htmlFor="guarantor">Upload Guarantor’s Form</label>
                <input type="file" name="guarantor" id="guarantor" className="bg-blue-200/60 w-full py-3 px-2 mt-2 rounded-md" />
            </div>
            <div className="mt-4 ps-3">
                <label htmlFor="degree">Upload Degree Certificate</label>
                <input type="file" name="degree" id="degree" className="bg-blue-200/60 w-full py-3 px-2 mt-2 rounded-md" />
            </div>
            <div className="mt-4 ps-3">
                <label htmlFor="birth">Upload Birth Certificate</label>
                <input type="file" name="birth" id="birth" className="bg-blue-200/60 w-full py-3 px-2 mt-2 rounded-md" />
            </div>
            <div className="text-center">
                <button className="w-66 py-3 bg-navyblue text-white rounded-md mt-5">Upload Documents</button>
            </div>
        </div>
    )
}

export default UploadJobDoc