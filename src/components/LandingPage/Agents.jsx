import { useHistory } from 'react-router-dom';

function Agents() {
	const history = useHistory();

	return (
		<div className='text-center px-20 sm:px-20 sm:pt-10 sm:pb-10 md:pt-10 md:pb-10 lg:pt-8 lg:pb-2 pb-10 pt-10 bg-orange-200 mb-2'>
			<h3 className='text-3xl font-bold sm:text-4xl mb-8'>Are you a Financial Professional?</h3>
			<p className='text-center text-black mb-1 text-lg'>
				Join BlueVest and become a BlueVest Pro! Our program matches Financial Professionals with clients across the mid-west.
			</p>
			<div className='flex items-center justify-center mb-8'>
				<img src='images/handshake.png' />
			</div>
			<div>
				<p className='text-center text-black mb-1 text-md'>Jack Culbertson (Financial Advisor) </p>
				<p className='text-xl text-center text-black mt-2 text-2xl'>
					"The guys at BlueVest completely changed the way I do business. I no longer have to spend
					time cold calling and asking for referrals."
				</p>
			</div>
			<div
				onClick={() => history.push('/jointeam')}
				className='font-bold p-2 px-2 inline-block border-2 rounded-lg bg-green-500 text-white hover:shadow-lg hover:bg-green-700 mb-10 mt-8 ml-5 mr-5 text-xl w-56 h-12'>
				Join BlueVest!
			</div>
		</div>
	);
}

export default Agents;
