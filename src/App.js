import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BooksPage from "./pages/Bookspage";
import ErrorPage from "./pages/Errorpage";
import HomePage from "./pages/Homepage";
import NavBarPage from "./pages/NavBarPage";


function App() {
  return (
    <BrowserRouter>
        <NavBarPage />
        <Routes>
            <Route  path="/" element={<HomePage />}/>
            <Route  path="/books" element={<BooksPage />}/>
            <Route  path="*" element={<ErrorPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
