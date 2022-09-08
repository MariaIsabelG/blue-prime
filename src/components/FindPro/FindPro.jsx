import FindProForm from "../FindProForm/FindProForm";

function FindPro() {



    return (
        <div className="m-4 bg-stone-100 flex justify-between">
        <div className="h-full flex flex-col lg:flex-row items-center justify-center lg:mt-52 lg:mb-52  pt-10 pb-10">

                <div className="md:w-1/2">
                <h1 className="text-center text-xl lg:text-2xl font-bold py-6">Our Process</h1>

                    <div className=" flex justify-center items-center">
                    <div className="leading-loose text-sm lg:text-xl w-64 lg:w-5/6">
                        <li className="py-2 text-lg">Provide your basic information to help us match you with a professional</li>
                        <li className="py-2 text-base list-none italic">Simplify the process by importing your current insurance information through Canopy. Our professionals can get straight to work using this information to compare rates and give you the best pricing</li>
                        <h3 className="font-semibold">- OR -</h3>
                        <li className="py-2 text-lg"> submit your basic information and one of our professionals will contact you to gather further details</li>
                    </div>
                    </div>
                </div>

                <div className="">
                    <FindProForm />
                </div>
                </div>

        </div>
    )

}

export default FindPro;
