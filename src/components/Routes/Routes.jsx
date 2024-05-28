import {Route , Routes} from "react-router-dom";
import Home from "../Home/Home.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route index element={<Home/>}/>
        </Routes>
    )
}

export default AppRoutes;