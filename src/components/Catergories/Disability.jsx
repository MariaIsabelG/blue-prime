import { useHistory } from "react-router-dom";

function CategoryThree() {

    const history = useHistory();

    return (

        <>
            <section>
                <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center"
                    >
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <a
                                className="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                                onClick={() => history.push('/a3')}
                            >

                                <h6 className="mt-2 font-bold">Guide to Long-Term Disability Insurance</h6>
                                <img src="images/teddy.png" className="w-96" />

                                
                            </a>

                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryThree;