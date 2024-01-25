import Image from "next/image"

export default function Testimonials() {
    return (
        <section className="sm:pt-14 sm:flex sm:flex-col sm:items-center sm:gap-14 2lg:px-12">
            <h2 className="sm:text-primaryDarkBlue sm:text-3xl sm:font-black">What they’ve said</h2>
            
            <div id="slider" className="sm:w-full sm:flex sm:scroll-smooth sm:overflow-x-auto xll:justify-center xll:overflow-clip">
            
                <div className="sm:w-full sm:mr-12 sm:px-4 sm:flex sm:flex-col sm:gap-4 sm:items-center sm:text-center sm:snap-start sm:shrink-0 sm:origin-center sm:scale-100 sm:transition-transform 2lg:w-72 xll:mr-0">
                    <Image width={'72'} height={'72'} src="/images/avatar-anisha.png"/>
                    <h4 className="sm:text-primaryDarkBlue sm:font-black md:text-lg">Anisha Li</h4>
                    <p className="sm:text-neutralDarkGrayishBlue sm:text-sm sm:leading-6 md:text-base">“Manage has supercharged our team’s workflow. The ability to maintain 
                    visibility on larger milestones at all times keeps everyone motivated.”</p>
                </div>

                <div className="sm:w-full sm:mr-12 sm:px-4 sm:flex sm:flex-col sm:gap-4 sm:items-center sm:text-center sm:snap-start sm:shrink-0 sm:origin-center sm:scale-100 sm:transition-transform 2lg:w-72 xll:mr-0">
                    <Image width={'72'} height={'72'} src="/images/avatar-ali.png"/>
                    <h4 className="sm:text-primaryDarkBlue sm:font-black md:text-lg">Ali Bravo</h4>
                    <p className="sm:text-neutralDarkGrayishBlue sm:text-sm sm:leading-6 md:text-base">“We have been able to cancel so many other subscriptions since using 
                    Manage. There is no more cross-channel confusion and everyone is much 
                    more focused.”</p>
                </div>

                <div className="sm:w-full sm:mr-12 sm:px-4 sm:flex sm:flex-col sm:gap-4 sm:items-center sm:text-center sm:snap-start sm:shrink-0 sm:origin-center sm:scale-100 sm:transition-transform 2lg:w-72 xll:mr-0">
                    <Image width={'72'} height={'72'} src="/images/avatar-richard.png"/>
                    <h4 className="sm:text-primaryDarkBlue sm:font-black md:text-lg">Richard Watts</h4>
                    <p className="sm:text-neutralDarkGrayishBlue sm:text-sm sm:leading-6 md:text-base">“Manage allows us to provide structure and process. It keeps us organized 
  and focused. I can’t stop recommending them to everyone I talk to!”</p>
                </div>


                <div className="sm:w-full sm:mr-12 sm:px-4 sm:flex sm:flex-col sm:gap-4 sm:items-center sm:text-center sm:snap-start sm:shrink-0 sm:origin-center sm:scale-100 sm:transition-transform 2lg:w-72 xll:mr-0">
                    <Image width={'72'} height={'72'} src="/images/avatar-shanai.png"/>
                    <h4 className="sm:text-primaryDarkBlue sm:font-black md:text-lg">Shanai Gough</h4>
                    <p className="sm:text-neutralDarkGrayishBlue sm:text-sm sm:leading-6 md:text-base">“Their software allows us to track, manage and collaborate on our projects 
  from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
                </div>
                
            </div>

            <button className="sm:py-3 sm:px-8 sm:bg-primaryBrightRed sm:text-neutralVeryLightGray sm:text-sm sm:rounded-3xl sm:hover:opacity-65 sm:hover:shadow-none sm:shadow-red-shadow sm:transition-shadow md:text-xl">Get Started</button>
        </section>
    )
}