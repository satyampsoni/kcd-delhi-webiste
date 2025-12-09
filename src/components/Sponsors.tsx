
import Link from "next/link";

export default function Sponsors() {
    return (
        <section id="sponsors" className="relative w-full py-24 bg-gradient-to-b from-[#172B4C] to-[#9FBAC3] min-h-[60vh] flex items-center justify-center overflow-hidden">

            {/* Background Overlay for texture/noise if needed, or simple gradient */}
            <div className="absolute inset-0 bg-white/5 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-5xl">
                <div className="bg-white/25 backdrop-blur-md border border-white/30 rounded-xl p-6 md:p-20 text-center shadow-2xl">

                    <h2 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] mb-8 tracking-tight">
                        Sponsors
                    </h2>

                    <p className="text-xl md:text-2xl text-[#1e293b] max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                        Join us as a sponsor at Kubernetes Community Days New Delhi and play a key role in empowering India’s cloud-native community. Sponsoring KCD New Delhi offers measurable business value—strengthen brand visibility, generate high-quality leads, position your solutions in front of active adopters, and demonstrate your commitment to the open-source ecosystem.
                    </p>

                    <Link 
                        href="/sponsorship.html"
                        className="inline-block bg-[#e2e8f0] hover:bg-white text-[#0f172a] font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg md:text-xl transform hover:-translate-y-1"
                    >
                        Check Sponsorship Opportunities
                    </Link>
                   

                </div>
            </div>

        </section>
    );
}
