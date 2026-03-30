const messages: string[] = [
    "DELIVERY FREE WITH NO MINIMUM PURCHASE!",
    "10% DISCOUNT WHEN YOU REGISTER NOW",
    "GIFT WITH YOUR FIRST PURCHASE",
    "ORIGINAL ARABIAN FRAGRANCES",
    "PAY IN INTEREST-FREE INSTALLMENTS",
];

const TopSlider = () => {
    return (
        <div className="w-full bg-black overflow-hidden border-b border-neutral-800">
            <div className="relative flex overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee items-center py-1">
                    {[...messages, ...messages].map((text, index) => (
                        <div
                            key={index}
                            className="flex items-center text-white text-sm font-medium px-4 uppercase"
                        >
                            <span>{text}</span>

                            {/* separator */}
                            <div className="mx-6 w-1 h-1 rounded-full bg-white opacity-90"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopSlider;