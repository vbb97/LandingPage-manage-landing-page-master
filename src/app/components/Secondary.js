import SecondaryItem from "./SecondaryItem"

export default function Secondary () {
    return (
        <section className="sm:px-3 sm:flex sm:flex-col sm:gap-12 sm:text-center 2lg:mt-12 2lg:px-12 2lg:flex-row 2lg:gap-4 2lg:text-left">
            <div className="sm:px-2 sm:flex sm:flex-col sm:gap-4">
                <h2 className="sm:text-primaryDarkBlue sm:text-2xl sm:font-black md:text-3xl">What’s different about Manage?</h2>
                <p className="sm:text-neutralDarkGrayishBlue sm:text-sm sm:leading-6 md:text-lg">Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams. </p>
            </div>

            <div className="sm:flex sm:flex-col sm:gap-8">
                <SecondaryItem
                    number={'01'}
                    title={'Track company-wide progress'}
                    text={'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'}
                />
                <SecondaryItem
                    number={'02'}
                    title={'Advanced built-in reports'}
                    text={'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'}
                />
                <SecondaryItem
                    number={'03'}
                    title={'Everything you need in one place'}
                    text={'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'}
                />
            </div>
            
        </section>
    )
}