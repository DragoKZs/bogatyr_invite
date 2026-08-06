"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navigation = [
    { title: "Приглашение", href: "#about" },
    { title: "Программа", href: "#program" },
    { title: "Место проведения", href: "#location" },
    { title: "Регистрация", href: "#registration" },
    { title: "Контакты", href: "#contacts" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const scroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", scroll);

        return () => window.removeEventListener("scroll", scroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{
                    y: -80,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.7,
                }}
                className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${scrolled
                    ? "backdrop-blur-xl bg-black/60 shadow-xl"
                    : "bg-transparent"
                    }`}
            >
                <div className="container flex h-20 items-center justify-between">
                    <Link
                        href="/"
                        className="text-xl font-bold tracking-[3px] uppercase"
                    >
                        День шахтёра 2026
                    </Link>

                    <nav className="hidden items-center gap-8 lg:flex">
                        {navigation.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm uppercase tracking-wider text-white/80 transition hover:text-yellow-400"
                            >
                                {item.title}
                            </a>
                        ))}
                    </nav>

                    <button
                        onClick={() => setMobileOpen(true)}
                        className="lg:hidden"
                    >
                        <Menu size={32} />
                    </button>
                </div>
            </motion.header>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black"
                    >
                        <div className="container flex h-20 items-center justify-between">
                            <span className="text-2xl font-black">
                                БОГАТЫРЬ
                            </span>

                            <button onClick={() => setMobileOpen(false)}>
                                <X size={34} />
                            </button>
                        </div>

                        <div className="mt-20 flex flex-col items-center gap-10">
                            {navigation.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-3xl font-semibold"
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}