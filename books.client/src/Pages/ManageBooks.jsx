import { useEffect, useState } from "react";
import BooksTable from "../Components/BooksTable";
import { getJson } from "../fetch";

function ManageBooks()
{
    const [books, setBooks] = useState();
    useEffect(() => {
        getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
    <BooksTable books={books}/>
    );

    async function getBooks()
    {
        const books = await getJson('books');
        setBooks(books);
    }
}

export default ManageBooks;