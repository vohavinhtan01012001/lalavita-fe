import clsx from "clsx";

type HeaderSectionProps = {
    titleBlue?: string;
    title?: React.ReactNode;
    text?: React.ReactNode;
    className?: string;
}

const HeaderSection = ({
    title,
    text,
    titleBlue,
    className
}: HeaderSectionProps) => {
    return <div className={clsx(className)}>
        <p className="text-[#42c0cc] text-[18.5px] mb-[15px] font-semibold">{titleBlue}</p>
        <h1 className="text-[#222222] font-noto text-[40px] leading-[48px] mb-[32px] font-semibold">{title}</h1>
        <p className="text-[17.5px] text-[#22222] leading-[30px]">{text}</p>
    </div>
}

export default HeaderSection;