import {Link} from "react-router-dom";

const Welcome =()=>{
    return(
        <div className="welcome_page">
            <h1 className="welcome_page-header">Welcome</h1>
            <main className="welcome_page-main">
            <Link to={'game-page'} className="welcome_page-main-link">play as a guest</Link>
            <Link to={'sign-in'} className="welcome_page-main-link">sign in </Link>
            </main>
        </div>
    )
}

export default Welcome