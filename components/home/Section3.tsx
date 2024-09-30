import Image from "next/image";
import HeaderSection from "../shared/HeaderSection";
import React from "react";

const Section3 = () => {
    return <div className="pt-[156px]">
        <div className="flex items-center justify-center gap-[115px] pb-[156px]">
            <HeaderSection
                titleBlue="라라비타 NMN 원료"
                title="Uthever® NMN이 SUPERCONDRIA® NMN으로 새롭게 태어났습니다."
                text={<>
                    라라비타는 Uthever® NMN 상표 사용 허가를 받은 최초의 한국 브랜드입니다. Uthever® NMN은 라라비타의 SUPERCONDRIA® NMN으로 전 세계에
                    <br /> 판매되고 있습니다. Effepharm의 Uthever® NMN은 시장에서 순도, 효능 및
                    <br /> 품질에서 가장 뛰어난 원료로 인정 받고 있습니다. 99% 이상의 고순도를 가지고 있는 것이 특징입니다.
                </>}
                className="max-w-[554px]"
            />
            <div>
                <Image
                    src={'/assets/main-illust-03.png'}
                    width={700}
                    height={768}
                    alt="main-illust-03"
                />
            </div>
        </div>
    </div>
}

export default Section3;