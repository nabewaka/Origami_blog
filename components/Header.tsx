"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "ホーム" },
        { href: "/works", label: "作品一覧" },
        { href: "/tsubuyaki", label: "つぶやき" },
    ];

    return (
        <header className="bg-yellow relative">
            <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* ロゴ */}
                <div className="flex items-center gap-2">
                    <div className="relative w-10 h-10 overflow-hidden rounded-full">
                        <Image
                            src="/images/マナベ.jpg"
                            alt="サイトアイコン"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <Link
                        href="/"
                        className="text-white font-bold"
                        style={{ fontSize: "var(--text-xl)" }}
                    >
                        マナベの折り紙記録
                    </Link>
                </div>

                {/* PC*/}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-white hover:text-yellow-dark transition-colors font-medium"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* スマホ */}
                <div className="relative md:hidden">
                    <button
                        className="text-white text-3xl leading-none"
                        onClick={() => setOpen(!open)}
                        aria-label="メニューを開く"
                    >
                        {open ? "✕" : "☰"}
                    </button>

                    {/* ドロップダウン */}
                    <div
                        className={`
                            absolute right-0 top-full mt-2
                            bg-yellow p-4 rounded-lg shadow-lg
                            flex flex-col gap-4 z-50 min-w-max
                            transition-all duration-200
                            ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                        `}
                    >
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-white hover:text-yellow-dark transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </header>
    );
}