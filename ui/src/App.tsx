import React, {useEffect} from 'react'
import Modals from "./components/Modal";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";
import Header from "./components/Header";
import {signIn} from "./redux /features/user/userSlice";
import { useAppDispatch } from './redux /store /hooks';

function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const cachedUser = localStorage.getItem('user')
        if (cachedUser) {
            dispatch(signIn(JSON.parse(cachedUser)))
        }
    }, [])
    return (
        <div className="game_page">
            <Modals/>
            <Header/>
            <div className="game_page-main">
                <Display/>
                <Keyboard/>
            </div>
        </div>
    )
}


export default App
