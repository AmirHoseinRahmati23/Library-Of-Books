import { Link } from "react-router-dom";

function Menu(){
    return (
        <menu id="menu" className="w-full">
            <ul className="w-full flex flex-col md:flex-row justify-around items-center py-2">
                <li className="text-2xl"> <Link to="/">خانه</Link> </li>
                <li className="text-2xl"><Link to="/manage/books">مدیریت کتاب ها</Link></li>
                <li className="text-2xl"><Link to="/manage/slider">مدیریت اسلایدر</Link></li>
            </ul>
        </menu>
    );
}


export default Menu;