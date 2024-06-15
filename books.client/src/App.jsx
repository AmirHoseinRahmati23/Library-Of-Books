import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Manage from "./Pages/Manage";
import Layout from "./Pages/Layout";
import ManageBooks from "./Pages/ManageBooks";
import ManageSlider from "./Pages/ManageSlider";
import BookForm from "./Pages/BookForm";
import SliderForm from "./Pages/SliderForm";
import Book from "./Pages/Book";

function App() {

    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index path="/" element={<Home/>}/>
                    <Route index path="/home" element={<Home/>}/>
                    <Route path="/book" element={<Book/>}/>
                    
                    <Route path="/manage" element={<Manage/>}>
                        <Route path="/manage/books" element={<ManageBooks />}/>
                        <Route path="/manage/books/create" element={<BookForm/>}/>
                        <Route path="/manage/books/edit" element={<BookForm/>}/>

                        <Route path="/manage/slider" element={<ManageSlider/>}/>
                        <Route path="/manage/slider/create" element={<SliderForm/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;