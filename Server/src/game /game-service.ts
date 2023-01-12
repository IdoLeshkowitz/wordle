import {Pool} from "pg";
import getDb from "../db";

const queries = {
    countWords: 'SELECT COUNT(*) FROM wordsbank',
    getWord: 'SELECT word FROM wordsbank WHERE id = $1',
    getAllWords: 'SELECT word FROM wordsbank',
}

export class GameService {
    constructor(private db: Pool) {
    }

    // async startGame() : Promise < Game > {
    //     const wordsCount = await this.db.query(queries.countWords)[0];
    //     const randomId = Math.floor(Math.random() * wordCount) + 1;
    // }
    async getAllWords(): Promise<{ word: string }[]> {
        return await this.db.query(queries.getAllWords) as unknown as { word: string }[];
    }
}

let gameService: GameService | undefined;

export function getGameService(): GameService {
    if (!gameService) {
        gameService = new GameService(getDb());
    }
    return gameService;
}