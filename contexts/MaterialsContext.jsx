import { createContext, useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import db from '../firebase/config';

export const MaterialsContext = createContext();

export default function MaterialsProvider({ children }) {
	const [points, setPoints] = useState({});
	const [materials, setMaterials] = useState({});
	const [selected, setSelected] = useState(null);

	const chooseMaterial = (material) => {
		setSelected(material);
	};

	useEffect(() => {
		const colRef = collection(db, 'points');
		const q = query(colRef, orderBy('id', 'asc'));

		onSnapshot(q, (snap) => {
			setPoints(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});
	}, [points]);

	useEffect(() => {
		const colRef = collection(db, 'materials');
		const q = query(colRef, orderBy('id', 'asc'));

		onSnapshot(q, (snap) => {
			setMaterials(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});
	}, [materials]);

	return (
		<MaterialsContext.Provider
			value={{ points, materials, selected, chooseMaterial }}
		>
			{children}
		</MaterialsContext.Provider>
	);
}
