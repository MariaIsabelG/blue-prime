import { useHistory } from 'react-router-dom';

function ClientConfirmation() {
	const history = useHistory();

	return (
		<div className='flex justify-center items-center text-center'>
			<div className='w-5/6 p-8 m-9 transition border border-gray-200 shadow-xl rounded-xl hover:shadow-blue-600/10 hover:border-blue-800/10'>
				<h1 className='text-xl md:text-4xl font-bold mb-4 md:m-10'>
					Your information has been submitted!
				</h1>

				<div className='bg-stone-100 p-5 md:m-10 md:m-30 rounded-xl'>
					<h3 className='text-xl m-2'>Thank you for your interest in BlueVest!</h3>
					<h3 className='text-lg'>We look forward to working with you</h3>
					<h4 className='m-2 mt-10'>
						Our representatives will reach out to you within 2 buisness days
					</h4>
				</div>
				<div className='m-10'>
					<h4>In the meantime, feel free to browse our free learning resources</h4>
					<button
						className='mt-2 mb-2 rounded-md border border-transparent bg-orange-400 py-2 px-3 text-center font-medium text-white hover:bg-orange-700'
						onClick={() => history.push('/resources')}>
						Learning Resources
					</button>
				</div>
			</div>
		</div>
	);
}

export default ClientConfirmation;
