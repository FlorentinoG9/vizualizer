import { useContext, useEffect } from 'react';
import { MaterialsContext } from '../contexts/MaterialsContext';

export default function Pallet() {
  const {selected} = useContext(MaterialsContext)

  useEffect(() => {
    console.log(selected);
  }, [])

  return (
    <div>
    </div>
  )
}
