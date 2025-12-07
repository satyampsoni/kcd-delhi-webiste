
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-t from-[#143856] via-[#0F516B] to-[#0F516B] text-white py-16">
            <div className="container mx-auto px-4 md:px-16">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* CNCF Info - Spans 6 columns */}
                    <div className="md:col-span-6 flex flex-col gap-4">
                        <div>
                            <h3 className="text-2xl font-bold">CNCF</h3>
                            <p className="text-sm text-gray-300">Cloud Native Computing</p>
                        </div>
                        <p className="text-gray-200 text-lg leading-relaxed max-w-md">
                            KCD New Delhi is an official Cloud Native Computing Foundation event.
                        </p>
                    </div>

                    {/* Connect Links - Spans 3 columns */}
                    <div className="md:col-span-3 flex flex-col gap-4">
                        <h4 className="text-xl font-bold mb-2">Connect</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="#" className="text-gray-200 hover:text-white transition-colors">Twitter</Link>
                            <Link href="#" className="text-gray-200 hover:text-white transition-colors">Email</Link>
                        </div>
                    </div>

                    {/* Info Links - Spans 3 columns */}
                    <div className="md:col-span-3 flex flex-col gap-4">
                        <h4 className="text-xl font-bold mb-2">Info</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="#" className="text-gray-200 hover:text-white transition-colors">About</Link>
                            <Link href="#" className="text-gray-200 hover:text-white transition-colors">Call for Papers</Link>
                            <Link href="#" className="text-gray-200 hover:text-white transition-colors">Code of Conduct</Link>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/20 mb-8" />

                {/* Copyright */}
                <div className="text-center text-gray-400 text-sm">
                    &copy; 2025 KCD New Delhi. Licensed under MIT License.
                </div>

            </div>
        </footer>
    );
}
