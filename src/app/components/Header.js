import Image from "next/image"
import MenuBurger from "./MenuBurger"
import Overlay from "./Overlay"

export default function Header () {
    return (
        <header className="sm:py-12 sm:px-8 sm:flex sm:justify-between sm:items-center sm:relative sm:z-10 lg:flex-col">
            <Image width="146" height="24" src="./images/logo.svg" alt="Manage logo."/>

            <Overlay/>

            <nav id="navBar" className="sm:w-5/6 sm:py-10 sm:absolute sm:top-[calc(100%+10px)] sm:left-1/2 sm:-translate-x-1/2 sm:-rotate-x-90 transition-all sm:z-10 sm:bg-neutralVeryLightGray sm:shadow-lg lg:static lg:translate-x-0 lg:rotate-0 lg:bg-transparent lg:shadow-none">
                <ul className="sm:flex sm:flex-col sm:items-center sm:gap-4 lg:flex-row">
                    <li className="sm:list-none"><a className="sm:text-primaryDarkBlue sm:font-black sm:decoration-none sm:hover:text-primaryBrightRed md:text-lg" href="/">Pricing</a></li>
                    <li className="sm:list-none"><a className="sm:text-primaryDarkBlue sm:font-black sm:decoration-none sm:hover:text-primaryBrightRed md:text-lg" href="/">Product</a></li>
                    <li className="sm:list-none"><a className="sm:text-primaryDarkBlue sm:font-black sm:decoration-none sm:hover:text-primaryBrightRed md:text-lg" href="/">About Us</a></li>
                    <li className="sm:list-none"><a className="sm:text-primaryDarkBlue sm:font-black sm:decoration-none sm:hover:text-primaryBrightRed md:text-lg" href="/">Careers</a></li>
                    <li className="sm:list-none"><a className="sm:text-primaryDarkBlue sm:font-black sm:decoration-none sm:hover:text-primaryBrightRed md:text-lg" href="/">Community</a></li>
                </ul>
            </nav>

            <MenuBurger/>
        </header>
    )
}