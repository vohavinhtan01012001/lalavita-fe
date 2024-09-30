import clsx from "clsx";
import React from "react";

type ContactInfo = {
    title: string;
    text: React.ReactNode;
    className?: string;
}

const ContactInfo = ({
    title,
    text,
    className
}: ContactInfo) => {
    return (
        <div className={clsx(className)}>
            <div className={
                clsx("mb-[32px]")
            }>
                <p className="text-white text-[17.5px] leading-[40.5px]">{title}</p>
            </div>
            <div className="max-w-[420px] text-white text-[36.5px] leading-[47.5px]">
                {text}
            </div>
        </div>
    )
}
export default ContactInfo;