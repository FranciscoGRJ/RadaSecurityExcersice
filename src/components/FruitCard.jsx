export default function FruitCard ({fruitName, selectedFruit}){
  return(
    <div className="flex flex-col border border-amber-50 rounded-sm">
      <span>{fruitName}</span>
      <button onClick={selectedFruit}>Select</button>
    </div>
  )
}
