"use client"
import { SITE_TITLE } from "@/lib/constants";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 10) {
        setShow(true);
      } else if (y > lastScroll.current) {
        setShow(false); // 下スクロールで非表示
      } else {
        setShow(true); // 上スクロールで表示
      }
      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-neutral-200 dark:border-slate-700 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <h2 className="text-xl md:text-2xl font-bold tracking-tight leading-tight mt-0 flex items-center h-16 px-4">
        <Link href="/" className="hover:underline">
          {SITE_TITLE}
        </Link>
      </h2>
    </header>
  );
};

export default Header;