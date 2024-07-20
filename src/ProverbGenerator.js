import React, { useState } from 'react';

const proverbs = [
  "Abaal dad galaa badan, dad gudaase yar.",
  "Abeesada taan sanqarta iyo tan aamusan, tan aamusan baa la qaatay.",
  "Aqoon la’aani waa iftiin la’aan.",
  "Aqal xoor ah, inaga gud baan ka xigo.",
  "Aamusnaan waa ogolaansho.",
  "Biyo sacabadaada lagama dhargee, ha iga daalin.",
  "Biyo doog ma kala dhantaalaanee, dad baa kala dhantaala.",
  "Caano daatay dabadood la qabay.",
  "Calool xun iyo cudur waa lama huraan.",
  "Carab iyo diiq toona waa la adkeeyaa.",
  // ... add more proverbs here if needed
];

function ProverbGenerator() {
  const [proverb, setProverb] = useState('');

  const getRandomProverb = () => {
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    setProverb(proverbs[randomIndex]);
  };

  return (
    <div className="proverb-container">
      <h2>Somali Proverb Generator</h2>
      {proverb && (
        <div className="proverb-box">
          <p>{proverb}</p>
        </div>
      )}
      <button onClick={getRandomProverb}>Get a Proverb</button>
    </div>
  );
}

export default ProverbGenerator;
