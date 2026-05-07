import {Route, BrowserRouter as Router, Routes} from "react-router";
import { HomePage } from "../pages";

export function AppRouter(){
    return(
        <Router>
            <Routes >
                <Route path="/home" element={<HomePage/>}/>
            </Routes>
        </Router>
    )
}