import {CSSProperties, useRef, useState} from "react";
import {DotLoader} from "react-spinners";
import {BsArrowRightCircle} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};
const SignIn = () => {
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const onSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            return navigate('/game-page');
        }, 2000);

    }

    return (
        <div className="sign_in">
            <h1 className='sign_in-header'>Sign In</h1>
            <form className="sign_in-form">
                <div className="sign_in-form-body">
                    <section>
                        <label htmlFor="username">username</label>
                        <input type="text" id="username" ref={userNameRef}/>
                    </section>
                    <section>
                        <label htmlFor="password">password</label>
                        <input type="text" id="password" ref={passwordRef}/>
                    </section>
                </div>
                {loading ?
                    <DotLoader
                        loading={true}
                        cssOverride={override}
                        size={50}
                        aria-label={"Loading..."}
                    />
                    :
                    <BsArrowRightCircle className="sign_in-form-submit_btn" onClick={onSubmit}/>
                }
            </form>
        </div>
    )
}

export default SignIn
