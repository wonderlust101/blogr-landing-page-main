import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";

const basename = import.meta.env.BASE_URL;

export default function App() {

    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}
