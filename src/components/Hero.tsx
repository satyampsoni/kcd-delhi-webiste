"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-01-01T00:00:00"); // Placeholder date

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +TARGET_DATE - +new Date();
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
                    minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
                    seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">
            {/* Background Layer 1: Image */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/indiagate.png"
                    alt="India Gate Background"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                />
            </div>

            {/* Background Layer 2: Gradient Overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#EAB308]/60 via-[#F97316]/50 to-[#14B8A6]/60 mix-blend-multiply" />


            <div className="container mx-auto px-6 md:px-12 pt-20 z-10">
                <div className="flex flex-col items-start gap-8 max-w-4xl">
                    <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight drop-shadow-lg">
                        KCD<br />
                        Delhi<br />
                        2026
                    </h1>

                    <div className="flex gap-4 md:gap-8 flex-wrap">
                        {Object.entries(timeLeft).map(([unit, value]) => (
                            <div key={unit} className="flex flex-col gap-2 items-center">
                                <span className="text-white/90 text-sm md:text-lg capitalize font-medium drop-shadow-md">{unit}</span>
                                <div className="bg-white rounded-2xl w-20 h-16 md:w-24 md:h-20 flex items-center justify-center shadow-lg">
                                    <span className="text-black text-2xl md:text-3xl font-bold">{value}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                        <button className="bg-[#0f172a] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#0f172a]/90 transition-colors shadow-lg w-full sm:w-auto">
                            Coming soon
                        </button>
                        <button className="bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white/10 transition-colors shadow-lg w-full sm:w-auto backdrop-blur-sm">
                            Call for papers
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
