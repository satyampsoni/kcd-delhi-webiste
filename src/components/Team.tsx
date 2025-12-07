import { User, MoreVertical } from "lucide-react";
import Marquee from "react-fast-marquee";

const organisers = [
    { id: 1, name: "Name", role: "role in company", company: "company name", linkedin: "linkedin.com" },
    { id: 2, name: "Name", role: "role in company", company: "company name", linkedin: "linkedin.com" },
    { id: 3, name: "Name", role: "role in company", company: "company name", linkedin: "linkedin.com" },
    { id: 4, name: "Name", role: "role in company", company: "company name", linkedin: "linkedin.com" },
    { id: 5, name: "Name", role: "role in company", company: "company name", linkedin: "linkedin.com" },
];

const volunteers = [
    { id: 1, name: "Name", role: "role in company", company: "company name", linkedin: "linkedin.com" },
    { id: 2, name: "Name", role: "role in company", company: "company name", linkedin: "linkedin.com" },
    { id: 3, name: "Name", role: "role in company", company: "company name", linkedin: "linkedin.com" },
    { id: 4, name: "Name", role: "role in company", company: "company name", linkedin: "linkedin.com" },
    { id: 5, name: "Name", role: "role in company", company: "company name", linkedin: "linkedin.com" },
];

export default function Team() {
    return (
        <section id="team" className="relative w-full py-20 bg-gradient-to-b from-[#DCA15F] to-[#0F516B] min-h-screen">

            <div className="w-full">

                {/* Section Title */}
                <h2 className="text-4xl md:text-6xl font-bold text-black text-center mb-16 px-4">
                    Meet the team
                </h2>

                {/* Organisers Section */}
                <div className="mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8 px-4 md:px-16 container mx-auto">
                        Organisers
                    </h3>

                    <Marquee gradient={false} speed={40} className="py-20" autoFill>
                        <div className="flex gap-6 px-3">
                            {organisers.map((person) => (
                                <div key={person.id} className="bg-[#E6DCCF] rounded-lg p-6 flex flex-col items-center relative shadow-[0_20px_50px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-transform duration-300 w-64 md:w-72 shrink-0 mx-4">
                                    {/* Menu Icon */}
                                    <button className="absolute top-4 right-4 text-gray-600 hover:text-black">
                                        <MoreVertical size={20} />
                                    </button>

                                    {/* Avatar Placeholder */}
                                    <div className="w-24 h-24 rounded-t-full rounded-b-[40%] flex items-end justify-center mb-4 mt-4 overflow-hidden">
                                        <User className="text-black w-16 h-16 translate-y-2" fill="black" />
                                    </div>

                                    {/* Info */}
                                    <h4 className="text-lg font-bold text-black mb-1">{person.name}</h4>
                                    <p className="text-xs text-gray-600 mb-4 uppercase tracking-wide">{person.role}</p>

                                    <p className="text-sm text-gray-700 mb-1">{person.company}</p>
                                    <a href="#" className="text-[#0077b5] text-sm hover:underline">{person.linkedin}</a>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>

                {/* Volunteers Section */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8 px-4 md:px-16 container mx-auto">
                        Volunteers
                    </h3>

                    <Marquee gradient={false} speed={40} direction="right" className="py-20" autoFill>
                        <div className="flex gap-6 px-3">
                            {volunteers.map((person) => (
                                <div key={person.id} className="bg-[#A9C3CD] rounded-lg p-6 flex flex-col items-center relative shadow-[0_20px_50px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-transform duration-300 w-64 md:w-72 shrink-0 mx-4">
                                    {/* Menu Icon */}
                                    <button className="absolute top-4 right-4 text-gray-700 hover:text-black">
                                        <MoreVertical size={20} />
                                    </button>

                                    {/* Avatar Placeholder */}
                                    <div className="w-24 h-24  rounded-t-full rounded-b-[40%] flex items-end justify-center mb-4 mt-4 overflow-hidden">
                                        <User className="text-black w-16 h-16 translate-y-2" fill="black" />
                                    </div>

                                    {/* Info */}
                                    <h4 className="text-lg font-bold text-black mb-1">{person.name}</h4>
                                    <p className="text-xs text-gray-700 mb-4 uppercase tracking-wide">{person.role}</p>

                                    <p className="text-sm text-gray-700 mb-1">{person.company}</p>
                                    <a href="#" className="text-[#0077b5] text-sm hover:underline">{person.linkedin}</a>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>

            </div>
        </section>
    );
}
