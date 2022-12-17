import {ReactElement, useContext} from "react";
import {DisplayContext} from "../pages/Game";

const Display = ({children}: any) => {
    const {getCurrentDisplayGrid} =   useContext(DisplayContext);
    const gridItems = getCurrentDisplayGrid();
    return (
        <div className="display">
            {gridItems.map((item: string, index: number) => {
                return (
                    <div className="display-item" key={index}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}
export default Display;