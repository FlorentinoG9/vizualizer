import Image from 'next/image';
import Tags from '../components/Tags';
import MaterialsProvider from '../contexts/MaterialsContext';

export default function Home() {
	return (
		<div className=''>
			<div className='min-h-screen min-w-screen'>
				<div className='relative h-full w-full'>
					<Image
						src='https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/projects%2FdorptVQTHsbkYC60NSlt%2Fscenes%2F1567170849457-base?alt=media&token=cf8bcee2-bf89-4fd9-8bfd-9d4462348844'
						width={1250}
						height={885}
					/>
				<MaterialsProvider>
					<Tags />
				</MaterialsProvider>
				</div>
			</div>
		</div>
	);
}
