import { useDispatch, useSelector } from "react-redux"
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { increaseItems,decreaseItems, removeItem, filterItems } from "../store/slices/UserSlice";
import { useEffect } from "react";

const Card = () => {

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users
  });


  const deleteItem = (id) => {
    dispatch(removeItem(id))
  }
  const increaseItem = (id) => {
    dispatch(increaseItems(id));
  }

  const decreaseItem = (id) => {
    dispatch(decreaseItems(id));
  }
  useEffect(() => {
    filterItems()
  })
 
 const findTotalPrice = () => {
  let totalPrice = 0;
  for(let item of data){
    totalPrice += item.price * item.count;
  }
  return totalPrice.toFixed(2);
}

const totalPrice = findTotalPrice();

  return (
    <>
      <section className="card_section">
        <div className="card_items">
          {data.map((item) => {
            return (            
            <div key={item.id} className="single_card_item">
              <div>
                <img src={item.imgUrl} alt="img" className="card_img" />
              </div>
              <div className="card_heading">
                <h2>{item.productName}</h2>
              </div>
              <div className="quantity">
                <AiFillMinusSquare className="card_icon" onClick={()=> decreaseItem(item.id)} />
                <p className="one">{item.count}</p>
                <AiFillPlusSquare className="card_icon" onClick={() => increaseItem(item.id)} />
              </div>
              <div className="card_price">
                 <p>${item.price}</p>
              </div>
              <div className="card_price">
                 <p>${item.price * item.count}</p> 
              </div>
              <div>
                <MdDelete className='delete_icon' onClick={() => deleteItem(item.id)} />
              </div>
            </div>
          )})}
        </div>
      </section>
      <hr />
      <section className="total_price">
        <h1 className="total_price">Total Price: ${totalPrice}</h1>
      </section>
      <hr />
    </>
  )
}

export default Card;
