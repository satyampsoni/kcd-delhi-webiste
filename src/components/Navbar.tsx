import Image from "next/image";
import Link from "next/link";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Agenda", href: "#agenda" },
    { name: "Speakers", href: "#speakers" },
    { name: "Venue", href: "#venue" },
    { name: "Team", href: "#team" },
    { name: "Sponsors", href: "#sponsors" },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-transparent">
            <Link href="/" className="relative h-16 w-16 md:h-20 md:w-20">
                <Image
                    src="/KCD DELHI Logo.png"
                    alt="KCD Delhi Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 64px, 80px"
                    priority
                />
            </Link>

            <div className="hidden md:flex items-center gap-10">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-[#004e66] hover:text-[#004e66]/80 font-bold text-2xl transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Mobile menu button placeholder for future implementation if needed */}
        </nav>
    );
}
