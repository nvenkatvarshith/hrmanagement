interface Family{
    id: number;
    name: string;
    relationship: string;
    phoneNo: string;
    address: string;
}

interface FamilyProps{
    currentFamily: Family;
}

function FamilyForm(props:FamilyProps){
    const {currentFamily} = props;
    return (
        <div className="px-7 py-5">
            <h1>View Family Details</h1>
            <form className="mt-4">
                <div>
                    <label htmlFor="name">Full Name</label> <br />
                    <input type="text" name="name" id="name" defaultValue={currentFamily.name} className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                </div>
                <div className="mt-4 flex gap-x-8">
                    <div className="basis-1/2">
                        <label htmlFor="relationship">Relationship</label> <br />
                        <input type="text" name="relationship" id="relationship" defaultValue={currentFamily.relationship} className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                    <div className="basis-1/2">
                        <label htmlFor="phoneno">Phone No</label> <br />
                        <input type="text" name="phoneno" id="phoneno" defaultValue={currentFamily.phoneNo} className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                </div>
                <div className="mt-3">
                    <label htmlFor="address">Address</label> <br />
                    <textarea name="address" id="address" defaultValue={currentFamily.address} className="bg-blue-200/60 mt-2 w-full py-2 px-2"></textarea>
                </div>
                <button className="w-66 bg-green-700 text-white py-3 mt-5 rounded-xl">Update</button>
            </form>
        </div>
    )
}

export default FamilyForm;