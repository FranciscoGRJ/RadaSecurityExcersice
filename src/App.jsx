import { useState } from 'react';
import FruitSelector from './components/FruitSelector';
import SelectedFruit from './components/SelectedFruit';
import './App.css'

function App() {
  const fruitList =  ['Manzana', 'Banana', 'Naranja', 'Pera'];
  const [selectedFruit, setSelectedFruit] = useState("");
  

  return (
    <div className='flex flex-col gap-2'>
      {/* fruit list */}
      <FruitSelector fruitList={fruitList} onSelectedFruit={setSelectedFruit}/>
      {/* selectedFruit */}
      <SelectedFruit selectedFruit={selectedFruit}/>
    </div>
  )
}

export default App
