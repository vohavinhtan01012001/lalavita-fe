'use client'
import React, { useRef, useState } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Pagination from "../shared/Pagination";
import Header from "../shared/Header";

const HomeScreen = () => {
    const [selected, setSelected] = useState(1);

    const sectionRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];

    const handleScroll = () => {
        const currentSectionIndex = sectionRefs.findIndex((ref) => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                return rect.top >= 0 && rect.top <= window.innerHeight / 2;
            }
            return false;
        });

        if (currentSectionIndex !== -1) {
            setSelected(currentSectionIndex + 1);
        }
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="h-full overflow-hidden">
            <Header selected={selected} />
            <div ref={sectionRefs[0]}>
                <Section1 />
            </div>
            <div ref={sectionRefs[1]}>
                <Section2 />
            </div>
            <div ref={sectionRefs[2]}>
                <Section3 />
            </div>
            <div ref={sectionRefs[3]}>
                <Section4 />
            </div>
            <div ref={sectionRefs[4]}>
                <Section5 />
            </div>
            <div ref={sectionRefs[5]}>
                <Section6 />
            </div>
            <div ref={sectionRefs[6]}>
                <Section7 />
            </div>
            <div className="fixed right-[80px] top-1/2 max-[1200px]:right-10 max-[500px]:right-5">
                <Pagination selected={selected} setSelected={setSelected} sectionRefs={sectionRefs} />
            </div>
        </div>
    );
};

export default HomeScreen;
