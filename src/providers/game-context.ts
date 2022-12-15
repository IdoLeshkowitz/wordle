import {UseGame} from "../hooks/useGame";
import {createContext} from "react";

export const GameContext = createContext<UseGame | null>(null);