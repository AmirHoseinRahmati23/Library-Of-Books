import { useEffect, useState } from "react";
import BookCards from "../Components/BookCards";
import BooksTable from "../Components/BooksTable";
import Slider from "../Components/Slider";
import { getJson } from "../fetch";
import { IoBookmarksSharp } from "react-icons/io5";

function Home()
{
    return(
        <main>
            <Slider/>
            <BookCards/>
        </main>
    );
}

export default Home;