import "./App.css";
import { Routes, Route } from "react-router-dom";
// Component import
import ResponsiveAppBar from "./utilities/Header";

// Pages import
import Home from "./pages/home";

function App() {
    return (
        <div className="App">
            <ResponsiveAppBar />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
