import {Link} from "react-router-dom";

const Welcome =()=>{
    return(
        <div>
            <h1>Welcome</h1>
            <Link to={'game-page'}>start the game</Link>
        </div>
    )
}

export default Welcome