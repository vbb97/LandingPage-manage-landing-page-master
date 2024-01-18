export default function SecondaryItem({number, title, text}) {
    return (
        <div>
            <div className="sm:flex sm:flex-col sm:gap-3">
                <div className="sm:w-96 sm:flex sm:items-center sm:justify-start gap-2 sm:bg-neutralVeryPaleRed sm:rounded-3xl">
                    <span className="sm:py-1 sm:px-4 sm:bg-primaryBrightRed sm:text-neutralVeryLightGray sm:text-sm sm:rounded-3xl">{number}</span>
                    <h4 className="sm:text-sm sm:font-black md:text-lg">{title}</h4>
                </div>
                <p className="sm:text-neutralDarkGrayishBlue sm:text-start sm:text-sm sm:leading-6 md:text-base">{text}</p>
            </div>
        </div>
    )
}