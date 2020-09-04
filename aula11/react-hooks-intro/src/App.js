import React, { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <section id="meu-component">
      <div>{number}</div>
      <button onClick={() => { number && setNumber(number - 1) }}> - </button>
      <button onClick={() => setNumber(number + 1)}> + </button>
    </section>
  );
}
