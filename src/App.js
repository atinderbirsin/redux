import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import BooksPage from "./pages/Bookspage";
import ErrorPage from "./pages/Errorpage";
import HomePage from "./pages/Homepage";


function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route  path="/" element={<HomePage />}/>
            <Route  path="/books" element={<BooksPage />}/>
            <Route  path="*" element={<ErrorPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
