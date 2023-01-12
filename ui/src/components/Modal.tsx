import React, {FormEvent, ReactElement, useRef} from "react";
import {closeModal, ModalsCollection} from "../redux /features/modals/modalSlice";
import {useAppDispatch, useAppSelector} from "../redux /store /hooks";
import {signIn} from "../redux /features/user/userSlice";
import {User} from "../redux /features/user/User";

const SignInContent = () => {
    const dispatch = useAppDispatch();
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordErrorRef = useRef<HTMLLabelElement>(null);
    const userNameErrorRef = useRef<HTMLLabelElement>(null);
    const onSignIn = (e: FormEvent) => {
        e.preventDefault();
        const validateUserName = (userName: string): boolean => {
            return /^[a-z0-9_-]{3,15}$/.test(userName);
        }
        const validatePassword = (password: string): boolean => {
            return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password);
        }
        const isPasswordValid = validatePassword(passwordRef.current?.value || '')
        const isUserNameValid = validateUserName(userNameRef.current?.value || '')
        if (isPasswordValid && isUserNameValid){
            //dispatch
            const user :User = {userName: userNameRef.current?.value || '', password: passwordRef.current?.value || ''}
            dispatch(signIn(user))
        }
        if (userNameErrorRef.current){
            if (!isUserNameValid){
                userNameErrorRef.current.innerText = 'user name is invalid'
            }
            else {
                userNameErrorRef.current.innerText =''
            }
        }
        if (passwordErrorRef.current){
            if (!isPasswordValid){
                passwordErrorRef.current.innerText = 'password is invalid'
            }
            else {
                passwordErrorRef.current.innerText = '';
            }
        }
    }
    return (<form onSubmit={onSignIn}>
        <div>
            <input type="text" placeholder="user name" ref={userNameRef}/>
            <label ref={userNameErrorRef}></label>
        </div>
        <div>
            <input type="password" placeholder="password" ref={passwordRef}/>
            <label ref={passwordErrorRef}></label>
        </div>
        <input type="submit" value="sign-in"/>
    </form>)
}
const WelcomeContent = () => {
    return (<div className="welcome_page">
        <h1 className="welcome_page-header">Welcome</h1>
        <main className="welcome_page-main">
            <button className="welcome_page-main-link">
                play as a guest
            </button>
            <button className="welcome_page-main-link">
                sign in
            </button>
        </main>
    </div>)

}
const Modals = () => {
    const dispatch = useAppDispatch();
    const currentlyActiveModal = useAppSelector(state => state.modals.activeModal);
    if (!currentlyActiveModal) return null;
    const getCurrentModalContent = (): ReactElement => {
        switch (currentlyActiveModal) {
            case ModalsCollection.signIn:
                return <SignInContent/>;
            case ModalsCollection.welcome:
                return <WelcomeContent/>;
            case ModalsCollection.help:
                return <div>help</div>
            default:
                return <></>;
        }
    }
    return (<div className="modal_window">
        <div className="modal-container">
            <button onClick={() => dispatch(closeModal())}>
                close Modal
            </button>
            {getCurrentModalContent()}
        </div>
    </div>)
}

export default Modals;

