import {createBrowserRouter ,Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import {ReactElement } from "react";
import Game from "./pages/Game";
import {ModalContext} from "./providers/modal-context";
export const router  = createBrowserRouter([
    {
        path : '/',
        element : <Welcome/>,
    },
    {
        path : '/game-page',
        element : <Game/>
    }
])
