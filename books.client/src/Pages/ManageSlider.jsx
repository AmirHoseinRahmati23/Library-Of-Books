import { useEffect, useState } from "react";
import { getJson } from "../fetch";
import SliderTable from "../Components/SliderTable";

function ManageSlider()
{
    const [slides, setSlides] = useState();
    useEffect(() => {
        getSlides();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
    <SliderTable sliderItems={slides}/>
    );

    async function getSlides()
    {
        const slides = await getJson('slider');
        setSlides(slides);
    }
}

export default ManageSlider;