import { Link, Outlet, useLocation } from "react-router-dom";

function Manage()
{
    let showAddButton = false;
    let currentPath = useLocation().pathname;
    currentPath = (currentPath.endsWith('/')? currentPath.substring(0,currentPath.length-1): currentPath);
    
    let currentContext;
    switch(true)
    {
        case currentPath.endsWith('books'):
            currentContext = 'کتاب ها';
            showAddButton = true;
            break;
        case currentPath.endsWith('slider'):
            currentContext = 'اسلایدر';
            showAddButton = true;
            break;
        case currentPath.endsWith('books/create'):
            currentContext = 'افزودن کتاب';
            break;
        case currentPath.endsWith('books/edit'):
            currentContext = 'ویرایش کتاب';
            break;
        case currentPath.endsWith('slider/create'):
            currentContext = 'افزودن اسلاید';
            break;
        default:
            currentContext = 'داری چیکار می‌کنی';
            break;
    }
    return (
        <main id="manage" className="min-h-[540px]" >
            <h2 className="w-full text-3xl py-2">مدیریت | {currentContext}</h2>
            { showAddButton?
                <section className="w-full p-2">
                    <button className="p-2 bg-green-700 text-slate-50 rounded-xl">
                        <Link to={currentPath + '/create'}>افزودن</Link>
                    </button>
                </section>: null}
            <Outlet/>
        </main>
    );
}

export default Manage;