import React from "react";
import clsx from 'clsx';

const Pagination = ({ selected, setSelected, sectionRefs }: { selected: number, setSelected: (value: number) => void, sectionRefs: React.RefObject<HTMLDivElement>[] }) => {
    const totalSections = 7;

    const handleClick = (index: number) => {
        setSelected(index + 1);
        sectionRefs[index]?.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <>
            {Array.from({ length: totalSections }).map((_, index) =>
            (
                selected === 2 || selected === 6 || selected === 7 ? <div
                    key={index}
                    className={clsx(
                        'w-2 h-2 rounded-full my-2 cursor-pointer',
                        selected === index + 1 ? 'bg-[#42C0CC]' : 'bg-white',
                    )}
                    onClick={() => handleClick(index)}
                ></div> :
                    <div
                        key={index}
                        className={clsx(
                            'w-2 h-2 rounded-full my-2 cursor-pointer',
                            selected === index + 1 ? 'bg-[#42C0CC]' : 'bg-[#e7e7e7]',
                        )}
                        onClick={() => handleClick(index)}
                    ></div>
            )
            )}
        </>
    );
};

export default Pagination;
