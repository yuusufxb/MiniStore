import './style/card.css'
export function Card({cart,setcard}) {
    const deleteCartProduct =(index) =>{
        setcard(prev => prev.filter((pro,i)=> i !== index))
    }
  return (
    <div>
        <h1 id="">your Card </h1>
        {cart.length == 0 && <p>card is empty</p>}
        {cart.map( (ca,index)=>(
            <div>
            <img src={ca.images} alt="ptduct image" id="images" />
            <p>{ca.title}</p>
            <p>{ca.price}</p>
            <button onClick={()=>deleteCartProduct(index)}>remove from card</button>
            </div>
        )
        )}
    </div>
  );
}
