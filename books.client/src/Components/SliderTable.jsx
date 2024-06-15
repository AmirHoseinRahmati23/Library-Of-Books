import { Link, useLocation } from "react-router-dom";
import { deleteJson } from "../fetch";

function SliderTable({sliderItems})
{
    let i = 1;
    function deleteSlide(id)
    {
        let response = deleteJson('slider/' + id);
        window.location.reload();
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
                sliderItems === undefined? <tr><th>بارگزاری اسلاید ها...</th></tr>: 
                    sliderItems.map(s => 
                        <tr key={s.id}>
                            <td>{i++}</td>
                            <td className="hidden lg:inline-block"><img src={s.book.imagePath} /></td>
                            <td>{s.book.name}</td>
                            <td className="hidden lg:inline-block">{s.book.genres}</td>
                            <td className="hidden lg:inline-block">
                                <div dangerouslySetInnerHTML={{ __html: s.book.description }}></div>
                            </td>
                            <td className="flex justify-evenly items-center">
                                <button className="p-2 bg-red-700 text-slate-50 rounded-xl" onClick={()=>{
                                    deleteSlide(s.id);
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

export default SliderTable;