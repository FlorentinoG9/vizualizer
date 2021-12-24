import { useContext, useState, Fragment } from 'react';
import { MaterialsContext } from '../contexts/MaterialsContext';
import { FingerPrintIcon } from '@heroicons/react/outline';
import { Dialog, Transition } from '@headlessui/react';
import Pallet from './Pallet';

// 0: x-73 y-34
// 1: x-16 y-90

export default function Tags() {
	const { points, chooseMaterial } = useContext(MaterialsContext);
	const [isOpen, setIsOpen] = useState(false);

	const open = (id) => {
		chooseMaterial(id);
		setIsOpen(true);
	};
	const close = () => {
		setIsOpen(false);
	};

	return (
		<>
			{points.map(({ coordX, coordY, id }) => {
				return (
					<button
						key={id}
						onClick={() => {
							open(id);
						}}
						className={`absolute top-[${coordY}%] left-[${coordX}%] bg-black/40 rounded-full text-white p-1 ${
							isOpen ? 'hidden' : ''
						}`}
					>
						<FingerPrintIcon className='md:w-14 w-6 md:h-14 h-6 border-2 rounded-full p-1' />
					</button>
				);
			})}
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					open={isOpen}
					onClose={close}
					className='absolute inset-0 w-full h-full'
				>
					<div className='min-h-screen px-4 text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<Dialog.Overlay className='fixed inset-0 bg-black/30' />
						</Transition.Child>
						<span
							className='inline-block h-screen align-middle'
							aria-hidden='true'
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
								<Dialog.Title
									as='h3'
									className='text-lg font-medium leading-6 text-gray-900'
								>
									Payment successful
								</Dialog.Title>
								<div className='mt-2'>
									<Pallet/>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
