import { useHistory } from 'react-router-dom';

function TopComponent(){

    const history = useHistory();

    return (
            <div className='w-full mt-10 sm:mt-0 md:mt-0 lg:mt-0 '>    
                <div className='sm:flex md:flex bg-white'>
					<div className="sm:static md:static lg:pl-36 xl:mt-10 ">
						<div className='px-10 text-4xl text-gray-900 sm:mt-24 md:mt-24 lg:mt-30 lg:text-7xl xl:mt-16 xl:7xl '>
							<h1 className="font-bold">
								Find Your Financial Professional
							</h1>
							<li className='mt-10 text-xl text-gray-500'>Where your time and and insurance needs are valued.</li>
							<li className='mt-4 text-xl text-gray-500'>We provide a convenient way to find financial professionals in your area.</li>
							<li className='mt-4 text-xl text-gray-500'> Answer a few short quick questions and get connected with us!</li>
						</div>
						<div className="flex mt-10">
							<div className="static">
							<div onClick={() => history.push('/findPro')} className='flex items-center justify-center inline-block border-2 rounded-lg bg-green-500 text-white hover:shadow-lg hover:bg-green-700 mb-10 mt-8 ml-5 mr-5 text-lg w-32 h-12 xl:text-2xl xl:w-44'>
								Find Your Pro
							</div>
							</div>
						
						<div onClick={() => history.push('/about')} className='flex items-center justify-center inline-block border-2 rounded-lg bg-orange-400 px-2 text-white hover:shadow-lg hover:bg-orange-700 mb-10 mt-8 mr-5 text-md w-28 h-12 xl:text-2xl xl:w-36'>
							About us!
						</div>
						<div onClick={() => history.push('/resources')} className='flex items-center justify-center inline-block border-2 rounded-lg bg-blue-400 px-2 text-white hover:shadow-lg hover:bg-blue-600 mb-10 mt-8 mr-5 text-lg w-32 h-12 xl:text-2xl xl:w-40 ' >
							Resources 
						</div>
						</div>
					</div>
					<div className='mt-0 sm:inline-block sm:w-6/12 md:w-6/12 inline-block lg:w-6/12 xl:w-7/12 2xl:w-6/12' aria-hidden='true'>
						<img
							src='images/piggy_bank.jpg'
							alt=''
							className='h-full w-full object-cover object-center'
						/>
					</div>
				</div>
            </div>    
    )
};

export default TopComponent;