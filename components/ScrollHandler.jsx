"use client";
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';

export default function ScrollHandler() {
    const pathname = usePathname();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);



     useEffect(() => {
    // Parallax effect for mask
    const handleScroll = () => {
      const offset = window.scrollY * 0.25;
      const maskEl = document.querySelector(".parallax-mask");
      if (maskEl) {
        maskEl.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return null;      
}