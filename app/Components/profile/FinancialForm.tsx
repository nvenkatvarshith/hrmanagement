interface FinanceData{
    id: number;
    accountNumber: string;
    accountName: string;
    bankName: string;
    accountType: string;
}

interface FinancialProps{
    currentfinance: FinanceData;
}

function FinancialForm(props:FinancialProps){
    const {currentfinance} = props;

    return (
        <div className="px-7 py-5">
            <h1>Financial Details</h1>
            <form className="mt-4">
                <div>
                    <label htmlFor="bankname">Bank Name</label> <br />
                    <input type="text" name="bankname" id="bankname" defaultValue={currentfinance.bankName} className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                </div>
                <div className="mt-4 flex gap-x-8">
                    <div className="basis-1/2">
                        <label htmlFor="accountno">Account No</label> <br />
                        <input type="text" name="accountno" id="accountno" defaultValue={currentfinance.accountNumber} className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                    <div className="basis-1/2">
                        <label htmlFor="accountname">Account Name</label> <br />
                        <input type="text" name="accountname" id="accountname" defaultValue={currentfinance.accountName} className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                </div>
                <div className="mt-4 flex gap-x-8">
                    <div className="basis-1/2">
                        <label htmlFor="registeredwith">Registered with</label> <br />
                        <input type="text" name="registeredwith" id="registeredwith" defaultValue={currentfinance.accountType} className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                    <div className="basis-1/2">
                        <label htmlFor="pensionnumber">Pension Number</label> <br />
                        <input type="text" name="pensionnumber" id="pensionnumber" defaultValue={currentfinance.accountNumber} className="bg-blue-200/60 mt-2 w-full py-2 px-2" />
                    </div>
                </div>
                <button className="w-66 bg-green-700 text-white py-3 mt-5 rounded-xl">Update Account Details</button>
            </form>
        </div>
    )
}

export default FinancialForm;