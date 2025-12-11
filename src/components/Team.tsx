import { User, MoreVertical, Linkedin } from "lucide-react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const organisers = [
  {
    id: 1,
    name: "Abhinav Dubey",
    role: "Solutions Architect",
    company: "Devtron Inc",
    linkedin: "https://www.linkedin.com/in/abhinavd26/",
    image: "/team-assets/abhinav.png",
  },
  {
    id: 2,
    name: "Ashish Kumar",
    role: "CTO",
    company: "CloudZenia",
    linkedin: "https://www.linkedin.com/in/ashishkumar99/",
    image: "/team-assets/ashish.png",
  },
  {
    id: 3,
    name: "Manoj Sardana",
    role: "Director of Information Systems",
    company: "HCL Software",
    linkedin: "https://www.linkedin.com/in/manojksardana/",
    image: "/team-assets/manoj.png",
  },
  {
    id: 4,
    name: "Saiyam Pathak",
    role: "Head of Developer Relations",
    company: "Vcluster",
    linkedin: "https://www.linkedin.com/in/saiyampathak/",
    image: "/team-assets/saiyam.png",
  },
  {
    id: 5,
    name: "Saloni Narang",
    role: "Co-Founder",
    company: "KubeSimplify",
    linkedin: "https://www.linkedin.com/in/saloninarang/",
    image: "/team-assets/saloni.png",
  },
  {
    id: 6,
    name: "Satyam Soni",
    role: "OSS Developer",
    company: "Devtron Inc",
    linkedin: "https://www.linkedin.com/in/satyampsoni",
    image: "/team-assets/satyam.png",
  },
];

// const volunteers = [
//     { id: 1, name: "Name", role: "role in company", company: "company name", linkedin: "linkedin.com" },
//     { id: 2, name: "Name", role: "role in company", company: "company name", linkedin: "linkedin.com" },
//     { id: 3, name: "Name", role: "role in company", company: "company name", linkedin: "linkedin.com" },
//     { id: 4, name: "Name", role: "role in company", company: "company name", linkedin: "linkedin.com" },
//     { id: 5, name: "Name", role: "role in company", company: "company name", linkedin: "linkedin.com" },
// ];

export default function Team() {
  return (
    <section
      id="team"
      className="relative w-full py-8 bg-gradient-to-b from-[#DCA15F] to-[#0F516B]"
    >
      <div className="w-full">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-black text-center mb-6 px-4">
          Meet the team
        </h2>

        {/* Organisers Section */}
        <div className="mb-4">
          {/* <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8 px-4 md:px-16 container mx-auto">
                        Organisers
                    </h3> */}

          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="py-8"
            autoFill
          >
            <div className="flex gap-6 px-3">
              {organisers.map((person) => (
                <div
                  key={person.id}
                  className="bg-[#E6DCCF] rounded-lg p-6 flex flex-col items-center relative 
                           shadow-[0_20px_50px_rgba(255,255,255,0.5)] hover:-translate-y-1 
                           transition-transform duration-300 w-64 md:w-72 shrink-0 mx-4"
                >
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-t-full rounded-b-[40%] mb-4 mt-4 overflow-hidden relative bg-gray-100">
                    <Image
                      src={person.image}
                      alt={`${person.name} profile picture`}
                      fill
                      className="object-cover object-center"
                      sizes="96px"
                    />
                  </div>

                  {/* Info */}
                  <h4 className="text-lg font-bold text-black mb-1">
                    {person.name}
                  </h4>
                  <p className="text-xs text-gray-600 mb-4 uppercase tracking-wide">
                    {person.role}
                  </p>
                  <p className="text-sm text-gray-700 mb-3">{person.company}</p>

                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0077b5] text-white px-4 py-2 
                               rounded-lg hover:bg-[#005885] transition-colors text-sm font-medium shadow-md"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Volunteers Section */}
        {/* <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8 px-4 md:px-16 container mx-auto">
                        Volunteers
                    </h3>

                    <Marquee gradient={false} speed={40} direction="right" className="py-20" autoFill>
                        <div className="flex gap-6 px-3">
                            {volunteers.map((person) => (
                                <div key={person.id} className="bg-[#A9C3CD] rounded-lg p-6 flex flex-col items-center relative shadow-[0_20px_50px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-transform duration-300 w-64 md:w-72 shrink-0 mx-4">
                                    <button className="absolute top-4 right-4 text-gray-700 hover:text-black">
                                        <MoreVertical size={20} />
                                    </button>

                                    <div className="w-24 h-24  rounded-t-full rounded-b-[40%] flex items-end justify-center mb-4 mt-4 overflow-hidden">
                                        <User className="text-black w-16 h-16 translate-y-2" fill="black" />
                                    </div>

                                    <h4 className="text-lg font-bold text-black mb-1">{person.name}</h4>
                                    <p className="text-xs text-gray-700 mb-4 uppercase tracking-wide">{person.role}</p>

                                    <p className="text-sm text-gray-700 mb-1">{person.company}</p>
                                    <a href="#" className="text-[#0077b5] text-sm hover:underline">{person.linkedin}</a>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div> */}
      </div>
    </section>
  );
}
