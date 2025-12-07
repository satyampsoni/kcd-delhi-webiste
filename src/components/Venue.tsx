import Image from "next/image";
import { MapPin, Building2, Calendar } from "lucide-react";

export default function Venue() {
    return (
        <section id="venue" className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10 w-full h-full bg-[linear-gradient(180deg,_#0F516B_17%,_rgba(15,81,107,0.7)_54%,_rgba(203,154,96,0.61)_98%)]">

            </div>
            <div className="absolute inset-0 z-0">
                <Image
                    src="/lotus temple.png"
                    alt="Lotus Temple Background"
                    fill
                    className="object-cover object-center mix-blend-overlay opacity-50"
                    quality={100}
                />
            </div>

            {/* Top Fade Gradient - continuous from previous section */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1a6b7c] to-transparent z-[5]" />

            {/* Main Container */}
            <div className="relative z-10 w-full px-4 md:px-16 mx-16">

                {/* Large Glass Card */}
                <div className="bg-[#DEDEDE]/20 backdrop-blur-xs border border-black/50 rounded-xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">

                    {/* Title */}
                    <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-black">
                        Venue
                    </h2>

                    {/* Info Circles */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">

                        {/* Location */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-[#0F0B33] flex items-center justify-center bg-transparent relative group hover:scale-105 transition-transform">
                                <MapPin className="w-10 h-10 md:w-12 md:h-12 text-[#0F0B33]" />
                            </div>
                            <div className="text-center">
                                <p className="text-[#0F0B33] text-lg">Location:</p>
                                <p className="text-[#0F0B33] text-xl font-medium">New Delhi, India</p>
                            </div>
                        </div>

                        {/* Place */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-[#0F0B33] flex items-center justify-center bg-transparent relative group hover:scale-105 transition-transform">
                                <Building2 className="w-10 h-10 md:w-12 md:h-12 text-[#0F0B33]" />
                            </div>
                            <div className="text-center">
                                <p className="text-[#0F0B33] text-lg">Place:</p>
                                <p className="text-[#0F0B33] text-xl font-medium">Venue name</p>
                            </div>
                        </div>

                        {/* Date */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-[#0F0B33] flex items-center justify-center bg-transparent relative group hover:scale-105 transition-transform">
                                <Calendar className="w-10 h-10 md:w-12 md:h-12 text-[#0F0B33]" />
                            </div>
                            <div className="text-center">
                                <p className="text-[#0F0B33] text-lg">Date:</p>
                                <p className="text-[#0F0B33] text-xl font-medium">February 26 2026</p>
                            </div>
                        </div>
                    </div>

                    {/* View on Map Button */}
                    <div className="flex justify-center mb-16">
                        <button className="bg-[#3e3e3e] hover:bg-black text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg border border-[#0F0B33]">
                            View on Map
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-white/20 mb-12" />

                    {/* FAQ Section */}
                    <div className="w-full">
                        <h3 className="text-3xl md:text-3xl font-bold text-[#0F0B33] mb-8">
                            Frequently asked questions
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* FAQ Card 1 */}
                            <div className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                                <h4 className="font-bold text-black text-lg mb-2">What&apos;s Included?</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Network with fellow attendees and grab some refreFull day access, breakfast, lunch, evening snacks, conference materials, exclusive swag, and networking opportunities with 500+ attendees.
                                </p>
                            </div>

                            {/* FAQ Card 2 */}
                            <div className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                                <h4 className="font-bold text-black text-lg mb-2">Who Should Attend?</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    DevOps engineers, cloud architects, platform engineers, SREs, developers, and technology leaders interested in Kubernetes and cloud-native technologies.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
