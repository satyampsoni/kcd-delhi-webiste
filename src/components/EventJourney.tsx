import Image from "next/image";

const events = [
    { time: "9:00 AM", title: "Registration & Welcome Coffee", description: "Network with fellow attendees and grab some refreshments" },
    { time: "10:00 AM", title: "Keynote Speech", description: "Opening remarks and vision for KCD Delhi 2026" },
    { time: "11:30 AM", title: "Technical Sessions", description: "Deep dive into Kubernetes and Cloud Native technologies" },
    { time: "1:00 PM", title: "Lunch Break", description: "Enjoy a delicious spread and networking" },
    { time: "2:00 PM", title: "Workshops", description: "Hands-on learning experiences" },
    { time: "4:00 PM", title: "Closing Remarks", description: "Wrap up and community awards" },
];

export default function EventJourney() {
    return (
        <section id="agenda" className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/eventjourney.png"
                    alt="Event Journey Background"
                    fill
                    className="object-cover object-center"
                    quality={100}
                />
            </div>

            {/* Top Fade Gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#EFBB9E] to-transparent z-[5]" />

            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#DCA15F] to-transparent z-[5]" />


            {/* Title */}
            <h2 className="text-4xl md:text-6xl font-bold text-black text-center mb-16 md:mb-32 z-10">
                Event Journey
            </h2>

            {/* Timeline Container */}
            <div className="relative w-full max-w-7xl mx-auto px-4 h-[550px] md:h-[500px] z-10">

                {/* Main Horizontal Line */}
                <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-[#d97757] -translate-y-1/2 z-10" />

                {/* Train - Larger */}
                <div className="absolute left-2 md:left-4 top-1/2 -translate-y-[72%] z-20 w-36 h-24 md:w-64 md:h-40">
                    <Image src="/train.png" alt="Train" fill className="object-contain" />
                </div>

                {/* Timeline Items */}
                <div className="absolute left-40 md:left-72 right-4 top-0 bottom-0 flex justify-between">
                    {events.map((event, index) => {
                        const isAbove = index % 2 === 0;

                        return (
                            <div key={index} className="relative h-full flex items-center" style={{ width: '160px' }}>

                                {/* Dot */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#d97757] rounded-full z-30" />

                                {/* Vertical Line */}
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-[#d97757] z-20"
                                    style={{
                                        top: isAbove ? 'auto' : '50%',
                                        bottom: isAbove ? '50%' : 'auto',
                                        height: '80px',
                                    }}
                                />

                                {/* Card - Larger */}
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 w-40 md:w-48 z-10"
                                    style={{
                                        top: isAbove ? 'auto' : 'calc(50% + 90px)',
                                        bottom: isAbove ? 'calc(50% + 90px)' : 'auto',
                                    }}
                                >
                                    <div className="bg-[#fae8d9] border border-[#e8c9b3] rounded-2xl p-4 md:p-5 text-center shadow-sm hover:scale-105 transition-transform duration-300">
                                        <h3 className="font-bold text-gray-900 leading-tight text-sm md:text-base mb-1">
                                            {event.title}
                                        </h3>
                                        <span className="block text-[#d97757] font-bold text-xs md:text-sm mb-1">
                                            {event.time}
                                        </span>
                                        <p className="text-gray-600 text-[9px] md:text-xs leading-relaxed">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
