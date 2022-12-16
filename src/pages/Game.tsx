// import {useGame} from "../hooks/useGame";
import React, {useCallback, useEffect, useState} from "react";
import Keyboard from "../components/Keyboard";
import Display from "../components/Display";
import {AiFillInfoCircle} from "react-icons/ai";

const Game = () => {
    const [gameMode, setGameMode] = useState('Modal');//Modal||Play
    const [currentWord, setCurrentWord] = useState('');
    const checkKeyPress = useCallback((e: any) => {
        const key = e.key.toUpperCase();
        const isKeySingleAlphabet = /^[A-Z]$/.test(key);
        const isKeyLegal = isKeySingleAlphabet || key === 'BACKSPACE' || key === 'ENTER' || key === 'ESCAPE';
        if (!isKeyLegal) return; // ignore illegal keys
        onKeyboardClick(key);
    }, []);
    useEffect(() => {
        window.addEventListener("keydown", checkKeyPress);
        return () => {
            window.removeEventListener("keydown", checkKeyPress);
        };
    }, [checkKeyPress]);
    const onKeyboardClick = (key: string) => {
        switch (gameMode){
            case 'Modal':
                if (key === 'ENTER' || key === 'ESCAPE') {
                    console.log('clicked keyboard');
                    setGameMode('Play');
                }
                break;
        }
        // if modal is active and key is ENTER or ESCAPE then toggle modal
        // //if key is char and current word is less than 5 chars then add char to current word
        // if (/^[A-Z]$/.test(key) && currentWord.length < 5) setCurrentWord((prev) => prev + key);
        // //if key is BACKSPACE and current word is not empty then remove last char from current word
        // if (key === 'BACKSPACE' && currentWord.length > 0) setCurrentWord((prev) => prev.slice(0, -1));
    }
    const toggleModal = () => {
        console.log('clicked checkbox');
        if (gameMode === 'Modal') setGameMode('Play');
        if (gameMode === 'Play') {

            setGameMode('Modal');}
    }
    return (
        <div className="game_page">
            {gameMode === "Modal" &&
                <div className='modal-container active' tabIndex={0}>
                    <div className="modal-content">
                        {/*<input  className="modal-content-escape_btn">X</input>*/}
                        <p className="modal-content-description">game instructions</p>
                    </div>
                </div>
            }
            <header className="game_page-header">
                <input type="checkbox"  onChange={toggleModal} id="zibi" className="hidden"/>
                <label htmlFor="zibi" className="game_page-header-info_btn" title="info"><AiFillInfoCircle/></label>
            </header>
            <div className="game_page-main">
                <Display/>
                <Keyboard/>
            </div>
        </div>
    );
}

export default Game;