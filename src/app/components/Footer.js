import Image from "next/image"

export default function Footer() {
    return (
        <footer className="sm:bg-neutralVeryDarkBlue">
            <div className="sm:flex sm:flex-col">
                <Image width="146" height="24" src="./images/logo-light.svg" alt="Manage logo."/>
                <div className="sm:flex sm:gap-2">
                    <Image width="24" height="24" src="./images/icon-facebook.svg" alt="Logo/link para o Facebook."/>
                    <Image width="24" height="24" src="./images/icon-youtube.svg" alt="Logo/link para o YouTube."/>
                    <Image width="24" height="24" src="./images/icon-twitter.svg" alt="Logo/link para o Twitter."/>
                    <Image width="24" height="24" src="./images/icon-pinterest.svg" alt="Logo/link para o Pinterest."/>
                    <Image width="24" height="24" src="./images/icon-instagram.svg" alt="Logo/link para o Instagram."/>
                </div>
            </div>

            <div className="">
                <ul className="sm:flex sm:flex-col">
                    <li className="sm:list-none"><a className="sm:text-neutralVeryLightGray sm:text-xs sm:decoration-none" hrf="/">Home</a></li>
                    <li className="sm:list-none"><a className="sm:text-neutralVeryLightGray sm:text-xs sm:decoration-none" hrf="/">Pricing</a></li>
                    <li className="sm:list-none"><a className="sm:text-neutralVeryLightGray sm:text-xs sm:decoration-none" hrf="/">Products</a></li>
                    <li className="sm:list-none"><a className="sm:text-neutralVeryLightGray sm:text-xs sm:decoration-none" hrf="/">About Us</a></li>
                </ul>

                <ul className="sm:flex sm:flex-col">
                    <li className="sm:list-none"><a className="sm:text-neutralVeryLightGray sm:text-xs sm:decoration-none" hrf="/">Home</a></li>
                    <li className="sm:list-none"><a className="sm:text-neutralVeryLightGray sm:text-xs sm:decoration-none" hrf="/">Pricing</a></li>
                    <li className="sm:list-none"><a className="sm:text-neutralVeryLightGray sm:text-xs sm:decoration-none" hrf="/">Products</a></li>
                    <li className="sm:list-none"><a className="sm:text-neutralVeryLightGray sm:text-xs sm:decoration-none" hrf="/">About Us</a></li>
                </ul>
            </div>
                
            <div>
                <div>
                    <input className="sm:py-3 sm:px-4 sm:rounded-3xl" placeholder="Updates in your inbox..."></input>
                    <button className="sm:mt-8 sm:py-3 sm:px-4 sm:bg-primaryBrightRed sm:text-neutralVeryLightGray sm:text-sm sm:rounded-3xl">Go</button>
                </div>
                <span className="sm:text-neutralDarkGrayishBlue sm:text-xs">Copyright 2020. All Rights Reserved</span>
            </div>
        </footer>
    )
}