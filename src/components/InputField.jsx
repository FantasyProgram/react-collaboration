import React, { useEffect, useState } from 'react';

import { LazyCard } from './LazyLoading.js';


export default function InputField() {
  const [fieldTitle, setField] = useState('Default Title');
  const [inputValue, setInputValue] = useState('default value');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log(`Input Value changed: ${inputValue}`);
  }, [inputValue]);

  useEffect(() => {
    console.log(`Cards updated:`, cards);
  }, [cards]);

  const onValueChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addCard = () => {
    setCards([...cards, Date.now()]);
  };

  return (
    <>
      <div>
        <h1>{fieldTitle || 'test'}</h1>

        <input
          type="text"
          value={inputValue}
          name="firstname"
          onChange={onValueChangeHandler}
        />
        <h1>{inputValue}</h1>

        <button onClick={addCard}>Add Card</button>

        <div>
          {cards.map((id) => (
            <LazyCard key={id} />
          ))}
        </div>
      </div>
    </>
  );
}
