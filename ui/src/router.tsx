import {createBrowserRouter} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Game from "./pages/Game";
import SignIn from "./pages/SignIn";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Welcome/>,
    },
    {
        path: '/game-page',
        element: <Game/>
    },
    {
        path: '/sign-in',
        element: <SignIn/>
    }
])
