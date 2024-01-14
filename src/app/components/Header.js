import Image from "next/image"
import MenuBurger from "./MenuBurger"

export default function Header () {
    return (
        <header className="sm:py-12 sm:px-8 sm:flex sm:justify-between sm:items-center sm:relative sm:z-10">
            <Image width="146" height="24" src="./images/logo.svg" alt="Manage logo."/>

            <nav id="navBar" className="sm:w-5/6 sm:py-10 sm:absolute sm:top-[calc(100%+10px)] sm:left-1/2 sm:-translate-x-1/2 sm:-rotate-x-90 transition-all sm:z-10 bg-neutralVeryLightGray shadow-lg">
                <ul className="sm:flex flex-col items-center gap-4">
                    <li className="list-none"><a className="decoration-none" href="/">Pricing</a></li>
                    <li className="list-none"><a className="decoration-none" href="/">Product</a></li>
                    <li className="list-none"><a className="decoration-none" href="/">About Us</a></li>
                    <li className="list-none"><a className="decoration-none" href="/">Careers</a></li>
                    <li className="list-none"><a className="decoration-none" href="/">Community</a></li>
                </ul>
            </nav>

            <MenuBurger/>
        </header>
    )
}