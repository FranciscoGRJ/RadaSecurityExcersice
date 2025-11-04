export default function FruitSelector ({fruitList, onSelectedFruit}){
  
  return(
    <div className="flex flex-col gap-2">
      {fruitList.map(function (fruit, index){

        return <div key={index} className="flex flex-col border border-amber-50 rounded-sm p-4">
                  
                  <button
                  className="hover:bg-blue-900"
                  onClick={()=>onSelectedFruit(fruit)}>{fruit}</button>
                </div>
        })}
    </div>
  )

}
