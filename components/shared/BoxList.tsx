import { BOX_LIST } from "@/mockData";
import { BoxItemType } from "@/types";
import clsx from "clsx";
import Image from "next/image";


const BoxItem = ({
    image,
    text,
    title,
    color,
}: BoxItemType) => {
    return <div className={
        clsx(
            'px-[41px] pt-[48px] pb-[74px] w-[467px] h-[448px] rounded-[20px] max-[490px]:w-full',
            color === 'white' ? 'bg-white' : 'bg-[#42c0cc]'
        )
    }>
        <div className="w-full">
            <div className="w-full mb-[26px]">
                <Image
                    src={`/assets/${image}.png`}
                    alt={image ?? "img"}
                    height={61}
                    width={61}
                />
            </div>
            <div>
                <div>
                    <h1 className="max-w-[245px] text-[32px] leading-[40px] font-semibold">
                        {title}
                    </h1>
                </div>
                <p className={
                    clsx(
                        'mt-[37px] text-[18px] leading-[30px] max-w-[370px] max-[490px]:mt-2',
                        color === 'white' ? 'text-[#999999]' : 'text-[#22222]'
                    )
                }>
                    {text}
                </p>
            </div>
        </div>
    </div>
}


const BoxList = () => {
    return <div className="flex items-center h-full gap-[30px] w-full justify-center pt-[100px] pb-[170px] overflow-hidden max-[1470px]:flex-col max-[490px]:px-2">
        {
            BOX_LIST.map((item, index) => {
                return <BoxItem
                    key={index}
                    {...item}
                />
            })
        }
    </div>
}

export default BoxList;