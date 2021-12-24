import { useContext } from 'react';
import { MaterialsContext } from '../contexts/MaterialsContext';

// 0: x-73 y-34
// 1: x-16 y-90
export default function Tags() {
	const { points } = useContext(MaterialsContext);
	return (
		<>
			{points.map(({ coordX, coordY, id }) => {
				return (
					<div key={id} className={`absolute top-[${coordY}%] left-[${coordX}%]`}>
						<p>ID: {id}</p>
						<p>X: {coordX}</p> 
						<p>Y: {coordY}</p>
					</div>
				);
			})}
		</>
	);
}
