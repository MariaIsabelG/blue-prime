import { useHistory } from "react-router-dom";


function CategoryNav() {

    const history = useHistory();

    return (

        <div>
            <nav className='h-20 bg-blue-100 px-2 w-full z-20 top-0 left-0 border-b border-gray-200'>
                <div className='justify-center flex flex-wrap'>
                    <button 
                    onClick={()=> history.push('/resources')}
                    className='hidden md:flex text-slate-700 hover:bg-blue-200  px-8 py-7'>
                        All blogs
                    </button>

                    <button 
                    onClick={()=> history.push('/c1')}
                    className='hidden md:flex text-slate-700 hover:bg-blue-200  px-8 py-7'>
                        Home
                    </button>

                    <button 
                    onClick={()=> history.push('/c2')}
                    className='hidden md:flex text-slate-700 hover:bg-blue-200  px-8 py-7'>
                        Auto
                    </button>

                    <button 
                    onClick={()=> history.push('/c3')}
                    className='hidden md:flex text-slate-700 hover:bg-blue-200  px-8 py-7'>
                        Disability
                    </button>

                    <button 
                    onClick={()=> history.push('/c4')}
                    className='hidden md:flex text-slate-700 hover:bg-blue-200  px-8 py-7'>
                        Renters
                    </button>

                    <button 
                    onClick={()=> history.push('/c5')}
                    className='hidden md:flex text-slate-700 hover:bg-blue-200  px-8 py-7'>
                        Life
                    </button>
                </div>
            </nav>


        </div>
    )
}

export default CategoryNav;