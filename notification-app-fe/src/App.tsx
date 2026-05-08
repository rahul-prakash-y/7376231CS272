import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router";
import { HomePage } from "./page";


function App(){
    return(
        <Router>
            <Routes >
                <Route path="/home" element={<HomePage/>}/>
            </Routes>
        </Router>
    )
}

export default App;
