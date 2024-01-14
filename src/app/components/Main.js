import Image from "next/image"

export default function Main () {
    return (
        <section className="sm:flex sm:flex-col sm:items-center sm:text-center sm:z-0">
            <Image width={814} height={814} className="sm:absolute sm:-top-2 sm:-right-12 sm:-z-10" src="/images/bg-tablet-pattern.svg"/>
            <Image width={580} height={525} className="sm:relative sm:z-0" src="/images/illustration-intro.svg"/>

            <div className="sm:pb-32 sm:px-6 sm:bg-[url('/images/bg-tablet-pattern.svg')] sm:bg-no-repeat sm:bg-bottom-4 sm:bg-contain">
                <h1 className="sm:text-3xl sm:font-extrabold">Bring everyone together to build better products.</h1>
                <p className="sm:mt-5 sm:text-neutralDarkGrayishBlue sm:text-sm">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <button className="sm:mt-8 sm:py-3 sm:px-8 sm:bg-primaryBrightRed sm:text-neutralVeryLightGray sm:text-sm sm:rounded-3xl">Get Started</button>
            </div>
        </section>
    )
}