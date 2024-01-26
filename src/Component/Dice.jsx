import React, {useState} from 'react';
import './../Style/Dice.scss'; 

const Dice = () => {

    const [rolling, setRolling] = useState(false);  
    const rollDice = () => {
        setRolling(true);
        setTimeout(() => {
        setRolling(false);
        }, 1000); 
    };
  return (
    <section className='Dices'>
        <h3 className='DoYouWantPlay'>Quel projet regarder ? Lancez les dés !</h3>
        <div className={`dice ${rolling ? 'rolling' : ''}`} onClick={rollDice}>
            <div className="dot"></div>
        </div>
        <div className={`dice ${rolling ? 'rolling' : ''}`} onClick={rollDice}>
            <div className="dot"></div>
        </div>
        <button className='closeTheDices'>Je ne veux pas jouer</button>
    </section>
  );
}

export default Dice;