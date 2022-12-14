import FindProForm from "../FindProForm/FindProForm";

function FindPro() {



    return (
        <div className="flex justify-between h-full flex-col lg:flex-row ">
            <div className="bg-white border-2 border-r-black pt-10 lg:pt-20 w-full pb-10 lg:w-6/12">
                <h1 className="text-center text-xl lg:text-2xl font-bold py-6">Our Intake Process</h1>
                <div className=" flex justify-center items-center">
                    <div className=" text-sm lg:text-xl w-64 lg:w-5/6 text-center text-black">
                        <li className="py-2 text-lg">Provide your basic information to help us match you with a Financial Professional</li>
                        <li className="py-2 text-sm list-none italic ">Simplify the process by importing your current insurance information through Canopy Connect. Our professionals can get straight to work using this information to compare rates and give you the best pricing</li>
                        <a href="https://usecanopy.com/" className="text-xs text-slate-600 underline underline-offset-4 italic hover:text-blue-600">To find out more about Canopy Connect please click here</a>
                        <h3 className="font-semibold py-6">- OR -</h3>
                        <li className="text-lg"> Submit your basic information and one of our Financial Professionals will contact you to gather further details</li>
                    </div>
                </div>
            </div>
            
                <FindProForm/>
        
        </div>
    )

}

export default FindPro;
