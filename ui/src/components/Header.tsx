import React from "react";
import {AiFillInfoCircle} from "react-icons/ai";
import {useAppDispatch, useAppSelector} from "../redux /store /hooks";
import {ModalsCollection, openModal} from "../redux /features/modals/modalSlice";
import {signOut} from "../redux /features/user/userSlice";
import {User} from "../redux /features/user/User";

const Header = () => {
    const currentUser : User = useAppSelector(state => state.user.currentUser);
    const dispatch = useAppDispatch();
    console.log(currentUser);
    return (<header className="game_page-header">
        <button onClick={() => dispatch(openModal(ModalsCollection.help))}><AiFillInfoCircle/></button>
        {currentUser.userName === 'guest' ?
            <button onClick={() => dispatch(openModal(ModalsCollection.signIn))}>signIn</button>
            :
        <>
            <span>hello {currentUser.userName}</span>
            <button onClick={()=>dispatch(signOut())}>signOut</button>
        </>}

        <h1>WORDLE</h1>
    </header>)
}

export default Header;