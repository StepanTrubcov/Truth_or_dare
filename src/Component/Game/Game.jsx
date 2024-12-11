import React, { useState } from 'react';
import PlayerNames from '../PlayerNames/PlayerNames';
import shuffle from '../Shuffle/shuffle'
import logo from '../../img/logo.png'
import c from './Game.module.css'

const Game = (props) => {
    const [playerNames, setPlayerNames] = useState([]);
    const [player, setPlayer] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [isTruth, setIsTruth] = useState('');
    const [noButton, setNoButtom] = useState('dsfsd');
    const [gameStarted, setGameStarted] = useState(false);
    const [rr, set] = useState();

    const handleNamesSubmit = (names) => {
        setPlayerNames(names);
        setGameStarted(true);
    };

    const next = () => {
        setPlayer('')
        setCurrentQuestion('')
        setIsTruth('')
        setNoButtom('sada')
        setPlayer('sadsa')
        set(shuffle(playerNames))
    };

    const getRandomItem = (arr) => {
        if (!noButton) {
            return <div>
                <button className={c.button} onClick={()=>{next()}} >Далее</button>
            </div>
        }
    }

    const handleSetCurrentQuestion = () => {
        setCurrentQuestion('ggghgh')
        setIsTruth('')
        setNoButtom('')
    };

    const handleSetIsTruth = () => {
        setCurrentQuestion('')
        setIsTruth('asdAS')
        setNoButtom('')
    };

    return (
        <div>
                  <div className={c.indent} ></div>
            <div className={c.name} >
                <h1 className={c.h1} >Правда или действие</h1>
            </div>
            {!gameStarted ? (
                <div>
                <PlayerNames set={set} setPlayer={setPlayer} onNamesSubmit={handleNamesSubmit} />
                </div>
            ) : (
                <div>
                {<div>                    
                    {player && (<div>
                        <p className={c.text} >Текущий игрок: {rr}</p>
                        {noButton && <div className={c.buttons} >
                            <button className={c.button} onClick={() => { handleSetCurrentQuestion() }} >Правда</button>
                            <button className={c.button} onClick={() => { handleSetIsTruth() }} >Действие</button>
                        </div>}
                        {currentQuestion && <div className={c.question} >
                            {shuffle(props.question[0])}
                        </div>}
                        {isTruth && <div className={c.question}>
                            {shuffle(props.question[1])}
                        </div>}
                        {getRandomItem()}
                    </div>)}
                </div>}
                </div>
            )}
        </div>
    );
};

export default Game;


{/* <div>
          <button >Получить вопрос или задание</button>
          {currentQuestion && (
            <div>
              <h2>{isTruth ? 'Правда' : 'Действие'}</h2>
              <p>{currentQuestion}</p>
            </div> */}