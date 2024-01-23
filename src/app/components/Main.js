import Image from "next/image"

export default function Main () {
    return (
        <section className="sm:flex sm:flex-col sm:items-center sm:text-center sm:z-0 2lg:px-12 xl:flex-row-reverse">
            <Image width={514} height={514} className="sm:absolute sm:-top-2 sm:-right-24 sm:-z-10" src="/images/bg-tablet-pattern.svg"/>
            <Image width={580} height={525} className="sm:relative sm:z-0" src="/images/illustration-intro.svg"/>

            <div className="sm:pb-32 sm:px-6 ">
                <Image width={514} height={514} className="sm:absolute sm:bottom-0 sm:-right-72 sm:-z-10 xl:top-128 xl:-left-64" src="/images/bg-tablet-pattern.svg"/>
                <h1 className="sm:text-primaryDarkBlue sm:text-3xl sm:font-extrabold  md:text-4xl">Bring everyone together to build better products.</h1>
                <p className="sm:mt-5 sm:text-neutralDarkGrayishBlue sm:text-sm  md:text-lg">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <button className="sm:mt-8 sm:py-3 sm:px-8 sm:bg-primaryBrightRed sm:text-neutralVeryLightGray sm:text-sm sm:rounded-3xl sm:hover:opacity-65 sm:hover:shadow-none sm:shadow-red-shadow sm:transition-shadow md:text-xl">Get Started</button>
            </div>
        </section>
    )
}