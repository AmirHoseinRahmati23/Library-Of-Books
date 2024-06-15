import { Link, useLocation, useNavigate } from "react-router-dom";
import { deleteJson } from "../fetch";

function BooksTable({books})
{
    let i = 1;
    let location = useLocation();
    const navigate = useNavigate();
    let currentPath = location.pathname;
    currentPath = (currentPath.endsWith('/')? currentPath.substring(0,currentPath.length-1): currentPath);
    async function deleteBook(id){
       let response = await deleteJson('books/' + id);
    }

    return (
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th className="hidden lg:inline-block">عکس</th>
                <th>نام</th>
                <th className="hidden lg:inline-block">ژانر ها</th>
                <th className="hidden lg:inline-block">توضیحات</th>
                <th>عملیات</th>
            </tr>
        </thead>
        <tbody>
            { 
                books === undefined? <tr><th>بارگزاری کتاب ها</th></tr>: 
                    books.map(b => 
                        <tr key={b.id}>
                            <td>{i++}</td>
                            <td className="hidden lg:inline-block"><img src={b.imagePath}/></td>
                            <td>{b.name}</td>
                            <td className="hidden lg:inline-block">{b.genres}</td>
                            <td className="hidden lg:inline-block">
                                <div dangerouslySetInnerHTML={{ __html : b.description }}></div>
                            </td>
                            <td className="flex justify-evenly items-center">
                                <button className="p-2 bg-yellow-700 text-slate-50 rounded-xl">
                                    <Link to={currentPath + '/edit?id=' + b.id}>ویرایش</Link>
                                </button>
                                <button className="p-2 bg-red-700 text-slate-50 rounded-xl" onClick={()=>{
                                    deleteBook(b.id);
                                    navigate(0);
                                }}>
                                    حذف
                                </button>
                            </td>
                        </tr>)
            }
        </tbody>
    </table>
    )
}

export default BooksTable;