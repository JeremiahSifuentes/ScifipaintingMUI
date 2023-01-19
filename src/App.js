import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppBar from "./components/AppBar"
import ContactForm  from "./components/ContactForm";
import About from "./pages/About";

// Wth
function App() {
  return (
    <BrowserRouter>
        < AppBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <ContactForm />
    </BrowserRouter>
  );
}

export default App;
