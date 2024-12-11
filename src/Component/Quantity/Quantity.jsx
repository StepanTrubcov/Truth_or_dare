import React, { useState } from 'react';
import c from './Quantity.module.css'

const Quantity = ({ setQuantity, setNames}) => {
  const [number, setNumber] = useState();

  const handleSubmit = (e) => {
    setNames(e)
    setQuantity(true)
  };

  return (
    <div className={c.quantity} >
      <div className={c.text}>
      <h2>Сколько игроков будет играть?</h2>
      </div>
      <div className={c.buttons} >
      <button className={c.button} type="submit" onClick={() => handleSubmit(['','',''])}  >3 игрока</button>
      <button className={c.button} type="submit" onClick={() => handleSubmit(['','','',''])}  >4 игрока</button>
      <button className={c.button} type="submit" onClick={() => handleSubmit(['','','','',''])}  >5 игроков</button>
      <button className={c.button} type="submit" onClick={() => handleSubmit(['','','','','',''])}  >6 игроков</button>
      <button className={c.button} type="submit" onClick={() => handleSubmit(['','','','','','',''])}  >7 игроков</button>
      <button className={c.button} type="submit" onClick={() => handleSubmit(['','','','','','','',''])}  >8 игроков</button>
    </div>
    </div>
  );
};

export default Quantity;