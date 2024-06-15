import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";
import {getJson} from "../fetch";
function Slider() {

    const [current, setCurent] = useState(1);
    const [items, setItems] = useState();

    useEffect(()=>{
        let slides = document.querySelectorAll('.slide');
        for(let i = 0; i < slides.length; i++)
        {
            slides[i].style.display = (i+1 === current)? 'flex': 'none';
        }
    }, [current]);
    useEffect(()=>{
        getSliderItems();
    }, [])

    function next(n){
        let slidesCount = document.querySelectorAll('.slide').length;
        n = (n === slidesCount)? 1: n+1;
        setCurent(n);
        
    }
    function prev(n){
        let slidesCount = document.querySelectorAll('.slide').length;
        n = (n === 1)? slidesCount: n-1;
        setCurent(n);
    }

    let slides = [];
    if(items !== undefined)
    {
        for(let i = 1; i<= items.length; i++)
        {
            let id = "slide-" + i;
            let hidden = i===1?'':' hidden';
            let slide = <div id={id} key={items[i-1].book.id} className={"relative slide flex flex-col-reverse md:flex-row items-center p-4 w-full h-full shadow-2xl"+hidden}>
            <div className="flex flex-col justify-center items-start w-1/2 min-h-96 h-full p-10">
                <h2 className="w-full text-2xl text-slate-900">{items[i-1].book.name}</h2>
                    <p className="text-sm text-slate-500 py-2">{items[i - 1].book.genres}</p>
                    <div className="w-full text-lg text-slate-600 h-1/2 overflow-hidden" 
                        dangerouslySetInnerHTML={{ __html: items[i - 1].book.description }}>
                </div>
            </div>
            <div className="w-1/2 h-full  flex justify-center items-center">
                <img className="max-w-96 max-h-full rounded-full" src={items[i-1].book.imagePath} />
            </div>
        </div>;
        slides.push(slide);
        }
    }
    

    return (
        <section className="slider w-full flex justify-around items-center relative mt-10 h-68 overflow-hidden">
            <button className="absolute right-0 top-1/2 z-10 text-6xl text-red-800" onClick={() => prev(current)}><MdKeyboardArrowRight /></button>
            {
                items === undefined? <p className="h-[200px] mt-[150px]">در حال بارگزاری لغزش‌کن...</p>:
                slides.map((i)=> i)
            }
            <button className="absolute left-0 top-1/2 z-10 text-6xl text-red-800" onClick={() => next(current)}> <MdKeyboardArrowLeft className="w-24" /> </button>
        </section>
        );

    async function getSliderItems()
    {
        let items = await getJson('slider');
        setItems(items);
    }
}

export default Slider;