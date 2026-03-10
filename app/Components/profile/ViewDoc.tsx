function ViewDoc(){
    const documentList = [
        {
            name: "Signed Offer Letter.pdf",
            link: "/documents/signed-offer-letter.pdf"
        },
        {
            name: "NYSC Certificate.pdf",
            link: "/documents/nysc-certificate.pdf"
        },
        {
            name: "Guarantor's Form.pdf",
            link: "/documents/guarantors-form.pdf"
        },
        {
            name: "Degree Certificate.pdf",
            link: "/documents/degree-certificate.pdf"
        },
        {
            name: "John Doe CV.pdf",
            link: "/documents/john-doe-cv.pdf"
        },
        {
            name: "Birth Certificate.pdf",
            link: "/documents/birth-certificate.pdf"
        }
    ];
    return (
        <div className="px-7 py-5">
            <h1 className="font-bold">Job Details / View Documents</h1>
            <div className="grid grid-cols-3 gap-4 mt-5">
                {documentList.map((document) => (
                    <div key={document.name} className="bg-blue-200/60 px-4 py-2 text-center">
                        <i className="fa-solid fa-file-pdf text-7xl"></i>
                        <h2 className="mt-4 font-bold">{document.name}</h2>
                    </div>
                ))}
            </div>
            <div className="text-center mt-5">
                <button className="bg-green-700 w-66 py-3 text-white rounded-md cursor-pointer">Download ALL (Zip)</button>
            </div>
        </div>
    )
}

export default ViewDoc;