// import {useGame} from "../hooks/useGame";
import React, {useEffect, useState} from "react";
import Keyboard from "../components/Keyboard";
import Display from "../components/Display";
import {AiFillInfoCircle} from "react-icons/ai";

const useGame = () => {
    const [helpModalActive, setHelpModalActive] = useState(true);//help modal active or not
    const [currentWord, setCurrentWord] = useState("");//current word
    const [guessedWords, setGuessedWords] = useState<string[] | null>(null);//guessed words
    const [currentWordIndex, setCurrentWordIndex] = useState(0);//current guessed word index
    const onKeyboardClick = (key: string) => {
        key = key.toUpperCase();
        if (helpModalActive) {
            const isLegalKey = key === 'ENTER' || key === 'ESCAPE';
            if (key !== 'ENTER' && key !== 'ESCAPE') return; // ignore keys other than enter and escape
            else {
                setHelpModalActive(false)
            }
            return
        }
        if (!helpModalActive) {
            const getActionByKey = (key: string) => {
                if (key === 'BACKSPACE') return 'BACKSPACE';
                if (key === 'ENTER') return 'ENTER';
                if (/^[A-Z]$/.test(key)) return 'LETTER';
                return 'OTHER';
            }
            const action = getActionByKey(key);
            switch (action) {
                case 'BACKSPACE':
                    const newCurrentWord = currentWord.slice(0, -1);
                    setCurrentWord(newCurrentWord);
                    const newGuessedWords = [...guessedWords || ''];
                    newGuessedWords[currentWordIndex] = newCurrentWord;
                    setGuessedWords(newGuessedWords);
                    break;
                case 'ENTER':
                    if (currentWord.length === 5 && currentWordIndex < 5) {
                        const newGuessedWords = [...guessedWords || ''];
                        setGuessedWords(newGuessedWords);
                        setCurrentWordIndex(currentWordIndex + 1);
                        setCurrentWord("");

                    }
                    break;
                case 'LETTER':
                    if (currentWord.length < 5) {
                        const updatedCurrentWord = currentWord + key;
                        const updateCurrentWord = (updatedCurrentWord: any) => setCurrentWord(updatedCurrentWord);
                        // replace guessedWords at currentWordIndex with updatedCurrentWord
                        const newGuessedWords = [...guessedWords || ''];
                        newGuessedWords[currentWordIndex] = updatedCurrentWord;
                        const updateGuessedWords = (newGuessedWords: any) => setGuessedWords(newGuessedWords);
                        updateCurrentWord(updatedCurrentWord);
                        updateGuessedWords(newGuessedWords);
                    }
            }
        }

    }

    const onHelpButtonClick = () => {
        console.log('help button clicked', helpModalActive);
        setHelpModalActive(!helpModalActive);
    }
    return {onKeyboardClick, onHelpButtonClick, helpModalActive, guessedWords, currentWord};
}

const useDisplay = () => {
    const {guessedWords} = useGame();
    const getCurrentDisplayGrid = () => {
        const displayGrid = [];
        for (let i = 0; i < 30; i++) {
            displayGrid.push(guessedWords ? (guessedWords[i] || '') : '');
        }
        console.log(guessedWords);
        return displayGrid;
    }
    return {getCurrentDisplayGrid}
}
export const DisplayContext = React.createContext<any>(null);
const DisplayProvider = ({children, guessedWords}: any) =>{
    const {getCurrentDisplayGrid} = useDisplay();
    return (
        <DisplayContext.Provider value={{getCurrentDisplayGrid}}>
            {children}
        </DisplayContext.Provider>
    )
}
const Game = () => {
    const {onKeyboardClick, onHelpButtonClick, helpModalActive, guessedWords, currentWord} = useGame();
    const {getCurrentDisplayGrid} = useDisplay();
    useEffect(() => {
        window.addEventListener("keydown", onUserKeyboardClick);
        return () => {
            window.removeEventListener("keydown", onUserKeyboardClick);
        };
    }, [onKeyboardClick]);
    const onVirtualKeyboardClick = (key: string) => {
        onKeyboardClick(key);
    }
    const onUserKeyboardClick = (event: KeyboardEvent) => {
        onKeyboardClick(event.key);
    }
    return (
        <div className="game_page">
            {helpModalActive &&
                <div className='modal-container active' tabIndex={0}>
                    <div className="modal-content">
                        <button className="modal-content-escape_btn" onClick={onHelpButtonClick}>X</button>
                        <p className="modal-content-description">game instructions</p>
                    </div>
                </div>
            }
            <header className="game_page-header">
                <input type="checkbox" onChange={onHelpButtonClick} id="openModal" className="hidden"/>
                <label htmlFor="openModal" className="game_page-header-info_btn"
                       title="info"><AiFillInfoCircle/></label>
            </header>
            <div className="game_page-main">
                <DisplayProvider guessedWords={guessedWords}>
                    <Display>
                    </Display>
                </DisplayProvider>
                <Keyboard onKeyboardClick={onVirtualKeyboardClick}/>
            </div>
        </div>
    );
}

export default Game;