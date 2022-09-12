import FindProForm from "../FindProForm/FindProForm";

function FindPro() {



    return (
        <div className="bg-stone-100 flex justify-between h-full flex-col lg:flex-row ">
            <div className="md:w-1/2 bg-blue-100 pt-20">
                <h1 className="text-center text-xl lg:text-2xl font-bold py-6">Our Intake Process</h1>
                <div className=" flex justify-center items-center">
                    <div className=" text-sm lg:text-xl w-64 lg:w-5/6 text-center">
                        <li className="py-2 text-lg">Provide your basic information to help us match you with a professional</li>
                        <li className="py-2 text-base list-none italic ">Simplify the process by importing your current insurance information through Canopy. Our professionals can get straight to work using this information to compare rates and give you the best pricing</li>
                        <h3 className="font-semibold  py-4">- OR -</h3>
                        <li className="py-2 text-lg"> submit your basic information and one of our professionals will contact you to gather further details</li>
                    </div>
                </div>
            </div>

                <div className="">
                    <FindProForm />
                </div>
        </div>
    )

}

export default FindPro;
