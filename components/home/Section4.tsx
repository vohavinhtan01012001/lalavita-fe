import React from 'react';
import HeaderSection from '../shared/HeaderSection';
import Image from 'next/image';

const Section4 = () => {
    return <div className="bg-white w-full flex items-center max-[900px]:flex-col">
        <div className="flex-1 h-full bg-[#fed614] pt-[200px] flex flex-col items-center pb-[135px]  max-[900px]:w-full">
            <HeaderSection
                titleBlue='Advantages 1'
                title={
                    '99% 이상 고순도의 Uthever® NMN'
                }
                text={
                    <>
                        1. 가장 높은 고순도 NMN. <br />
                        2. 세계 최대 시험인증기관 인터텍 인증 획득.
                    </>
                }
                className='max-w-[350px] text-center'
            />
            <div>
                <Image
                    src={'/assets/main-illust-04-1.png'}
                    width={451}
                    height={450}
                    alt='main-illust-04-1'
                />
            </div>
        </div>
        <div className="flex-1 h-full pt-[200px] flex flex-col items-center pb-[135px]">
            <HeaderSection
                titleBlue='Advantages 2'
                title={
                    <>
                    높은 안전성 및 <br />
                    유효성
                    </>
                }
                text={
                    <>
                        1. Effepharm에서는 Uthever® NMN에 대한 동물실험과 인체 임상실험을 통해 안정성 및 유효성 인증. <br />
                        2. 흡수성과 온도에 휠씬 덜 민감하여 실온에서 보관 가능.
                    </>
                }
                className='max-w-[410px] text-center'
            />
            <div>
                <Image
                    src={'/assets/main-illust-04-2.png'}
                    width={451}
                    height={450}
                    alt='main-illust-04-1'
                />
            </div>
        </div>
    </div>
}

export default Section4;