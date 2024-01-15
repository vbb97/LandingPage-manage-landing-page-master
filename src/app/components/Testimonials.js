import Image from "next/image"

export default function Testimonials() {
    return (
        <section className="sm:pt-14 sm:flex sm:flex-col sm:items-center sm:gap-14">
            <h2 className="sm:text-3xl sm:font-black">What they’ve said</h2>
            
            <div className="sm:px-4 sm:flex sm:flex-col sm:gap-4 sm:items-center sm:text-center">
                <Image width={'72'} height={'72'} src="/images/avatar-anisha.png"/>
                <h4 className="sm:font-black">Anisha Li</h4>
                <p className="sm:text-neutralDarkGrayishBlue sm:text-sm sm:leading-6">“Manage has supercharged our team’s workflow. The ability to maintain 
                visibility on larger milestones at all times keeps everyone motivated.”</p>
            </div>

            <button className="sm:py-3 sm:px-8 sm:bg-primaryBrightRed sm:text-neutralVeryLightGray sm:text-sm sm:rounded-3xl">Get Started</button>
        </section>
    )
}