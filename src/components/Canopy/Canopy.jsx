import { useEffect } from "react";


function Canopy() {


    return (
        <>  
            <div className="text-center">
                <h1 className="font-semibold p-4">Please import your insurance information using Canopy</h1>

                <h3>if you choose to opt out, click here and we will reach out to collect the rest of your information</h3>

                <button 
                    className='mt-2 mb-2 rounded-md border border-transparent bg-orange-400 py-2 px-3 text-center font-medium text-white hover:bg-orange-700'
                >
                    I do not wish to use Canopy
                </button>
            </div> 

            <iframe src='https://app.usecanopy.com/c/bluevest-inc' 
            style={{ width: '100%', height: '750px' }} 
            frameBorder='0'>
            </iframe>     
        </>
    )
}

export default Canopy;