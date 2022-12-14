import Header from "../components/Header";
import Keyboard from "../components/Keyboard";
import Display from "../components/Display";

const Game = () => {
    return (
        <div className="game_page">
        <Header/>
            <div className="game_page-main">
                <Display/>
                <Keyboard/>
            </div>
        </div>
    )
}

export default Game;