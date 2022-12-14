import Header from "../components/Header";
import Keyboard from "../components/Keyboard";
import Display from "../components/Display";

const Game = () => {
    return (
        <div className="game_page_container">
        <Header/>
            <div className="game_main-area_container">
                <Keyboard/>
                <Display/>
            </div>
        </div>
    )
}

export default Game;