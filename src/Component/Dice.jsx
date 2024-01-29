import React, {useState} from 'react';
import './../Style/Dice.scss';
import Modal from '../Component/Modal' 

const Dice = () => {

    const [rolling, setRolling] = useState(false);  
    const [isOpened, setIsOpened] = useState(false);
    const rollDice = () => {
        setRolling(true);
        setTimeout(() => {
            setRolling(false)
            setIsOpened(true)
        }, 1000); 
    };
    const closeModal = () => {
        setIsOpened(false);
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
        {isOpened && <Modal closeModal={closeModal} />}
    </section>
  );
}

export default Dice;