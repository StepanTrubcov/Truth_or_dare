import React, { useState } from 'react';
import shuffle from '../Shuffle/shuffle'
import Quantity from '../Quantity/Quantity'
import c from './PlayerNames.module.css'

const PlayerNames = ({ onNamesSubmit,setPlayer,set }) => {
  const [quantity, setQuantity] = useState(false);
  const [names, setNames] = useState();

  console.log(names)

  const handleChange = (index, value) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const handleSubmit = (e) => {
    onNamesSubmit(names);
    e.preventDefault();
   set(shuffle(names))
  };

  return (
    <div>
           { !quantity ? (<Quantity setNames={setNames} setQuantity={setQuantity} />):(
    <form className={c.form} onSubmit={handleSubmit}>
      <div className={c.text}>
      <h2>Введите имена игроков</h2>
      </div>
      <div className={c.form} >
      <button className={c.button} type="submit" onClick={() => setPlayer('ads')}  >Начать игру</button>
      {names.map((name, index) => (
        <input
        className={c.input}
          key={index}
          type="text"
          value={name}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder={`Игрок ${index + 1}`}
        />
      ))}
      </div>
    </form>)}
    </div>
  );
};

export default PlayerNames;