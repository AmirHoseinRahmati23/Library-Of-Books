import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom";

function Layout()
{
    return (
        <section>
            <Header/>
            <Outlet/>
            <Footer/>
        </section>
    );
}

export default Layout;