import { useHistory } from "react-router-dom";

function CategoryTwo() {

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
                                onClick={() => history.push('/a2')}
                            >

                                <h6 className="mt-2 font-bold">Article One</h6>

                                <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryTwo;