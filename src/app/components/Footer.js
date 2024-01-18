import Image from "next/image"

export default function Footer() {
    return (
        <footer className="sm:py-12 sm:pb-24 sm:px-6 sm:flex sm:flex-col-reverse sm:gap-12 sm:bg-neutralVeryDarkBlue 2lg:px-12 2lg:flex-row 2lg:justify-between">
            <div className="sm:flex sm:flex-col-reverse sm:items-center sm:gap-12 2lg:flex-col 2lg:gap-0">
                <Image width="146" height="24" src="./images/logo-light.svg" alt="Manage logo."/>
                <div className="sm:flex sm:gap-6">
                    <Image width="24" height="24" src="./images/icon-facebook.svg" alt="Logo/link para o Facebook."/>
                    <Image width="24" height="24" src="./images/icon-youtube.svg" alt="Logo/link para o YouTube."/>
                    <Image width="24" height="24" src="./images/icon-twitter.svg" alt="Logo/link para o Twitter."/>
                    <Image width="24" height="24" src="./images/icon-pinterest.svg" alt="Logo/link para o Pinterest."/>
                    <Image width="24" height="24" src="./images/icon-instagram.svg" alt="Logo/link para o Instagram."/>
                </div>
            </div>

            <div className="sm:flex sm:items-start sm:justify-around">
                <ul className="sm:flex sm:flex-col sm:gap-2">
                    <li className="sm:list-none"><a className="sm:text-neutralVeryLightGray sm:text-sm sm:decoration-none md:text-lg" hrf="/">Home</a></li>
                    <li className="sm:list-none"><a className="sm:text-neutralVeryLightGray sm:text-sm sm:decoration-none md:text-lg" hrf="/">Pricing</a></li>
                    <li className="sm:list-none"><a className="sm:text-neutralVeryLightGray sm:text-sm sm:decoration-none md:text-lg" hrf="/">Products</a></li>
                    <li className="sm:list-none"><a className="sm:text-neutralVeryLightGray sm:text-sm sm:decoration-none md:text-lg" hrf="/">About Us</a></li>
                </ul>

                <ul className="sm:flex sm:flex-col sm:gap-2">
                    <li className="sm:list-none"><a className="sm:text-neutralVeryLightGray sm:text-sm sm:decoration-none md:text-lg" hrf="/">Careers</a></li>
                    <li className="sm:list-none"><a className="sm:text-neutralVeryLightGray sm:text-sm sm:decoration-none md:text-lg" hrf="/">Comunity</a></li>
                    <li className="sm:list-none"><a className="sm:text-neutralVeryLightGray sm:text-sm sm:decoration-none md:text-lg" hrf="/">Privacy policy</a></li>
                </ul>
            </div>
                
            <div>
                <div className="sm:flex sm:items-center sm:justify-between md:justify-around 2lg:justify-center 2lg:gap-2">
                    <input className="sm:h-8 sm:px-2 sm:rounded-3xl" placeholder="Updates in your inbox..."></input>
                    <button className="sm:h-8 sm:px-4 sm:bg-primaryBrightRed sm:text-neutralVeryLightGray sm:text-sm sm:rounded-3xl">Go</button>
                </div>
                <span className="sm:absolute sm:bottom-12 sm:left-1/2 sm:-translate-x-1/2 sm:text-neutralDarkGrayishBlue sm:text-xs sm:whitespace-nowrap">Copyright 2020. All Rights Reserved</span>
            </div>
        </footer>
    )
} 