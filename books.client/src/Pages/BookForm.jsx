import { useNavigate, useSearchParams } from "react-router-dom";
import { getJson, postJson } from "../fetch";
import { useEffect, useState } from "react";

function BookForm()
{
    const [parameters] = useSearchParams();
    const id = parameters.get('id');
    const isEdit = id!==null;
    const submit = isEdit? 
    <button className={"p-2 text-slate-50 bg-yellow-700 w-20 rounded-md"} onClick={()=>{
        handleSubmit();
    }}>ویرایش</button>
    : <button className={"p-2 text-slate-50 bg-green-700 w-20 rounded-md"} onClick={()=>{
        handleSubmit();
    }}>افزودن</button>;

    const navigate = useNavigate();
    const [book, setBook] = useState({
        name : '',
        genres : '',
        imagePath : '',
        description : '',
    });
    useEffect(()=>{
        if(isEdit)
        {
            getBook(id);
            
        }
    }, [])


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [id]: value,
        }));
        console.log(book);
    };
    const handleSubmit = async () => {
        if(!isEdit)
        {
            addBook(book);
        }
        else
	    {
            editBook(id,book);
        }
        navigate('/manage/books')

    };
    

    return (
        <div id="form" className="flex flex-col gap-1 mt-3">
            <label>مسیر عکس:</label>
            <input id="imagePath" type="text" placeholder="مسیر تصویر کتاب" value={book.imagePath} 
            onChange={(e) =>{
                handleInputChange(e)
            }}/>
            <label>نام کتاب:</label>
            <input id="name"type="text" placeholder="نام کتاب" value={book.name} 
            onChange={(e) =>{
                handleInputChange(e)
            }}/>
            <label>ژانرها:</label>
            <input id="genres" type="text" placeholder="ژانرها" value={book.genres} 
            onChange={(e) =>{
                handleInputChange(e)
            }}/>
            <label>توضیحات:</label>
            <textarea id="description" className="h-20" placeholder="توضیحات" value={book.description} 
            onChange={(e) =>{
                handleInputChange(e)
            }}></textarea>

            {submit}
        </div>
    )

    async function getBook(id)
    {
        let result = await getJson('books/' + id);
        setBook(result);
    }
    async function addBook(book)
    {
	let res = await postJson('books', book);
	return res;
    }
    async function editBook(id,book){
        let result = await postJson('books/' + id,book,'PUT')
    }
}

export default BookForm;