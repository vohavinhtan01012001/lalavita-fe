import React from 'react';
import BoxList from '../shared/BoxList';
import HeaderSection from '../shared/HeaderSection';

const Section2 = () => {
    return <div className="w-full pt-[179px] bg-[#fed614] z-10">
        <div className='w-full'>
            <HeaderSection
                titleBlue='NMN는 왜 중요할까요?'
                title={
                    <>
                        “노화는 질병, 그것도 치료할 수 있는 질병에 불과하다.
                        그리고 이것에 가장 근접한 물질은 ‘
                        <span className='font-bold'>NMN</span>
                        ’이다.”
                    </>
                }
                text='미국 하버드대학교 의과대학 블라바트닉 연구소 유전학 데이비드 싱클레어 교수'
                className='text-center max-w-[840px] mx-auto'
            />
            <div>
                <BoxList />
            </div>
        </div>
    </div>
}

export default Section2;