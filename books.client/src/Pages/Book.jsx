import { useEffect, useState } from "react";
import { getJson } from "../fetch";
import { useSearchParams } from "react-router-dom";

function Book()
{
    const [parameters] = useSearchParams();
    const id = parameters.get('id');
    const [book, setBook] = useState();
    useEffect(()=>{
        getBook(id);
    },[])

    const content = book!==undefined?<section id="book" className="min-h-[550px] flex flex-col md:flex-row justify-around items-center">
    <img src={book.imagePath} className="w-[90%] md:w-[300px] rounded-xl"/>
    <div className="w-[90%] md:w-1/2">
        <h2 className="text-2xl text-slate-900">{book.name}</h2>
            <p className="text-sm text-slate-500 py-2">{book.genres}</p>
            <div className="text-lg text-slate-600" dangerouslySetInnerHTML={{__html: book.description }}></div>
    </div>
</section>:<p>بارگزاری کتاب...</p>;
    return content;
    async function getBook(id)
    {
        let result = await getJson('books/' + id);
        setBook(result);
    }
}

export default Book;