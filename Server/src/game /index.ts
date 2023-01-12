import {Request, Response, Router} from 'express';
import {getGameService} from "./game-service";

const startGame = (req: Request, res: Response) => {
    //todo : call startGame from gameService
    // todo: send back random word received from gameService
    const userId = req.params.userId;
    ''
    res.send('startGame');
}
const getAllWords = async (req, res) => {
    return res.send(await getGameService().getAllWords());
}
const game = Router();
game.get('/',getAllWords)

export default game;