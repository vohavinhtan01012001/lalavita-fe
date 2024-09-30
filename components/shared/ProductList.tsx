'use client'
import { PRODUCT_LIST_S5, ProductType } from "@/mockData";
import ButtonIcon from "./ButtonIcon";
import Image from "next/image";
import HeaderSection from "./HeaderSection";
import Button from "./Button";
import React, { useRef, useState } from "react";
import { motion } from 'framer-motion';

type ProductItemType = {
    index: number;
    productRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
    selectedIndex: number;
} & ProductType

const ProductItem = ({
    description,
    image,
    name,
    index,
    productRef,
    selectedIndex
}: ProductItemType) => {
    return (
        <motion.div
            ref={el => {
                productRef.current[index] = el;
            }}
            className="flex-shrink-0 max-w-[330px] min-h-[555px] flex flex-col">
            <div className="flex-1">
                <div className="mb-[30px]">
                    <Image
                        src={`/assets/${image}.png`}
                        alt={name}
                        height={280}
                        width={280}
                    />
                </div>
                <div className="ml-[53px] ">
                    <h3 className="text-[#22222] font-semibold text-2xl pb-[19px]">{name}</h3>
                    <p className="text-[#999999] text-base text-left tracking-normal">{description}</p>
                </div>
            </div>
            <div className="flex flex-col ml-[53px]">
                <div className="flex items-center gap-[5px]">
                    {
                        index === selectedIndex ?
                            <>
                                <Button>
                                    #신체기능향상
                                </Button>
                                <Button variant="secondary">
                                    #노화억제
                                </Button>
                            </> :
                            <>
                                <Button variant="light">
                                    #신체기능향상
                                </Button>
                                <Button variant="light">
                                    #노화억제
                                </Button>
                            </>
                    }
                </div>
            </div>
        </motion.div>
    );
};

const ProductList = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const productRef = useRef<(HTMLDivElement | null)[]>([]);
    const handleScroll = (index: number) => {
        if (index < 0 || index >= PRODUCT_LIST_S5.length) return;

        setSelectedIndex(index);

        const targetElement = productRef.current[index];

        if (targetElement) {
            if (index === 1) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'end',
                    block: 'nearest'
                });
            } else {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start',
                    block: 'nearest'
                });
            }
        }
    };
    return (
        <>
            <div className='flex items-center justify-between w-full px-[227px]'>
                <HeaderSection
                    titleBlue='NMN의 효능, 효과'
                    title="NMN의 효능과 효과를 한 눈에 살펴보세요."
                    className='max-w-[370px]'
                />
                <div className='flex items-center gap-[32px]'>
                    <div>
                        <p className='text-[#222222] text-[24px] leading-[48.5px]'>
                            {selectedIndex + 1}/
                            {PRODUCT_LIST_S5.length}
                        </p>
                    </div>
                    <div className='flex items-center gap-[14px] z-50'>
                        <ButtonIcon
                            icon={{
                                name: 'arrow_left',
                                height: 24,
                                width: 24,
                            }}
                            disabled={selectedIndex === 0}
                            onClick={() => handleScroll(selectedIndex - 1)}
                        />
                        <ButtonIcon
                            icon={{
                                name: 'arrow_right',
                                height: 24,
                                width: 24,
                            }}
                            disabled={selectedIndex === PRODUCT_LIST_S5.length - 1}
                            onClick={() => handleScroll(selectedIndex + 1)}
                        />
                    </div>
                </div>
            </div>
            <div className="overflow-hidden scroll-smooth mb-[135px] mt-[65px]">
                <div className="ml-[205px] flex gap-[50px] overflow-x-scroll scrollbar-hide ">
                    {
                        PRODUCT_LIST_S5.map((product, index) => (
                            <ProductItem productRef={productRef} selectedIndex={selectedIndex} key={product.id} index={index} {...product} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default ProductList;
