import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppBar from "./components/AppBar"

// Wth
function App() {
  return (
    <BrowserRouter>
        < AppBar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
