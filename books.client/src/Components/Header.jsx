import HeadTitle from "./HeadTitle";
import Menu from "./Menu";

function Header() {
    return (
        <header className="flex flex-col w-full py-8 px-16">
            <HeadTitle/>
            <Menu/>
        </header>
  );
}

export default Header;