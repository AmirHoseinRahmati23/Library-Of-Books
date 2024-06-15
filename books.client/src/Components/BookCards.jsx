import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import {getJson} from "../fetch";
import BooksTable from "./BooksTable";
function BookCards() {
    const [books, setBooks] = useState();
    useEffect(() => {
        getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const content = 
        <section id="book-cards"
        className="flex flex-col md:flex-row justify-evenly content-evenly 
        items-center flex-wrap gap-10 mt-20">
        {
                books === undefined ? <p>بارگزاری کارت ها...</p> : books.map(b =>
            <BookCard key={b.id} id={b.id} name={b.name} genres={b.genres} imageLink={b.imagePath} />
            )
        }
        </section>;
    return content;

    async function getBooks()
    {
        const books = await getJson('books');
        setBooks(books);
    }
}


export default BookCards;