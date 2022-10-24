import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppBar from "./components/AppBar"
import ContactForm  from "./components/ContactForm";

// Wth
function App() {
  return (
    <BrowserRouter>
        < AppBar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <ContactForm />
    </BrowserRouter>
  );
}

export default App;
