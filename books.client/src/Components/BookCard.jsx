import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function BookCard({ name, genres, imageLink, id}) {
    return (
        <div className="card h-[450px] md:h-[500px] w-[95%] md:w-[30%]">
            <img className='max-h-[78%] w-full rounded-xl' src={imageLink} alt={name} />
            <div className='h-[22%] w-full p-2 rounded-xl overflow-hidden 
            flex flex-col justify-around items-center'>
                <h2 className='text-3xl'>{name}</h2>
                <p className='text-sm text-slate-600'>{genres}</p>
                <button className='w-1/2 text-center bg-slate-900 
                text-slate-50 p-1 rounded-xl'>
                    <Link to={"/book?id=" + id}>اطلاعات بیشتر</Link>
                </button>
            </div>
        </div>
    );
}

export default BookCard;