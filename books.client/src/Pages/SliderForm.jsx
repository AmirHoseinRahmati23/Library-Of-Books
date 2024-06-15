import { useEffect, useState } from "react";
import { getJson, postJson } from "../fetch";
import { useNavigate } from "react-router-dom";

function SliderForm()
{
    const [books, setBooks] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function handleSubmit()
    {
        let select = document.getElementById('books');
        let bookId = select.value;
        addSlide(bookId);
        navigate('/manage/slider');
    }

    return (
    <div className="flex flex-col">
        {books === undefined?
            <p className="my-5 text-center h-[400px]">Lodaing Options</p>:
            <select name="books" id="books" className="my-5">
            {books.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
        }
        
        <button onClick={()=>{
            handleSubmit();
        }} className="bg-green-700 text-slate-50 p-2 rounded-md self-start" >افزودن</button>
    </div>)
    async function getBooks()
    {
        const books = await getJson('books');
        setBooks(books);
    }
    async function addSlide(bookId)
    {
        let data = {
            bookId : bookId
        };
        let response = await postJson('slider',data,'POST');
        if(response.bookId == bookId)
            {
                window.location.reload();
            }
    }
}

export default SliderForm;